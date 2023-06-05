import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import logo from '../Images/logo.svg';

import { useEffect,useState,useRef } from "react";
import "../Pages/Navbar.css";
// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";


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
        <Link href="/">
          <Box>
            <img src={logo} width={"80%"} height={"100%"} />
          </Box>
        </Link>
        <Box display={"flex"} color="white" justifyContent={"center"}>
          <Typography fontSize={"1.25rem"} fontWeight={"800"} mr="35px">
            Study
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"800"} mr="35px">
            Plans
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"800"} mr="35px">
            Resources
          </Typography>
          <Link href="/sports" underline="none">
            <Typography color={'white'} fontSize={"1.25rem"} fontWeight={"800"} mr="35px">
              Sports
            </Typography>
          </Link>
        </Box>
        <Link href="/login" underline="none">
          {" "}
          <Box
            display={"flex"}
            color="white"
            alignItems={"center"}
            justifyContent={"center"}
            mr="65px">
            {/* <Box sx={{ cursor: "pointer" }}>
            <img src={currency} width={"24px"} height={"24px"} />
          </Box> */}

            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ ml: 5 }}>
            <MenuIcon />
          </IconButton> */}
            <Typography>Login</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
export default Navbar;
