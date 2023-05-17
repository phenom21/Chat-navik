import React, { Component } from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PgList from "./components/pgs/PgList/PgList"
import AddPg from "./components/pgs/AddPg/AddPg";
import ViewPg from "./components/pgs/ViewPg/ViewPg";
import UpdatePg from "./components/pgs/UpdatePg/UpdatePg";
import ChatLogin from "./components/Chat/ChatLogin";
import ChatRoom from "./components/Chat/ChatRoom";

let App=()=> {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<Navigate to={"/home"}/>}/>
      <Route path={"/chat/login"} element={<ChatLogin/>}/>
      <Route path={"/chat/room"} element={<ChatRoom/>}/>
      <Route path={"/pg/list"} element={<PgList/>}/>
      <Route path={"/pg/add"} element={<AddPg/>}/>
      <Route path={"/pg/update"} element={<UpdatePg/>}/>
      <Route path={"/pg/view/:pgid"} element={<ViewPg/>}/>
    </Routes>
    </>
  );
}

export default App;
