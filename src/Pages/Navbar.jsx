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

const pagesLeft = ["Buy", "Rent", "Sell", "Home Loans", "Agent Finder"];
const pagesRight = ["Manage Rentals", "Advertise", "Help", "Sign in"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80px",
        borderBottom: "1px solid rgb(216, 216, 216)",
        bgcolor: "white",
        boxShadow: "none",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            position={"absolute"}
            left={"45%"}
            display={"flex"}
            alignItems={"center"}
            z-index={"2"}>
            <img
              src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
              width={"160px"}
              height={"35px"}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pagesLeft.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              {pagesRight.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            position={"absolute"}
            left={"45%"}
            display={"flex"}
            alignItems={"center"}
            z-index={"2"}>
            <img
              src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
              width={"160px"}
              height={"35px"}
            />
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            max-width={"1280px"}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pagesLeft.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "none",
                      borderColor: "none",
                      boxShadow: "none",
                      color: "#006AFF",
                    },
                  }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pagesRight.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
