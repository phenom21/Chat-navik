import React from "react";
import {Link} from "react-router-dom";
let NavBar=()=>{
    return(
    <>
    <nav className="navbar navbar-dark  navbar-expand-sm" style={{backgroundColor: "#a366ff"}}>
        <div className="container"> 
        <Link to={"/"} className="navbar-brand " style={{color: "white", fontWeight: "700"}}>
           I S R O
        </Link>
        </div>
    </nav>
    </>
    )
};
export default NavBar;