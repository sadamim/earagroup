<?php
session_start();

/* =======================================================
   DEBUG (disable in production)
======================================================= */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/* =======================================================
   CORS HEADERS
======================================================= */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: text/plain");

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method Not Allowed"
    ]);
    exit;
}

/* =======================================================
   HELPER FUNCTIONS
======================================================= */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isValidMobile($mobile) {
    return preg_match('/^[0-9]{10}$/', $mobile);
}

/* =======================================================
   READ JSON INPUT
======================================================= */
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (empty($data) || !is_array($data)) {
    http_response_code(400);
    echo "Invalid JSON data";
    exit;
}

/* =======================================================
   REQUIRED FIELDS
======================================================= */
$name   = trim($data['name'] ?? '');
$email  = trim($data['email'] ?? '');
$phone  = trim($data['phone'] ?? '');

$prospectName   = trim($data['prospectName'] ?? '');
$prospectEmail  = trim($data['prospectEmail'] ?? '');
$prospectMobile = trim($data['prospectMobileNumber'] ?? '');

$cpRera     = trim($data['cpAgencyReraNumber'] ?? '');
$project    = trim($data['projectInterestedIn'] ?? '');

$formSource = trim($data['form_source'] ?? 'Channel Partner Form');
$subject    = trim($data['subject'] ?? 'New Channel Partner Referral');
$extraRecipients = $data['additionalRecipients'] ?? [];

/* =======================================================
   VALIDATION
======================================================= */
if ($name === '')              die("CP/Firm Name is required");
if ($email === '')             die("CP/Firm Email is required");
if (!isValidEmail($email))     die("Invalid CP/Firm Email");
if (!isValidMobile($phone))    die("Invalid CP/Firm Mobile");

if ($prospectName === '')      die("Prospect Name is required");
if ($prospectEmail === '')     die("Prospect Email is required");
if (!isValidEmail($prospectEmail)) die("Invalid Prospect Email");
if (!isValidMobile($prospectMobile)) die("Invalid Prospect Mobile");

/* =======================================================
   EMAIL BODY (HTML)
======================================================= */
$message = "
<html>
<head>
    <title>{$subject}</title>
</head>
<body style='font-family:Arial,sans-serif; line-height:1.6;'>
    <h2>Channel Partner Referral</h2>
    <p><strong>Source:</strong> {$formSource}</p>

    <hr>

    <h3>Channel Partner Details</h3>
    <p><strong>Firm Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Mobile:</strong> {$phone}</p>
    <p><strong>RERA Number:</strong> {$cpRera}</p>

    <hr>

    <h3>Prospect Details</h3>
    <p><strong>Name:</strong> {$prospectName}</p>
    <p><strong>Email:</strong> {$prospectEmail}</p>
    <p><strong>Mobile:</strong> {$prospectMobile}</p>
    <p><strong>Project Interested In:</strong> {$project}</p>

    <hr>
    <p>This enquiry was submitted from the EARA Group website.</p>
</body>
</html>
";

/* =======================================================
   EMAIL HEADERS
======================================================= */
$senderEmail = "noreply@earagroup.com";

$headers  = "From: EARA Group <{$senderEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

/* =======================================================
   RECIPIENTS
======================================================= */
$recipients = [
    "info@imsolutions.mobi",
    "sales@earagroup.com"
];

if (!empty($extraRecipients) && is_array($extraRecipients)) {
    $recipients = array_merge($recipients, $extraRecipients);
}

$recipients = array_unique($recipients);

/* =======================================================
   SEND EMAIL
======================================================= */
$allSent = true;
$envelopeSender = "-f {$senderEmail}";

foreach ($recipients as $to) {
    if (isValidEmail($to)) {
        if (!mail($to, $subject, $message, $headers, $envelopeSender)) {
            $allSent = false;
        }
    }
}

/* =======================================================
   RESPONSE
======================================================= */
if ($allSent) {
    echo "OK";
} else {
    http_response_code(500);
    echo "Email sending failed";
}
