const WeatherCard = ({weather}) => {
    return (
        <div>
            {weather && 'Weather: '+weather[0]["main"]}
        </div>
    )
}

export default WeatherCard