
import { AppBar, Badge, IconButton, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import  Backpack  from "@mui/icons-material/Backpack";


export default function Inventory(props) {
    return(
        <AppBar position="fixed" color="primary" sx={{top: 0, bottom:'auto', width:'fit-content', borderBottomLeftRadius:'15px'}}>
            <Toolbar>
                <Box sx={{flexGrow: 1}} />
                <Typography>Total price: {props.total}</Typography>
                <IconButton>
                    <Badge badgeContent={props.count} color="primary">
                        <Backpack />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}