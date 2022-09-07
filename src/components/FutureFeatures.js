// Libaries
import React from "react";

// MUI
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const FutureFeatures = () => {
    return (
        <div>
            <br />
            <Typography variant="h5">Future Features</Typography>
            <List dense={true}>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Decorations in Crafting Menu" />
                </ListItem>
                <ListItem display="list-item" component="a" href="https://github.com/Raftdomizer/recipe-randomizer/blob/main/README.md#update-existing">
                    <ListItemIcon>
                        <CircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="And more to come" />
                </ListItem>
            </List>
        </div>
    )
}

export default FutureFeatures
