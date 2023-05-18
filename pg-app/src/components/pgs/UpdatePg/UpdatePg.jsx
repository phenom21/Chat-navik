import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

let UpdatePg=()=>{
    const [pname,setpname]=useState("");
    const [paddress,setpaddress]=useState("");
    const [pfacilities,setpfacilities]=useState("");
    const [oname,setoname]=useState("");
    const [oemail,setoemail]=useState("");
    const [ocontact,setocontact]=useState("");
    

    const addToList=()=>{
        Axios.post("http://localhost:5000/update",
        {
            pname: pname,
            paddress: paddress,
            pfacilities: pfacilities,
            oname: oname,
            oemail: oemail,
            ocontact: ocontact,
        });
        alert("Updated your PG successfully!!")
        // Navigate("/pg/list");
    };

    return(
    <>
    <section className="add-pg p-3" style={{backgroundColor: "#b8f2e1", height: "100vh "}}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4 text-dark">Update asset</p>
                    <p className="fst-italic"></p>
                </div>
            </div>
            <div className="row">
                <div className="col md-4">
                    <form>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpname(event.target.value);
                            }} className="form-control" placeholder=" Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpaddress(event.target.value);
                            }} className="form-control" placeholder="Driver"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" 
                            onChange={(event)=>{
                                setpfacilities(event.target.value);
                            }} className="form-control" placeholder="Lat"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setoname(event.target.value);
                            }} className="form-control" placeholder="Long"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setoemail(event.target.value);
                            }} className="form-control" placeholder="Speed"/>
                        </div>
                        <div className="mb-2">
                            <input type="number" onChange={(event)=>{
                                setocontact(event.target.value);
                            }} className="form-control" placeholder="Owner Contact Number"/>
                        </div>
                        <div className="mb-2">
                            <input type="submit" onClick={addToList} className="btn btn-primary" value="Update" style={{
                            color: "white",
                            backgroundColor: "#a366ff",
                            fontWeight: "600",
                            // border: "1.4px solid blue",
                            borderRadius: "5px",
                            padding: "2vh 6vh",
                            // marginLeft: "8%",
                            textDecoration: "none",
                            fontWeight: "600",
                            marginRight: "5px",
                          }}/>
                            <Link to={"/pg/list"} className="btn btn-dark ms-2"  style={{
                            color: "white",
                            backgroundColor: "#a366ff",
                            fontWeight: "600",
                            // border: "1.4px solid blue",
                            borderRadius: "5px",
                            padding: "2vh 6vh",
                            // marginLeft: "8%",
                            textDecoration: "none",
                            fontWeight: "600",
                            marginRight: "5px",
                          }}>Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};
export default UpdatePg;