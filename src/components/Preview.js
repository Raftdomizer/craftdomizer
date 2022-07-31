import React from "react";

const Preview = ({craftingMenuPreview}) => {


    return (
        <div>
            <h2>Recipe Override Preview</h2>
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