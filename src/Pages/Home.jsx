import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchBar from "../Components/SearchBar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";






function Home() {

  const cards = [
    {
      title: "Buy a home",
      image:
        "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp",
      detail:
        "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      button: "Browse homes",
    },

    {
      title: "Sell a home",
      image:
        "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp",
      detail:
        "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      button: "See your options",
    },

    {
      title: "Rent a home",
      image:
        "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp",
      detail:
        "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      button: "Find rentals",
    },
  ];

  const browse = [
    { title: "Real Estate", areas: [] },
    { title: "Rentals", areas: [] },
    { title: "Mortgage Rates", areas: [] },
    { title: "Browse Homes", areas: [] },
  ];

  
  return (
    <Box mb="20px">
      <Box
        height={"408px"}
        position={"relative"}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}>
        <Box overflow={"hidden"}>
          <img
            src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/ZG_ZPA_08_21_Americana_ExtFront_1081_1440_desktopWebp-2.webp"
            width={"110%"}
            height={"100%"}
            position={"absolute"}
          />
        </Box>

        <Box
          position={"absolute"}
          top={"0px"}
          pt={"80px"}
          fontFamily={
            'Ivar Headline","Ivar Headline Subset","Adjusted Times","Adjusted Times New Roman","Times New Roman",serif'
          }>
          <Typography
            sx={{ filter: "drop-shadow(0px 0px 5px #000)" }}
            fontWeight={"700"}
            color={"white"}
            fontSize={"36px"}
            variant="h3"
            gutterBottom>
            Find it. Tour it. Own it
          </Typography>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { xs: "50px", md: "700px" },
              mt: "30px",
              minWidth: "481px",
              height: { xs: "50px", md: "68px" },
              border: "1px solid",
              bgcolor: "#F6F6FA",
              borderColor: "#F6F6FA",
              "&:hover": {
                border: "1px solid",
                borderColor: "rgb(0, 106, 255)",
                boxShadow: "large",
                boxShadowColor: "red",
              },
            }}>
            <InputBase
              sx={{
                ml: 2,
                flex: 1,
                fontWeight: "700",
                color: "#2A2A33",
                fontSize: "16px",
              }}
              placeholder="Enter an address, neighborhood,city or ZIP code"
              inputProps={{
                "aria-label": "Enter an address, neighborhood,city or ZIP code",
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Paper>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          padding: { md: "32px 0px 0px", xs: "0px 0px 0px" },
          margin: { md: "32px 71.5px 64px", xs: "0px 0px" },
          flexWrap: { md: "nowrap", xs: "wrap" },
        }}>
        <Box textAlign={"center"} alignSelf={"center"} margin={"24px 32px"}>
          <Typography
            pb={"8px"}
            color={"rgb(42, 42, 51)"}
            fontWeight={"500"}
            fontSize={"20px"}
            fontFamily={
              'Open Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif'
            }>
            Get home recommendations
          </Typography>
          <Typography color={"rgb(89, 107, 130)"}>
            Sign in for a more personalized experience.
          </Typography>

          <Button
            sx={{
              fontWeight: "700",
              color: "rgb(0, 106, 255)",
              borderColor: "rgb(0, 106, 255)",
              mt: "10px",
            }}
            fontWeight="700"
            variant="outlined"
            size="large">
            Sign in
          </Button>
        </Box>

        <Box
          sx={{
            backgroundImage: {
              xs: 'url("https://www.zillowstatic.com/s3/homepage/static/GatedCarousel_Mobile.webp")',
              md: 'url("https://www.zillowstatic.com/s3/homepage/static/GatedCarousel_Desktop.webp")',
            },
            backgroundRepeat: "no-repeat",

            width: { xs: "600px", md: "792px" },
            height: { xs: "144px", md: "248px" },
          }}></Box>
      </Box>

      <Box
        backgroundColor={"rgb(249, 249, 251)"}
        p={"64px"}
        textAlign="center"
        display="flex"
        justifyContent="center"
        gap="30px"
        sx={{ margin: "auto", flexWrap: { md: "nowrap", xs: "wrap" } }}>
        {cards.map(({ title, image, detail, button }) => {
          return (
            <Box>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: { md: "column", sm: "row", xs: "column" },
                  padding: "24px",
                  pb: "90px",
                  alignSelf: "center",
                  alignItems: "center",
                  ":hover": {
                    transition: "350ms ease-out",
                    transform: "scale(1.1)",
                    objectFit: "fill",
                    cursor: "pointer",
                    Button: {
                      color: "white",
                      backgroundColor: "rgb(0, 106, 255)",
                    },
                  },
                }}>
                <Box>
                  {/* <CardMedia
                      sx={{ width: '70%', height: 188 }}
                      image={image}
                    
                    /> */}

                  <img src={image} width={"100%"} />
                </Box>

                <Box>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography
                      fontSize={"16px"}
                      variant="body2"
                      color="text.secondary">
                      {detail}
                    </Typography>
                  </CardContent>

                  <Button
                    sx={{
                      fontWeight: "700",
                      color: "rgb(0, 106, 255)",
                      borderColor: "rgb(0, 106, 255)",
                      mt: "40px",
                    }}
                    fontWeight="700"
                    variant="outlined"
                    size="large">
                    {button}
                  </Button>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>

      <Box
        margin={{ md: "0px 71.5px", xs: "0px 0px" }}
        padding={{ md: "31px 24px", xs: "0px 0px" }}
        textAlign={"center"}
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(4,1fr)", xs: "repeat(2,1fr)" },
          gap: "5px",
        }}>
        {browse.map(({ title }) => {
          return (
            <Box borderRight={"1px solid lightgray"} padding="12px 40px 12px 0">
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "500",
                  fontSize: "16px",
                  ":hover": {
                    backgroundColor: "none",
                  },
                }}
                variant="none"
                endIcon={<ExpandMoreIcon sx={{ color: "blue" }} />}>
                {title}
              </Button>
            </Box>
          );
        })}
      </Box>

      <Divider variant="middle" />

      
    </Box>
  );
}

export default Home;
