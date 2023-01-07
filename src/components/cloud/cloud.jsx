import "./cloud.scss"
const Clouds = ({clouds}) => {
    const CLOUD_IMAGE = "https://sriram-23.vercel.app/weatherIcon?file=clouds.gif"
    return ( clouds &&
        <section className="clouds-section">
            <figure className="clouds-image">
                <img src={CLOUD_IMAGE} alt="cloud" />
            </figure>
            <caption>Cloud</caption> &nbsp;
            <p className="cloud-value">{clouds.all}</p>
        </section>
    )
}

export default Clouds