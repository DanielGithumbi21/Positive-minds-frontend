import React, { useContext } from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from '../../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import { Grid, makeStyles } from '@mui/material'

// const useStyles = makeStyles({
//     searchBar: {
//         backgroundColor: 'white',
//         padding: '10px',
//         fontSize: '20px',
//         borderRadius: '5px',
//     },
// });

const drawerWidth = 300;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const TopAppBar = () => {
    const navigate = useNavigate()
    const { open, handleDrawerOpen, user, setLoggedUser } = useContext(DataContext)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const checkOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };
    const logout = () => {
        localStorage.removeItem("user")
        setLoggedUser(false)
        navigate("/login")
    }


    return (
        <React.Fragment>
            <AppBar elevation={0} position="fixed" open={open} sx={{
                backgroundColor: "#FFFFFF",
                color: "#808080",
                padding: "20px"
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Grid container justify="center" alignItems="center">
                        <div className={classes.searchBar}>
                            <SearchBar />
                        </div>
                    </Grid> */}
                    <Typography variant="h6" noWrap component="div" >
                        Welcome, {user.user.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default TopAppBar