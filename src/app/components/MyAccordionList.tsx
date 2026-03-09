'use client';

interface Item {
  id: number;
  title: string;
  content: string;
}

interface LocationGridProps {
  items: Item[];
}

export default function LocationGrid({ items }: LocationGridProps) {
  return (
    <div className="container-fluid ">
      <div className="row g-3 d-flex justify-content-center">
        {items.map((item) => (
          <div className="col-12 col-md-4 mb-3" key={item.id}>
            <div className="card h-100 border-0 shadow-sm">
              
              {/* Card Header */}
              <div 
                className="card-header text-white fw-bold text-center  mb-0"
                style={{
                  backgroundColor: '#111',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  paddingTop: "10px"
                }}
              >
                {item.title}
              </div>

              {/* Card Body */}
              <div 
                className="card-body"
                style={{
                  backgroundColor: '#f1f1f1',
                  fontSize: '0.9rem'
                }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      .location-list ul { 
                        list-style: disc; 
                        padding: 0 15px; 
                        margin: 0; 
                      }
                      .location-list li { 
                        margin-bottom: 10px; 
                        color: #333;
                        line-height: 1.4;
                      }
                    `,
                  }}
                />

                <div
                  className="location-list"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}