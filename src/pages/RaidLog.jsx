import React from "react";

import "../styles/capital.styles/capitalLog.css";
import crose from "../img/crose.svg";
import talvar1 from "../img/talvar1.png";
import banner from "../img/capital-1.png";
import { useNavigate } from "react-router-dom";
import useRaidLog from "../hooks/useRaidLog";

function getDate(dateString) {
  let date = null;

  if (dateString) {
    date = new Date(
      dateString.slice(0, 4) +
        "-" +
        dateString.slice(4, 6) +
        "-" +
        dateString.slice(6, 11) +
        ":" +
        dateString.slice(11, 13) +
        ":" +
        dateString.slice(13, dateString.length)
    );
  } else {
    date = new Date();
  }

  return date;
}

export default function RaidLog() {
  let navigator = useNavigate();
  function closePopup() {
    navigator(-1);
  }
  let { data: datas, loading, error } = useRaidLog();

  // console.log(datas);

  return (
    <section className="popup-section">
      <div className="popup">
        <div className="popup--container">
          <div className="top">
            <button className="blank"></button>
            <div className="popup-header">
              <span>Raid Weekend History</span>
            </div>
            <button onClick={closePopup} className="close-btn">
              <img src={crose} alt="" />
            </button>
          </div>
          <div className="middile">
            <img src={talvar1} alt="" />
          </div>
          <div className="main">
            <div className="datas">
              {loading ? <>Loading</> : <></>}
              {datas ? (
                datas.items.map((data, index) => (
                  <div key={index} className="month">
                    {console.log(data)}
                    <div className="month-name">
                      {getDate(data.startTime).toLocaleString("default", {
                        month: "long",
                      })}
                    </div>
                    <div className="row">
                      <div className="img">
                        <img src={talvar1} alt="" />
                      </div>
                      <div className="name">
                        <span>Raid Weekend</span>
                        <span>10d ago</span>
                      </div>
                      <div className="status">
                        Raid
                        <br />
                        Completed : 0
                      </div>
                      <button className="go-btn">Go</button>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
              {error ? <>Error</> : <></>}
            </div>
          </div>
        </div>
        <div className="banarimage">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
}
