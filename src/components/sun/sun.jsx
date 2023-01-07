import moment from "moment"
const Sun = ({sun}) => {
    return ( sun && 
        <div>
            Sunrise: {moment.unix(sun.sunrise).format("hh:mm a")}
            sunset: {moment.unix(sun.sunset).format("hh:mm a")}
        </div>
    )
}

export default Sun