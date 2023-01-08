import "./temperature.scss"
const Temperature = ({temp}) => {
    const TEMP = "https://sriram-23.vercel.app/weatherIcon?file=temperature.gif"
    const TEMP_MIN = "https://sriram-23.vercel.app/weatherIcon?file=cold.gif"
    const TEMP_MAX = "https://sriram-23.vercel.app/weatherIcon?file=hot.gif"
    const PRESSURE = "https://sriram-23.vercel.app/weatherIcon?file=wind%20(3).gif"
    const HUMIDITY = "https://sriram-23.vercel.app/weatherIcon?file=drop.gif"
    return (
        temp && <section className="temp-section">
            <div className="temp-subsection">
                <figure className="temp-image">
                    <img src={TEMP} alt="temperature" />
                </figure>
                <caption>Temperature</caption> &nbsp;
                <p className="temp-value">{temp.temp}°C</p>
            </div>
            <div className="temp-subsection">
                <figure className="temp-image">
                    <img src={TEMP_MIN} alt="temperature min" />
                </figure>
                <caption>Temperature Min</caption> &nbsp;
                <p className="temp-value">{temp.temp_min}°C</p>
            </div>
            <div className="temp-subsection">
                <figure className="temp-image">
                    <img src={TEMP_MAX} alt="temperature max" />
                </figure>
                <caption>Temperature Max</caption> &nbsp;
                <p className="temp-value">{temp.temp_max}°C</p>
            </div>
            <div className="temp-subsection">
                <figure className="temp-image">
                    <img src={PRESSURE} alt="pressure" />
                </figure>
                <caption>Pressure</caption> &nbsp;
                <p className="temp-value">{temp.pressure} hPa</p>
            </div>
            <div className="temp-subsection">
                <figure className="temp-image">
                    <img src={HUMIDITY} alt="humidity" />
                </figure>
                <caption>Humidity</caption> &nbsp;
                <p className="temp-value">{temp.humidity}%</p>
            </div>
        </section>
    )
}

export default Temperature