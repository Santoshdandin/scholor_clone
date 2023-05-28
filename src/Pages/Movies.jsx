import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";


const Movies = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getData = () => {
    try {
      return axios.get(`https://www.omdbapi.com/?apikey=e56d7d4c&s=${params.name}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(params);
  return (
    <Box margin={"auto"} display={"flex"} justifyContent={"center"} py={"6rem"}>
      {data ? (
        <Box
          display={"grid"}
          gridTemplateColumns={{ md: "1fr 1fr 1fr 1fr 1fr", xs: "1fr 1fr" }}
          columnGap={"4rem"}
          rowGap={"3rem"}>
          {data.map((el) => {
            return (
              <>
                <img src={el.Poster} width={"200px"} height={"200px"} />
              </>
            );
          })}
        </Box>
      ) : (
        <Box m="auto">
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIxSHCkrUX99OXGuFeU4GCf2MM27R1sgoYw&usqp=CAU"
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

              <Link href="/" underline="none">
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
                    textDecoration: "none",
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
                  Back to Home
                </Button>{" "}
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Movies;
