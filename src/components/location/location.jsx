import React from "react"
import moment from "moment"
import "./location.scss"
const Location = ({city, country, date}) => {
    const FLAG = `https://countryflagsapi.com/png/${country}`
    console.log(FLAG)
    return (
        <section className="location-section">
            <div className="location-subsection">
                <h1>{city && city}</h1>
                <figure className="flag">{country && <img src={FLAG} alt="Flag"/>}</figure>
            </div>
            <span>Last Updated: {date && moment.unix(date).fromNow()}</span>  
        </section>
    )
}

export default Location