import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../Images/logo.svg";
import "../Pages/Home.css";

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

import scroll from "../Images/scroll.svg";
import flight from "../Images/flight.svg";

import SearchBar from "../Components/SearchBar";
import Link from "@mui/material/Link";

const Technology = () => {
  const eduLevel = ["Foundation", "Undergraduvation", "Postgraduvate"];

  const videos = ["https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/MultimediaAssets/Videos/67_MurdochUniversityDubai_MultimediaVideo_1684834762925-Welcome-to-Murdoch-University-Dubai.mp4?time=1684955267418"]
  return (
    <Box>
      {/* Navbar */}

      <Box
        className="appBarSolid"
        position={"fixed"}
        sx={{ zIndex: "30" }}
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        zIndex={1000}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"0 1rem"}
          height={"5rem"}
          sx={{ maxWidth: "80rem", minHeight: "5rem" }}
        >
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
              <Typography
                color={"white"}
                fontSize={"1.25rem"}
                fontWeight={"800"}
                mr="35px"
              >
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
              mr="65px"
            >
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

      {/* Hero */}

      <Box
        sx={{
          minWidth: "100%",
          minHeight: "90vh",
          height: "max-content",
        }}
      >
        {/* Path */}
        <Box
          bgcolor={"rgb(32,110,244)"}
          position={"relative"}
          height={"40px"}
          width={"100%"}
        ></Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          sx={{
            minWidth: "100%",
            minHeight: "90vh",
            height: "max-content",
          }}
        >
          {/* hero image section */}
          <Box
            className="hero1"
            boxSizing={"border-box"}
            display={"block"}
            overflow={"hidden"}
            sx={{
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            }}
            justifyContent={"center"}
          >
            <CardMedia
              image="https://www.securemyscholarship.com/_next/image?url=https%3A%2F%2Fucpbucket.s3.us-east-2.amazonaws.com%2FProduction%2FUniImages%2FBannerImages%2F67_MurdochUniversityDubai_Banner.png&w=1920&q=75"
              sx={{
                height: "100%",

                position: "absolute",
                margin: "auto",
                boxSizing: "border-box",
                inset: "0px",
                display: "block",
              }}
            />
          </Box>

          {/* hero section content */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            maxWidth={"73rem"}
            height={"maxContent"}
            alignItems={{ xs: "center", md: "flex-start" }}
            paddingLeft={{ xs: "0.75rem", md: "1.5rem" }}
            paddingRight={{ xs: "0.75rem", md: "1.5rem" }}
            position={"relative"}
            textAlign={"left"}
            color={"#FFFFFF"}
          >
            {/* hero title */}

            <Box
              display={"flex"}
              justifyItems={"flex-start"}
              marginTop={"2.75rem"}
            >
              <Box>
                <Box
                  width={"6rem"}
                  height={"6rem"}
                  borderRadius={"1.25rem"}
                  overflow={"hidden"}
                  boxShadow={"rgba(0, 0, 0, 0.25) 0rem 0.25rem 0.25rem"}
                  marginRight={"1.5rem"}
                >
                  <CardMedia
                    image="https://www.securemyscholarship.com/_next/image?url=https%3A%2F%2Fucpbucket.s3.us-east-2.amazonaws.com%2FProduction%2FUniImages%2FLogoImages%2F67_MurdochUniversityDubai_Logo.png&w=1920&q=75"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  fontSize={"2rem"}
                  fontWeight={700}
                  lineHeight={"3rem"}
                >
                  Murdoch University Dubai
                </Typography>
                <Box>
                  <Typography
                    fontSize={"1.5rem"}
                    color={"rgb(217, 217, 217)"}
                    fontWeight={600}
                    mt={"8px"}
                  >
                    United Arab Emirates
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* fee Boxes */}

            <Box
              display={{ md: "flex", xs: "grid" }}
              gridTemplateColumns={"1fr 1fr"}
              gap={"0.75rem"}
              columnGap={"0.75rem"}
              flexDirection={"row"}
              maxWidth={"70rem"}
              marginTop={"2.75rem"}
              width={"100%"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={"10rem"}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  AED 54,400
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Annual Tuition (UG)
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={"10rem"}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  AED 39,400
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Annual Tuition (PG)
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={"10rem"}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  4 Scholarships
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Total Scholarships
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={"10rem"}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  21 courses
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Total Courses
                </Typography>
              </Box>
            </Box>

            <Button
              sx={{
                display: "block",
                width: "100%",
                maxWidth: "25rem",
                mt: "3rem",
                color: "rgb(255, 255, 255)",
                borderRadius: "0.625rem",
                padding: "0.875rem",
                fontSize: "1.25rem",
                textTransform: "unset",
                fontWeight: "600",
                boxSizing: "border-box",
                background: "rgb(32, 110, 244)",
                transition: "all 300ms ease 0s",
              }}
              variant="contained"
              size="large"
            >
              Secure Scholarship
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Cards */}
      <Box
        margin={"auto"}
        mt={"48px"}
        width={"100%"}
        height={"100%"}
        alignSelf={"center"}
        maxWidth={"1168px"}
      >
        <Typography
          position={"relative"}
          color={"rgb(30, 40, 51)"}
          fontSize={{ xs: "1.5rem", md: "2.5rem" }}
          textAlign={"left"}
          marginBottom={"1rem"}
          padding={"0.5rem 1.5rem"}
          fontWeight={700}
          sx={{
            ":after": {
              content: `" "`,
              position: "absolute",
              bottom: "0px",
              left: "1.5rem",
              height: "0.25rem",
              width: "5.25rem",
              borderRadius: "0.25rem",
              background: "rgb(32, 110, 244)",
            },
          }}
        >
          Scholorships Available
        </Typography>

        <Box
          width={"100%"}
          maxWidth={"100%"}
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
          gap={"0.5rem"}
          padding={"1rem 0rem"}
        >
          {eduLevel.map((el) => {
            return (
              <Box position={"relative"} padding={"2rem 0.5rem 0rem"}>
                <Box
                  bgcolor={"rgb(255, 255, 255)"}
                  padding={"1rem"}
                  border={"0.25rem solid rgb(240, 240, 240)"}
                  borderRadius={"1.25rem"}
                  overflow={"hidden"}
                >
                  <Typography
                    position={"relative"}
                    sx={{
                      ":before": {
                        content: `" "`,
                        position: "absolute",
                        top: "2rem",
                        right: "-20px",

                        width: "5rem",
                        height: "5rem",
                        transform: "translate(50%, 0px)",
                        border: "1rem solid rgb(230, 234, 239)",
                        borderRadius: "50%",
                      },
                    }}
                    color={"rgb(59, 59, 60)"}
                    fontSize={"1.5rem"}
                    textAlign={"left"}
                    fontWeight={700}
                  >
                    5% Early Bird fee waiver
                  </Typography>

                  <Box
                    display={"grid"}
                    gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                    gap={"1rem 0.5rem"}
                    marginTop={"2.75rem"}
                  >
                    <Box>
                      <Typography
                        color={"rgb(108,108, 109)"}
                        fontSize={"0.875rem"}
                        textAlign={"left"}
                        fontWeight={600}
                      >
                        Apply By
                      </Typography>
                      <Typography
                        color={"rgb(59,59, 60)"}
                        fontSize={"1rem"}
                        textAlign={"center"}
                        fontWeight={600}
                        bgcolor={"rgb(243, 245, 247)"}
                        borderRadius={"0.625rem"}
                        mt={"5px"}
                        padding={"1rem 0.5rem"}
                      >
                        June 30, 2023
                      </Typography>
                    </Box>

                    <Box zIndex={10}>
                      <Typography
                        color={"rgb(108,108, 109)"}
                        fontSize={"0.875rem"}
                        textAlign={"left"}
                        fontWeight={600}
                      >
                        Education Level
                      </Typography>
                      <Typography
                        color={"rgb(59,59, 60)"}
                        fontSize={"1rem"}
                        textAlign={"center"}
                        fontWeight={600}
                        bgcolor={"rgb(243, 245, 247)"}
                        borderRadius={"0.625rem"}
                        mt={"5px"}
                        padding={"1rem 0.5rem"}
                      >
                        {el}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    bgcolor={"rgb(243, 245, 247)"}
                    borderRadius={"0.625rem"}
                    mt={"2rem"}
                    padding={"0.1rem 1rem"}
                    minHeight={"3.5rem"}
                    gridAutoColumns={"1/3"}
                  >
                    <Typography
                      color={"rgb(32, 110, 244)"}
                      fontSize={"0.875rem"}
                      textAlign={"left"}
                      fontWeight={700}
                    >
                      Additional AED 2,000 Fee Waiver
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      display: "block",
                      width: "100%",
                      maxWidth: "25rem",
                      mt: "2rem",
                      color: "rgb(255, 255, 255)",
                      borderRadius: "0.625rem",
                      padding: "0.875rem",
                      fontSize: "1rem",
                      textTransform: "unset",
                      fontWeight: "600",
                      boxSizing: "border-box",
                      background: "rgb(32, 110, 244)",
                      transition: "all 300ms ease 0s",
                    }}
                    variant="contained"
                    size="large"
                  >
                    Secure Scholarship
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Earn additional */}
      <Box
        m={"auto"}
        boxSizing={"border-box"}
        display={"grid"}
        gridTemplateColumns={{ md: "2fr 3fr", xs: "1fr" }}
        gap={"1rem"}
        sx={{ placeItems: "center" }}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"50rem"}
        bgcolor={"rgb(255, 255, 255)"}
        borderRadius={"1.5rem"}
        marginBottom={"7.5rem"}
        marginTop={"7.5rem"}
        width={"calc(100% - 1rem)"}
      >
        <Box>
          <CardMedia
            image="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial-sharing-graphic.7aed9f25.png&w=640&q=75"
            sx={{
              height: "280px",
              width: "280px",
            }}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          px={"20px"}
          ml="12px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Box width={"fit-content"} textAlign={"center"}>
            <Typography
              color={"rgb(59, 59, 60)"}
              fontSize={"1.5rem"}
              fontWeight={700}
              component="span"
            >
              Earn an additional $100
              <Box
                color={"rgb(59, 59, 60)"}
                fontSize={"1.5rem"}
                fontWeight={700}
              >
                {" "}
                fee waiver
              </Box>
            </Typography>
          </Box>
          <Box boxSizing={"border-box"} maxWidth={"25rem"} textAlign={"center"}>
            <Typography
              color={"rgb(143, 143, 144)"}
              fontSize={"1rem"}
              lineHeight={"1.125rem"}
              fontWeight={600}
              component="span"
            >
              Share the love with your friends to secure an additional $100 fee
              waiver when you enrol
            </Typography>
          </Box>

          <Button
            sx={{
              display: "block",
              width: "80%",
              maxWidth: "25rem",
              mt: "1rem",
              color: "rgb(255, 255, 255)",
              borderRadius: "0.625rem",
              padding: "0.875rem",
              fontSize: "1rem",
              textTransform: "unset",
              fontWeight: "600",
              boxSizing: "border-box",
              background: "rgb(32, 110, 244)",
              transition: "all 300ms ease 0s",
            }}
            variant="contained"
            size="large"
          >
            How do I claim this?
          </Button>
        </Box>
      </Box>

      {/* Video */}

      <Box
        margin={"auto"}
        mt={"48px"}
        width={"100%"}
        height={"100%"}
        alignSelf={"center"}
        maxWidth={"1168px"}
      >
        <Typography
          position={"relative"}
          color={"rgb(30, 40, 51)"}
          fontSize={{ xs: "1.5rem", md: "2.5rem" }}
          textAlign={"left"}
          marginBottom={"1rem"}
         
          fontWeight={700}
          sx={{
            ":after": {
              content: `" "`,
              position: "absolute",
              bottom: "0px",
              left: "1.5rem",
              height: "0.25rem",
              width: "5.25rem",
              borderRadius: "0.25rem",
              background: "rgb(32, 110, 244)",
            },
          }}
        >
          Explore University
        </Typography>

        <Box
          width={"100%"}
          maxWidth={"100%"}
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr 1fr" }}
          gap={"0.5rem"}
          padding={"1rem 0rem"}
        >
          {videos.map((el) => {
            return (
                <Card component="li" sx={{ minWidth: 300,height:300, flexGrow: 1 }}>
                <CardCover>
                  <video
                 
                   
                    muted
                    controls
                  >
                    <source
                      src={el}
                      type="video/mp4"
                    />
                  </video>
                </CardCover>
                
              </Card>
            );
          })}

      
        </Box>
      </Box>

      




      {/* here to help */}
      <Box
        m={"auto"}
        boxSizing={"border-box"}
        display={"grid"}
        gridTemplateColumns={{ md: "2fr 3fr", xs: "1fr" }}
        gap={"1rem"}
        sx={{ placeItems: "center" }}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"50rem"}
        px={"20px"}
        py={{ xs: "40px", md: "0px" }}
        bgcolor={"rgb(255, 255, 255)"}
        borderRadius={"1.5rem"}
        marginBottom={"7.5rem"}
        marginTop={"7.5rem"}
        width={"calc(100% - 1rem)"}
      >
        <Box>
          <CardMedia
            image="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspeak-to-a-counsellor.2fa2d636.png&w=1200&q=75"
            sx={{
              height: "280px",
              width: "280px",
            }}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          px={"20px"}
          ml="12px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Box boxSizing={"border-box"} maxWidth={"25rem"} textAlign={"center"}>
            <Typography
              color={"rgb(143, 143, 144)"}
              fontSize={"0.875rem"}
              lineHeight={"1.125rem"}
              fontWeight={600}
              component="span"
            >
              Still having trouble with your applications?
            </Typography>
          </Box>

          <Box width={"fit-content"} textAlign={"center"}>
            <Typography
              color={"rgb(59, 59, 60)"}
              fontSize={"1.75rem"}
              fontWeight={700}
              component="span"
            >
              We're here to help!
            </Typography>
          </Box>

          <Button
            sx={{
              display: "block",
              width: "100%",
              maxWidth: "25rem",
              mt: "1rem",
              color: "rgb(255, 255, 255)",
              borderRadius: "0.625rem",
              padding: "0.875rem",
              fontSize: "1rem",
              textTransform: "unset",
              fontWeight: "600",
              boxSizing: "border-box",
              background: "rgb(32, 110, 244)",
              transition: "all 300ms ease 0s",
            }}
            variant="contained"
            size="large"
          >
            Speak to a Counsellor
          </Button>
        </Box>
      </Box>

      
    </Box>
  );
};

export default Technology;
