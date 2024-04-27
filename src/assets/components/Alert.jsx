import React from "react";

function Alert({ mensaje, color, backgroundColor }) {
  return (
    <div style={{ color, backgroundColor }}>
      <p>{mensaje}</p>
    </div>
  );
}

export default Alert;
