import React from "react";
import { useState, useEffect } from "react";
import Q1 from "../q1";
import "./style.css";
const Idk = () => {
  // Base URL
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //
  const [hideFirstPage, setHideFirstPage] = useState(true);
  const [startQ1, setStartQ1] = useState(false);
  const [name, setName] = useState("");

  console.log(name);

  return (
    <div className="homePage">
      <div className="bc"></div>
      {startQ1 ? (
        ""
      ) : (
        <div>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
        </div>
      )}

      {hideFirstPage ? (
        <div className="divHomePage">
          {" "}
          <div className="allHomePage">
            <div className="divIdkH2">
              <h2 className="idkH2"> ولكم بيب </h2>
              {/* <h2 className="idkH2"> ولكم </h2> */}
            </div>
            <div>
              <div className="divEnterName">
                <p> لا تخلينه فاضي كسل اسوي كونديشنز</p>{" "}
              </div>
              <div className="inputWithStart">
                <div className="inputName">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" اسمك بالعربي"
                  />
                </div>
              </div>
              <div className="divBtnStart">
                <button
                  onClick={() => {
                    setStartQ1(true);
                    setHideFirstPage(false);
                  }}
                  type="submit"
                  className="btnStart"
                >
                  ابدأ
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>{startQ1 ? <div>{<Q1 name={name} />}</div> : ""}</div>
    </div>
  );
};

export default Idk;
