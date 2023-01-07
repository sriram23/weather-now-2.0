import moment from "moment"
import "./sun.scss"
const Sun = ({sun}) => {
    const SUNRISE = "https://sriram-23.vercel.app/weatherIcon?file=sunrise.gif"
    const SUNSET = "https://sriram-23.vercel.app/weatherIcon?file=sunset.gif"
    return ( sun && 
        <section className="sun-section">
            <div className="sun-subsection">
                <figure className="sun-image">
                    <img src={SUNRISE} alt="sun rise" />
                </figure>
                <caption>Sunrise</caption>&nbsp;
                <p className="sun-value">{moment.unix(sun.sunrise).format("hh:mm a")}</p>
            </div>
            <div className="sun-subsection">
                <figure className="sun-image">
                    <img src={SUNSET} alt="sunset" />
                </figure>
                <caption>Sunset</caption>&nbsp;
                <p className="sun-value">{moment.unix(sun.sunset).format("hh:mm a")}</p>
            </div>
        </section>
    )
}

export default Sun