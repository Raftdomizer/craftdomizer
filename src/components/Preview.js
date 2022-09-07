// Libraries
import React from "react";

// State Management
import { useDispatch, useSelector } from "react-redux";
import {
    resetToggles, setlastGeneratedPreviewOptionName,
    setVanillaCraftingMenu, toggleSpoiler
} from "../redux/slices/userOptionsSlice";

// MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';

const Preview = () => {
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
            <Typography variant="h5">Recipe Override Preview</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Last selected option:</Typography>
                <Typography>{lastGeneratedPreviewOptionName}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Timestamp of last preview:</Typography>
                <Typography>{lastGeneratedPreviewTimeStamp}</Typography>
            </Stack>
            <TextareaAutosize
                key="textarea"
                aria-label="preview craftingmenu textarea"
                disabled
                style={{ width: 700, resize: "none" }}

                maxRows={30}
                value={showSpoiler ? JSON.stringify(craftingMenuPreview, null, 2) : "It's a secret to everybody 🤐"}
            >
            </TextareaAutosize>
            <Stack direction="row" spacing={1} alignItems="center">
                <Switch
                    checked={showSpoiler}
                    onChange={handleOnClick}
                    inputProps={{ 'aria-label': 'controlled' }}
                ></Switch>
                <Typography>Show Spoiler?</Typography>
            </Stack>
            <Button variant="contained" onClick={previewVanilla}>
                Preview Vanilla
            </Button>
        </div>
    );
}

export default Preview;
