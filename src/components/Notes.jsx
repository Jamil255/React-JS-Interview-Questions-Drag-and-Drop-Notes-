import React from 'react';

const Notes = ({ content, ...props }) => {
    console.log(content);
  return (
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          border: "2px solid black",
          backgroundColor: "lightyellow",
          userSelect: "none",
          padding: "20px",
          width: "200px",
          cursor: "move",
      }}
       {...props}
      >
      📌{content}
    </div>
  );
}

export default Notes;
