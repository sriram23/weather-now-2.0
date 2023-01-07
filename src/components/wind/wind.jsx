const Wind = ({wind}) => {
    return (wind &&
        <div>
            Speed: {wind.speed}
            Degree: {wind.deg}
        </div>
    )
}

export default Wind