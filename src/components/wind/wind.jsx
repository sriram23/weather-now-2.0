import "./wind.scss"
const Wind = ({wind}) => {
    const WIND = "https://sriram-23.vercel.app/weatherIcon?file=wind.gif"
    const WEATHER_COCK = "https://sriram-23.vercel.app/weatherIcon?file=weathercock.gif"
    const ARROW = "https://sriram-23.vercel.app/weatherIcon?file=arrow.png"

    const getDirection = (deg) => {
        switch(true) {
            case deg >= 348.75:
            case deg < 11.25:
                return "North"
            case deg >= 11.25 && deg < 33.75:
                return "North North East"
            case deg >= 33.75 && deg < 56.25:
                return "North East"
            case deg >= 56.25 && deg < 78.75:
                return "East North East"
            case deg >= 78.75 && deg < 101.25:
                return "East"
            case deg >= 101.25 && deg < 123.75:
                return "East South East"
            case deg >= 123.75 && deg < 146.25:
                return "South East"
            case deg >= 146.25 && deg < 168.75:
                return "South South East"
            case deg >= 168.75 && deg < 191.25:
                return "South"
            case deg >= 191.25 && deg < 213.75:
                return "South South West"
            case deg >= 213.75 && deg < 236.25:
                return "South West"
            case deg >= 236.25 && deg < 258.75:
                return "West South West"
            case deg >= 258.75 && deg < 281.25:
                return "West"
            case deg >= 281.25 && deg < 303.75:
                return "West North West"
            case deg >= 303.75 && deg < 326.25:
                return "North West"
            case deg >= 326.25 && deg < 348.75:
                return "North North West"
            default:
                return ""
        }
    }

    return (wind &&
        <section className="wind-section">
            <div className="wind-subsection">
                <figure className="wind-image">
                    <img src={WIND} alt="wind" />
                </figure>
                <caption>Wind Speed</caption> &nbsp;
                <p className="wind-value">{wind.speed} m/s</p>
            </div>
            <div className="wind-subsection">
                <figure className="wind-image">
                    <img src={WEATHER_COCK} alt="degree" />
                </figure>
                <caption>Wind Direction</caption> &nbsp;
                <p className="wind-value">{getDirection(wind.deg)}</p>
                <figure className="arrow" style={{"transform": `rotate(${wind.deg}deg)`}}>
                    <img src={ARROW} alt="Direction" />
                </figure>
            </div>
        </section>
    )
}

export default Wind