import React, { useEffect, useState } from "react";
import { userName } from "./ChatLogin";
import socketIO from "socket.io-client";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

const URL = "http://localhost:5000/";
let socket;

export default function ChatRoom() {
  const [id, setid] = useState();
  const [messages, setmessages] = useState([]);
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = socketIO(URL, { transports: ["websocket"] });

    socket.on("connect", () => {
      // alert("Connected");
      setid(socket.id);
    });

    socket.emit("joined", { userName });

    socket.on("welcome", (data) => {
      setmessages([...messages,data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setmessages([...messages,data])
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setmessages([...messages,data])
      console.log(data.user, data.message);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

useEffect(()=>{
  socket.on("sendMessage", (data)=>{
    setmessages([...messages,data])
    console.log(data.user, data.message, data.id);
  })
  return ()=>{
    socket.off();
  }
},[messages])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "400px",
          backgroudnColor: "blue",
          border: "2px solid ",
          marginTop: "5%",
        }}
      >
        <div
          className="Header"
          style={{
            height: "10%",
            color: "#0dcaf0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#343a40",
          }}
        >
          <h3>Chat Area</h3>
        </div>
        <div
          className="chatArea"
          style={{ height: "80%", backgroundColor: "white", overflowY: "auto" }}
        >
          {messages.map((item,i)=>
            <Message message={item.message} classs={item.id===id?'right':'left'} user={item.id===id?"":item.user}/>
          )}
        </div>
        <div className="typeMessage" style={{ height: "10%", widht: "100%" }}>
          <input
            type="text"
            placeholder="Type your message here"
            id="chatInput"
            style={{ width: "80%", height: "100%" }}
            onKeyDown={(e)=>e.key === 'Enter'?send(): null}
          />
          <button
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: "#0dcaf0",
              color: "white",
              fontWeight: "700",
            }}
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
