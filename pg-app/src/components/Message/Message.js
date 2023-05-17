import React from "react";
import "./Message.css";

export default function Message({ user, message, classs }) {
  if (user) {
    return (
      <div
        className={`messageBox ${classs}`}
        style={{
          width: "50%",
          borderRadius: "0.5vmax",
          padding: "5px",
          margin: "10px",
          color: "white",
          fontWeight: "600",
          backgroundColor: " #0dcaf0",
        }}
      >
        {`${user}: ${message}`}
      </div>
    );
  } else {
    return (
      <div
        className={`messageBox ${classs}`}
        style={{
          width: "50%",
          borderRadius: "0.5vmax",
          padding: "5px",
          margin: "10px",
          color: "white",
          fontWeight: "600",
          backgroundColor: "#0d6efd",
        }}
      >
        {`You: ${message}`}
      </div>
    );
  }
}
