import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [glasses, setGlasses] = useState(data);
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  // Render mặt người và kính đang chọn
  const renderFace = () => {
    return (
      <div className="face-container" style={{ position: "relative", textAlign: "center" }}>
        <img src="/public/img/model.jpg" alt="model" style={{ width: 250 }} />
        <img
          src={selectedGlass.url}
          alt={selectedGlass.name}
          style={{
            position: "absolute",
            top: 65,
            left: "50%",
            transform: "translateX(-50%)",
            width: 150,
            opacity: 0.8,
          }}
        />
        <div style={{ marginTop: 20 }}>
          <h3>{selectedGlass.name}</h3>
          <p>{selectedGlass.desc}</p>
        </div>
      </div>
    );
  };

  // Render danh sách kính
const renderListGlasses = () => {
  return (
    <div
      className="glasses-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      {glasses.map((glass, index) => (
        <div
          key={glass.id}
          onClick={() => setSelectedGlass(glass)}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <img
            src={`/img/g${index + 1}.jpg`}
            alt={glass.name}
            style={{ width: 100 }}
          />
        </div>
      ))}
    </div>
  );
};
const renderdesc=()=>{
  
}

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", padding: 20 }}>
      <h1>Virtual Glasses Try-On</h1>
      {renderFace()}
      {renderListGlasses()}
    </div>
  );
}