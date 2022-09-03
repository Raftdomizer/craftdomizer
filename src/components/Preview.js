import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    resetToggles, setlastGeneratedPreviewOptionName,
    setVanillaCraftingMenu, toggleSpoiler
} from "../redux/slices/userOptionsSlice";

const Preview = () => {
    // Styles
    const ButtonStyle = { marginRight: "25px" };

    // Actions
    const dispatch = useDispatch();
    const craftingMenuPreview = useSelector((state) => state.userOptions.craftingMenuPreview);
    const lastGeneratedPreviewTimeStamp = useSelector((state) => state.userOptions.lastGeneratedPreviewTimeStamp);
    const lastGeneratedPreviewOptionName = useSelector((state) => state.userOptions.lastGeneratedPreviewOptionName);
    const showSpoiler = useSelector((state) => state.userOptions.showSpoiler);

    const handleOnClick = () => {
        dispatch(toggleSpoiler());
    }

    const previewVanilla = () => {
        dispatch(setVanillaCraftingMenu());
        dispatch(setlastGeneratedPreviewOptionName("Vanilla"));
        dispatch(resetToggles());
    }

    return (
        <div>
            <h2>Recipe Override Preview</h2>
            <div>
                <div>
                    <strong>Last selected option:</strong> {lastGeneratedPreviewOptionName}
                </div>
                <div>
                    <strong>Timestamp of last preview:</strong> {lastGeneratedPreviewTimeStamp}
                </div>
            </div>
            <textarea
                style={{ resize: "none" }}
                disabled
                key="textarea"
                rows="30"
                cols="100"
                value={showSpoiler ? JSON.stringify(craftingMenuPreview, null, 2) : "It's a secret to everybody 🤐"}
                onChange={(e) => { }} // Feels hacky...patchwork. But works.
            >
            </textarea>
            <div>
                <input type="checkbox"
                    id="spoiler"
                    name="spoiler"
                    checked={showSpoiler}
                    onChange={(e) => handleOnClick(e)}
                />
                <label>Show Spoiler?</label>
            </div>
            <button style={ButtonStyle}
                onClick={() => previewVanilla()}>Preview Vanilla</button>
        </div>
    );
}

export default Preview;
