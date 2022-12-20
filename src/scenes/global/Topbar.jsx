import {Box, IconButton, useTheme} from "@mui/material"
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutLined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutLined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutLined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search"
import styled from "@emotion/styled";

const styledBox = styled(Box);

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (<Box display="flex" justifyContent="space-between" p={2}>
        {/*Search Bar*/}
        <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
        >
            <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
            <IconButton type="button" sx={{p: 1}}>
                <SearchIcon/>
            </IconButton>

        </Box>

        <IconButton sx={{display: "flex"}}></IconButton>
    </Box>);
}

export default Topbar;