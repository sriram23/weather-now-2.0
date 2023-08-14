import React from "react"
import moment from "moment"
import "./location.scss"
const Location = ({city, country, date}) => {
    const FLAG = `https://flagsapi.com/${country}/shiny/65.png`
    console.log(FLAG)
    return (
        <section className="location-section">
            <div className="location-subsection">
                <h1>{city && city}</h1>
                <figure className="flag">{country && <img crossorigin="anonymous" src={FLAG} alt="Flag"/>}</figure>
            </div>
            <span>Last Updated: {date && moment.unix(date).fromNow()}</span>  
        </section>
    )
}

export default Location