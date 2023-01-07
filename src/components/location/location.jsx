import React from "react"
import moment from "moment"
const Location = ({city, country, date}) => {
    const FLAG = `https://countryflagsapi.com/png/${country}`
    console.log(FLAG)
    return (
        <div>
            {city && city} | {country && <img src={FLAG} alt="Flag"/>} | Last Updated: {date && moment.unix(date).fromNow()}
        </div>
    )
}

export default Location