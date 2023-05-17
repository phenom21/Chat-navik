import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        style={{
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#212529",
          height: "91vh",
        }}
      >
        <p
          style={{
            width: "50%",
            height: "80%",
            display: "inline",
            paddingRight: "10px",
            paddingLeft: "20px",
            marginTop: "50px",
            fontFamily: "sans-serif",
            color: "blue",
            fontSize: "39.5px",
          }}
        >
          <span style={{ color: "#1affff" }}>Navik-</span>
          Asset-Tracking
        </p>
        <div style={{widht: "50%", display: "inline"}}>
          <Link
            to="/chat/login"
            style={{
              color: "blue",
              backgroundColor: "#1affff",
              fontWeight: "600",
              // border: "1.4px solid blue",
              borderRadius: "24px",
              padding: "1vh 3vh",
              textDecoration: "none",
              fontWeight: "600",
              marginRight: '5px'
            }}
          >
            Live Chat
          </Link>
          <Link
            to="/pg/list"
            style={{
              color: "blue",
              backgroundColor: "#1affff",
              fontWeight: "600",
              // border: "1.4px solid blue",
              borderRadius: "24px",
              padding: "1vh 3vh",
              textDecoration: "none",
              fontWeight: "600",
              marginRight: '5px'
            }}
          >
            Track Assets
          </Link>
        </div>
        <span style={{ width: "50%", height: "100%", borderRadius: "50%" }}>
          <img
            src="vector1.jpg"
            alt="home image"
            style={{
              width: "49%",
              height: "80%",
              marginTop: "50px",
              borderRadius: "8%",
            }}
          ></img>
        </span>
      </section>
    </>
  );
}
