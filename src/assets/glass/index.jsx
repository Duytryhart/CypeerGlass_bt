import { useState } from "react";
import data from "./data.json";
// Sample data matching your JSON structure


export default function Glasses() {
  const [glasses, setGlasses] = useState(data);
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  // Model face using real image
  const ModelFace = ({ showGlasses = false }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img 
        src="/public/img/model.jpg" 
        alt="model" 
        style={{ 
          width: '280px',
          height: 'auto',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }} 
      />
      {showGlasses && (
        <img
          src={selectedGlass.url}
          alt={selectedGlass.name}
          style={{
            position: 'absolute',
            top: '65px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            opacity: 0.8,
            zIndex: 2
          }}
        />
      )}
    </div>
  );

  const renderFaceWithGlasses = () => {
    return (
      <div style={{ 
        display: 'flex', 
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '40px'
      }}>
        {/* Left side - Face with glasses and overlay */}
        <div style={{ position: 'relative' }}>
          <ModelFace showGlasses={true} />
          
          {/* Product info overlay */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 140, 0, 0.95)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            minWidth: '200px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 3
          }}>
            <div style={{ fontSize: '16px', marginBottom: '4px' }}>
              {selectedGlass.name}
            </div>
            <div style={{ fontSize: '12px', opacity: 0.9, lineHeight: '1.3' }}>
              {selectedGlass.desc}
            </div>
            <div style={{ fontSize: '18px', marginTop: '8px', fontWeight: 'bold' }}>
              ${selectedGlass.price}
            </div>
          </div>
        </div>
        
        {/* Right side - Clean face without glasses */}
        <div>
          <ModelFace showGlasses={false} />
        </div>
      </div>
    );
  };

  const renderListGlasses = () => {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          justifyItems: 'center'
        }}>
          {glasses.map((glass, index) => (
            <div
              key={glass.id}
              onClick={() => setSelectedGlass(glass)}
              style={{
                cursor: 'pointer',
                border: selectedGlass.id === glass.id ? '3px solid #ff8c00' : '2px solid #e0e0e0',
                padding: '15px',
                borderRadius: '12px',
                backgroundColor: selectedGlass.id === glass.id ? '#fff5e6' : 'white',
                transition: 'all 0.3s ease',
                transform: selectedGlass.id === glass.id ? 'scale(1.05)' : 'scale(1)',
                boxShadow: selectedGlass.id === glass.id ? '0 6px 20px rgba(255,140,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
                width: '120px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={glass.url}
                alt={glass.name}
                style={{ 
                  width: '100px',
                  height: 'auto',
                  maxHeight: '40px',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          TRY GLASSES APP ONLINE
        </h1>
      </div>
      
      {renderFaceWithGlasses()}
      {renderListGlasses()}
    </div>
  );
}