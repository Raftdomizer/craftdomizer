import React, {useState} from "react";

const Preview = (props) => {
    const {
        craftingMenuPreview,
        radioOptionValue,
        dateTime
    } = props;

    const [showSpoiler, setShowSpoiler] = useState(true);

    const handleOnClick = () => {
        if (showSpoiler) {
            setShowSpoiler(false);
        } else {
            setShowSpoiler(true);
        }
    }

    return (
        <div>
            <h2>Recipe Override Preview</h2>
            <div>
                <div>
                    <strong>Last selected option:</strong> {radioOptionValue}
                </div>
                <div>
                    <strong>Timestamp of last preview:</strong> {dateTime}
                </div>
            </div>
            <textarea
                style={{resize: "none"}}
                disabled
                key="textarea"
                rows="30"
                cols="100"
                value= {showSpoiler ? craftingMenuPreview : "It's a secret to everybody 🤐"}
                onChange={(e) => {}} // Feels hacky...patchwork. But works.
            >
            </textarea>
            <div>
                <input type="checkbox"
                    id="spoiler"
                    name="spoiler"
                    onClick={(e) => handleOnClick(e)}
                    checked={showSpoiler}
                />
                <label>Show Spoiler?</label>
            </div>
        </div>
    );
}

export default Preview;