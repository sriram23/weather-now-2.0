import moment from "moment"
const Location = ({city, country, date}) => {
    return (
        <div>
            {city} | {country} | Last Updated: {moment.unix(date).fromNow()}
        </div>
    )
}

export default Location