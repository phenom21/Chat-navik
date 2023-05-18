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
          backgroundColor: "#b8f2e1",
          height: "91vh",
        }}
      >
        {/* <p
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
        </p> */}
        <div style={{widht: "50%", display: "inline"}}>
          <Link
            to="/chat/login"
            style={{
              color: "white",
              backgroundColor: "#a366ff",
              fontWeight: "600",
              // border: "1.4px solid blue",
              borderRadius: "5px",
              padding: "2vh 6vh",
              marginLeft: "8%",
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
              color: "white",
              backgroundColor: "#a366ff",
              fontWeight: "600",
              // border: "1.4px solid blue",
              marginLeft: "8%",
              marginRight: "8%",
              borderRadius: "5px",
              padding: "2vh 6vh",
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
              marginLeft: "8%"
            }}
          ></img>
        </span>
      </section>
    </>
  );
}
