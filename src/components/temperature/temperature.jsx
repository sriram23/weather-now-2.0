const Temperature = ({temp}) => {
    return (
        temp && <div>
            Temperature: {temp.temp}
            Min: {temp.temp_min}
            Max: {temp.temp_max}
            Pressure: {temp.pressure}
            Humidity: {temp.humidity}
        </div>
    )
}

export default Temperature