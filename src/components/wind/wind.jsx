import "./wind.scss"
const Wind = ({wind}) => {
    const WIND = "https://sriram-23.vercel.app/weatherIcon?file=wind.gif"
    const WEATHER_COCK = "https://sriram-23.vercel.app/weatherIcon?file=weathercock.gif"

    return (wind &&
        <section className="wind-section">
            <caption>Wind</caption> &nbsp;
            <div className="wind-subsection">
                <figure className="wind-image">
                    <img src={WIND} alt="wind" />
                </figure>
                <caption>Speed</caption> &nbsp;
                <p className="wind-value">{wind.speed}</p>
            </div>
            <div className="wind-subsection">
                <figure className="wind-image">
                    <img src={WEATHER_COCK} alt="degree" />
                </figure>
                <caption>Direction</caption> &nbsp;
                <p className="wind-value">{wind.deg}°</p>
            </div>
        </section>
    )
}

export default Wind