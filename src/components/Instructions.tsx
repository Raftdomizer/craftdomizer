// Libraries
import React, { useState } from "react";

// MUI
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Instructions = () => {

    let [showInstructions, setShowInstructions] = useState(false);

    const handleClick = () => {
        showInstructions ? setShowInstructions(false) : setShowInstructions(true);
    };

    return (
        <div>
            <Typography variant="h5">Instructions</Typography>
            <Button variant="contained" onClick={handleClick}>
                Show Instructions
            </Button>
            { showInstructions &&
                <div style={{maxWidth: "500px"}}>
                    <Typography>Note: If you wish to hide results, uncheck "Show Spoilers?".</Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="1. Select a shuffle option. Default is Vanilla." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="2. Under Options, press the 'Generate Preview' button." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="3. Press the 'Save Override' button." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="4. Save the file, 'CraftingMenuOverride.json', to the folder location 'mods\ModData\RecipeRandomizer'." />
                        </ListItem>
                    </List>
                </div>
            }
        </div>
    );
}

export default Instructions;