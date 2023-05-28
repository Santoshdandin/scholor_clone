import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SearchBar from "../Components/SearchBar";
import scroll from "../Images/scroll.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import future from "../Images/future.svg";
import stepno from "../Images/steps.svg";

const Steps = () => {
  const steps = [
    {
      step: "STEP 01",
      title: "Search",
      details:
        "Browse through hundreds of universities from USA, UK, UAE and more.",
    },
    {
      step: "STEP 02",
      title: "Apply",
      details:
        "Select your dream university and course. Apply in just a few clicks.",
    },
    {
      step: "STEP 03",
      title: "Secure",
      details:
        "Coordinate with our team to secure your enrolment and scholarships.",
    },
  ];
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}>
      <Box marginTop="6.25rem" height={"40px"} position={"relative"}>
        <Typography
          color={"rgb(59, 59, 60)"}
          fontSize={"1.5rem"}
          fontWeight={700}>
          Secure your scholorship today!
        </Typography>
        <CardMedia
          image={future}
          sx={{
            position: "absolute",
            height: "115px",
            width: "150px",
            right: "150px",
            top: "30px",
            transform: "translate(50%, -75%)",
          }}
        />
      </Box>

      <Box
        maxWidth={"90rem"}
        padding={"0.5rem"}
        display={"flex"}
        flexDirection={"column"}
        sx={{
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box
          display={"grid"}
          justifyItems={"center"}
          gridTemplateColumns={{md:"1fr 1fr 1fr",sx:'1fr'}}
          columnGap={"2rem"}
          rowGap={'2.5rem'}
          my={"4rem"}>
          {steps.map(({step,title,details}) => {
            return (
              <Box maxWidth={"22rem"} padding={"0 1rem"}>
                <Box position={"absolute"}>
                  <CardMedia
                    image={stepno}
                    sx={{
                      position: "relative",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "46px",
                      height: "119px",
                      transition: "all .3s ease",
                    }}
                  />
                  <Typography
                    position={"relative"}
                    top={"-120px"}
                    right={"-18px"}
                    color="rgb(255, 255, 255)"
                    fontSize={"1rem"}
                    fontWeight={600}
                    letterSpacing={"0.1rem"}
                    sx={{
                      transform: "translate(-1rem, 2.75rem) rotate(270deg)",
                    }}>
                    {step}
                  </Typography>
                </Box>
                <Box
                  bgcolor={"rgb(255, 255, 255)"}
                  marginLeft={"3.3rem"}
                  height={"7rem"}
                  borderRadius={"0rem 1.25rem 1.25rem"}
                  border={"0.3rem solid rgb(100, 154, 247)"}
                  padding={"1.25rem"}
                  boxShadow={"rgb(177 204 251) 0.75rem 1rem"}>
                  <Typography
                    position={"absolute"}
                    color={"rgb(59, 59, 60)"}
                    fontSize={"1.25rem"}
                    fontWeight={700}
                    lineHeight={"120%"}
                    sx={{
                      ":after": {
                        content: `" "`,
                        position: "absolute",
                        bottom: "-0.65rem",
                        left: "0px",
                        width: "2.75rem",
                        height: "0.25rem",
                        background: "rgb(66, 134, 253)",
                        borderRadius: "0.25rem",
                      },
                    }}>
                    {title}
                  </Typography>{" "}
                  <Typography
                    mt="3rem"
                    color={"rgb(97, 97, 97)"}
                    fontSize={"1rem"}
                    fontWeight={700}
                    lineHeight={"120%"}>
                    {details}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Steps;
