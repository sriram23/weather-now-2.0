import React, { useEffect, useState } from "react";
import moment from "moment";
import "./location.scss";
import axios from "axios";

const Location = ({ city, country, date }) => {
  const FLAG = `https://sriram-23.vercel.app/flag?q=${country}`;

  const [b64, setB64] = useState("");
  useEffect(() => {
    console.log("Inside useEffect");
    axios.get(FLAG).then((res) => {
      if (res.data) {
        setB64(res.data);
      }
    });
    console.log("b64: " + b64);
  }, [country]);
  //   console.log(B64);
  return (
    <section className="location-section">
      <span>Last Updated: {date && moment.unix(date).fromNow()}</span>
      <div className="location-container">
        <div className="location-subsection">
          <h1>{city && city}</h1>
          {b64 && (
            <figure className="flag">
              {country && <img src={b64} alt={country + "Flag"} />}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default Location;
