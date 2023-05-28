import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import '../Pages/Home.css'

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import scroll from "../Images/scroll.svg";
import flight from "../Images/flight.svg";

import SearchBar from "../Components/SearchBar";
import News from "../Components/News";
import Steps from "../Components/Steps";
import Count from "../Components/Count";



function Home() {

  

  
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          height: "max-content",
        }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          sx={{
            minWidth: "100%",
            minHeight: "100vh",
            height: "max-content",
          }}>
          <Box
            className="hero"
            boxSizing={"border-box"}
            display={"block"}
            overflow={"hidden"}
            sx={{
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            }}
            top={0}
            left={0}
            bottom={0}
            right={0}
            position={"absolute"}
            justifyContent={"center"}>
            <CardMedia
              image="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-page-banner.b933190a.jpeg&w=1920&q=75"
              sx={{
                minHeight: "100%",
                height: "100vh",
                minWidth: "100%",
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
                position: "absolute",
                margin: "auto",
                boxSizing: "border-box",
                inset: "0px",
                display: "block",
              }}
            />
          </Box>
          <Box
            display={"flex"}
            width={"100%"}
            maxWidth={"48rem"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"8.5rem 1.5rem 17.5rem 1.5rem"}
            position={"relative"}
            textAlign={"center"}
            color={"#FFFFFF"}>
            <Typography
              fontSize={"1.875rem"}
              fontWeight={700}
              sx={{ textShadow: "0 0.25rem 0.25rem rgb(0 0 0 / 25%)" }}>
              Find your Dream University
            </Typography>
            <Typography fontSize={"1rem"} fontWeight={600} mt={"8px"}>
              Secure end to end admissions support, with a guaranteed
              scholarship
            </Typography>

            <Box width={"100%"}>
              <SearchBar />
            </Box>
          </Box>

          <Box
            position={"absolute"}
            bottom={"-1.5rem"}
            width={"100%"}
            height={"10rem"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            zIndex={"10"}
            overflow={"hidden"}>
            <img src={scroll} />
            <Box
              position={"absolute"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              top={"5px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "0.25rem solid rgb(238, 240, 241)",
                  transition: "all 300ms ease 0s",
                  alignSelf: "center",
                  ":hover": { transform: "translateY(-15%)" },
                  cursor: "pointer",
                }}>
                <ArrowDownwardIcon
                  sx={{ fontSize: "25px", color: "rgb(147, 153, 165)" }}
                />
              </Box>

              <Typography
                color={"rgb(147, 153, 165)"}
                fontSize={"1rem"}
                fontWeight={600}
                mt={"0.75rem"}>
                Scroll to Explore
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Count */}

      <Box>
        <Count/>
      </Box>

      {/* steps */}
      <Box>
        <Steps />
      </Box>

      <Box
        m={"auto"}
        display={"grid"}
        gridTemplateColumns={"auto auto"}
        gap={"1rem"}
        sx={{ placeItems: "center" }}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"min(50rem, 95vw)"}
        padding={"1.375rem"}
        bgcolor={"rgb(255, 255, 255)"}
        border={"0.25rem solid rgb(238, 240, 241)"}
        borderRadius={"0.625rem"}
        marginBottom={"6.25rem"}>
        <Box>
          <CardMedia
            image={flight}
            sx={{
              height: "12px",
              width: "24px",
            }}
          />
        </Box>

        <Box>
          <Typography
            color={"rgb(59, 59, 60)"}
            fontSize={"1rem"}
            fontWeight={600}
            component="span">
            Taking off soon? Let our experts help you with your{" "}
            <Typography
              component="span"
              color={"rgb(237, 151, 46)"}
              fontSize={"1.0625rem"}
              fontWeight={700}>
              {" "}
              Visa & Accomodation
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        m={"auto"}
        boxSizing={"border-box"}
        display={"grid"}
        gridTemplateColumns={{ md: "2fr 3fr", xs: "1fr" }}
        gap={"1rem"}
        sx={{ placeItems: "center" }}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"56.25rem"}
        padding={"2.25rem"}
        bgcolor={"rgb(255, 255, 255)"}
        borderRadius={"1.5rem"}
        marginBottom={"7.5rem"}
        width={"calc(100% - 1rem)"}>
        <Box>
          <CardMedia
            image="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsms-plus-book-consultation.71108cfc.png&w=640&q=75"
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
          textAlign={"left"}>
          <Box width={"fit-content"}>
            <Typography
              color={"rgb(59, 59, 60)"}
              fontSize={"2.25rem"}
              fontWeight={600}
              component="span">
              Give your university application a
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                // bgColor={"linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}
                fontSize={"2.25rem"}
                fontWeight={600}>
                {" "}
                Plus
              </Box>
              <Typography
                component="span"
                color={"rgb(250, 174, 82)"}
                fontSize={"2.25rem"}
                fontWeight={600}>
                {" "}
                .
              </Typography>
            </Typography>
          </Box>
          <Box
            textAlign={"left"}
            marginTop={"0.75rem"}
            boxSizing={"border-box"}>
            <Typography
              color={"rgb(126, 143, 170)"}
              fontSize={"1rem"}
              maxWidth={"25rem"}
              fontWeight={600}
              component="span">
              Access premium end-to-end assistance with your university
              applications
            </Typography>
          </Box>

          <Button
            sx={{
              maxWidth: "20rem",
              mt: "2.25rem",
              color: "rgb(250, 250, 250)",
              borderRadius: "2rem",
              padding: "0.875rem",
              fontSize: "1rem",
              textTransform: "unset",
              fontWeight: "600",
              boxSizing: "border-box",
              background:
                "linear-gradient(261.78deg, rgb(153, 129, 249) -3.64%, rgb(104, 84, 246) 31.16%, rgb(32, 110, 244) 76.64%, rgb(80, 141, 246) 103.46%), rgb(32, 110, 244)",
              ":hover": {
                "::after": {
                  border: "0.125rem solid white",
                },
              },
              ":after": {
                transition: "all 300ms ease 0s",
                boxSizing: "border-box",
                content: `" "`,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50px",
                border: "0.125rem solid transparent",
                width: "calc(100% - 0.625rem)",
                height: "calc(100% - 0.625rem)",
              },
            }}
            variant="outlined"
            size="large">
            Book a call today - it's free!
          </Button>

          <Box
            textAlign={"left"}
            marginTop={"0.75rem"}
            boxSizing={"border-box"}
            mt={"1.125rem"}
            maxWidth={"21rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}>
            <Typography
              color={"rgb(143, 143, 144)"}
              fontSize={"0.875rem"}
              fontWeight={500}
              component="span">
              Learn more about SecureMyScholarship Plus
            </Typography>
            <ArrowRightAltIcon
              sx={{ fontSize: "25px", color: "rgb(147, 153, 165)" }}
            />
          </Box>
        </Box>
      </Box>


{/* News */}
      <Box>
        <News />
      </Box>
    </Box>
  );
}

export default Home;
