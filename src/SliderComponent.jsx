
// eslint-disable-next-line react/prop-types
function SliderComponent({inputValue, handleInputChange, backgroundColor, tekstoSpalva}) {

const inputStyle = {
    appearance: "none",
    width: "100%",
    height: 25,
    cursor: "pointer",
    background: "lightgrey"
}

    return (
        <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10rem",
        gap: 50,
        width: "20rem",
        }}>
            <input type="range" min={0} max={100} value={inputValue} onInput={handleInputChange} style={inputStyle}/>

            <div className="circle" style={{
            color: !tekstoSpalva ? "black" : tekstoSpalva,
            background: !backgroundColor ? "lightgrey" : backgroundColor,
            height: `${inputValue *1}px`,
            width: `${inputValue *1}px`,
            borderRadius: "50%"
    }}>
            <span>{inputValue}</span>
            </div>
        </div>
    )
}

export default SliderComponent;