import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from '../Images/logo.svg';
import currency from "../Images/currency.svg";
// import { makeStyles } from "@material-ui/core/styles";
import { useEffect,useState,useRef } from "react";
import "../Pages/Navbar.css";
import { Link } from "react-router-dom";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         color: 'black'
//     },
//     title: {
//         flexGrow: 1,
//         color: 'black'
//     },
//     appBarTransparent: {
//         backgroundColor: 'rgba(67, 129, 168,0.5)'
//     },
//     appBarSolid: {
//         backgroundColor: 'rgba(67, 129, 168)'
//     }
// }));



function Navbar() {
  //  const classes = useStyles();

   const [navBackground, setNavBackground] = useState("appBarTransparent");
   const navRef = useRef();
   navRef.current = navBackground;
   useEffect(() => {
     const handleScroll = () => {
       const show = window.scrollY > 50;
       if (show) {
         setNavBackground("appBarSolid");
       } else {
         setNavBackground("appBarTransparent");
       }
     };
     document.addEventListener("scroll", handleScroll);
     return () => {
       document.removeEventListener("scroll", handleScroll);
     };
   }, []);
 

  return (
    <Box
      className={navRef.current}
      position={"fixed"}
      sx={{ zIndex: "30" }}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0 1rem"}
        height={"5rem"}
        sx={{ maxWidth: "80rem", minHeight: "5rem" }}>
        <Link to="/">
          <Box>
            <img src={logo} width={"80%"} height={"100%"} />
          </Box>
        </Link>
        <Box display={"flex"} color="white" justifyContent={"center"}>
          <Typography fontSize={"1.25rem"} fontWeight={"800"} mr="25px">
            Study
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"800"} mr="25px">
            Destinations
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"800"}>
            Resources
          </Typography>
        </Box>
        <Box
          display={"flex"}
          color="white"
          alignItems={"center"}
          justifyContent={"center"}>
          <Box sx={{ cursor: "pointer" }}>
            <img src={currency} width={"24px"} height={"24px"} />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ ml: 5 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
