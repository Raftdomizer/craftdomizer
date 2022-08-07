import React from "react";

const Preview = (props) => {
    const {
        craftingMenuPreview,
        radioOptionValue,
        dateTime
    } = props;

    return (
        <div>
            <h2>Recipe Override Preview</h2>
            <h3>Select an option and press the Generate Preview button</h3>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "50%", justifyContent: "center"}}>
                    <p>Last selected option: {radioOptionValue}</p>
                </div>
                <div style={{width: "50%", justifyContent: "center"}}>
                    <p>Timestamp of last preview: {dateTime}</p>
                </div>
            </div>
            <textarea
                style={{resize: "none"}}
                disabled
                key="textarea"
                rows="40"
                cols="100"
                value={craftingMenuPreview}
                onChange={(e) => {}} // Feels hacky...patchwork. But works.
            >
            </textarea>
        </div>
    );
}

export default Preview;