import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

let PgList = () => {
  const [pglist, setpglist] = useState([]);
  const [oglist, setoglist] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  useEffect(() => {
    const newpglist = oglist.filter((value) =>
      value.pname.toLowerCase().includes(searchterm.toLowerCase())
    );
    setpglist(newpglist);
  }, [searchterm]);

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setpglist(response.data);
      setoglist(response.data);
    });
  }, []);
  return (
    <>
      <section className="pg-search p-3" style={{ backgroundColor: "#b8f2e1"}}>
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col" style={{ backgroundColor: "#b8f2e1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* <p className="h3">Asset tracking */}
                <Link
                  to={"/pg/add"}
                  className="btn btn-outline-primary ms-3"
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
                    marginRight: "5px",
                  }}
                >
                  Add asset
                  <i className="fa fa-plus-circle me-2" />
                </Link>
                <Link
                  to={"/pg/update"}
                  className="btn btn-outline-primary ms-3"
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
                    marginRight: "5px",
                  }}
                >
                  Update asset
                  <i className="fa fa-plus-circle me-2" />
                </Link>
                {/* </p> */}
                {/* <p>The best asset tracking platform</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pg-list"  style={{ backgroundColor: "#b8f2e1"}}>
        <div className="container">
          <div className="row mb-5" style={{ backgroundColor: "#b8f2e1" }}>
            {pglist
              // filter((val)=>{
              //     if(searchterm="")
              //     return val;
              //     else if(val.paddress.toLowerCase().includes(searchterm.toLowerCase()))
              //     {
              //         return val;
              //     }
              // }).
              .map((val, key) => {
                // pglist.filter((val,key))=>{
                // if(key%9==0)
                // {
                return (
                  // <div className="row-4 mt-5 mb-5">
                  <div key={key} className="col-12 md-4 mt-3">
                    <div
                      className="card"
                      style={{ width: "100%", height: "100%", display: 'flex', flexDirection: "row" }}
                    >
                        <span>
                      <img
                        variant="top"
                        style={{ width: "21rem", height: "12rem", display: "inline", padding: "5px" }}
                        src={"/pg" + (key % 9) + ".jpeg"}
                      />
                      </span>
                      <span className="card-body" style={{display : "inline"}}>
                        <div className="card-title">
                          <h4>{val.pname}</h4>
                        </div>
                        <div className="card-text mb-3">{val.paddress}</div>
                        {/* <input type="submit" className="btn btn-outline-primary"/> */}
                        <Link
                          to={"/pg/view/" + key}
                          className="btn btn-outline-primary"
                          style={{
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
                          }}
                        >
                          Details
                        </Link>
                      </span>
                    </div>
                  </div>
                  // </div>
                );
              })}
            ;
          </div>
        </div>
      </section>
    </>
  );
};
export default PgList;
