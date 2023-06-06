import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import footer1 from '../Images/footer.svg'
import { CardMedia } from "@mui/material";
import logo from "../Images/logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookIcon from "@mui/icons-material/Facebook";



const Footer = () => {

  const footerElements = [
    'Universities','Courses','Events','Blog','Meet our students', 'Meet our team','Contact us','About us', 'FAQs'
  ]

  const partners = [
    {
      image:
        "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsource-applyboard.574e04ee.png&w=640&q=75",
    },
    {
      image:
        "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsource-shorelight.c5c099c6.png&w=640&q=75",
    },
    {
      image:
        "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsource-kaplan.e118a6a6.png&w=384&q=75",
    },
    {
      image:
        "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsource-global-university-systems.a56fc60c.png&w=640&q=75",
    },
    {
      image:
        "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsource-navitas.f87c630c.png&w=384&q=75",
    },
  ];
   
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgb(35, 39, 43)",
        paddingTop: "3.5rem",
        width: "100%",
        minHeight: "100vh",
      }}>
      <Box
        display={"grid"}
        gridTemplateColumns={{ md: "1.5fr 1fr 1fr", xs: "1fr" }}
        columnGap={"4rem"}
        rowGap={"3rem"}
        maxWidth={"90rem"}
        padding={{ md: "5.5rem 3.75rem 0rem", xs: "0px" }}>
        {/* Logo */}
        <Box maxWidth={"24rem"} display={"flex"} flexDirection={"column"}>
          <Box>
            <img src={logo} width={"384px"} height={"126px"} />
          </Box>

          <Typography
            mt="1rem"
            color={"rgb(143, 143, 144)"}
            fontSize={"0.875rem"}
            padding={"0rem 1.5rem"}
            pl={"2rem"}
            fontWeight={400}
            lineHeight={"150%"}>
            Our mission is to make education more accessible and affordable for
            all by helping students reduce their tuition burden.
          </Typography>
        </Box>

        {/* footer Elements and social media */}
        <Box display={"grid"} gridTemplateRows={"auto auto"} rowGap={"3.75rem"}>
          <Box display={"grid"} rowGap={"1rem"}>
            {footerElements.map((el) => {
              return (
                <Typography
                  color={"rgb(143, 143, 144)"}
                  padding={"0.5rem 1.75rem"}
                  fontSize={"0.875rem"}
                  fontFamily={"500"}
                  sx={{
                    transition: "all 300ms ease 0s",
                    wordWrap: "break-word",
                    width: "fit-content",
                    cursor: "pointer",
                    ":hover": {
                      color: "rgb(255, 255, 255)",
                      fontWeight: "700",
                    },
                  }}>
                  {el}
                </Typography>
              );
            })}
          </Box>

          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr"}
            columnGap={"1.5rem"}
            padding={"0rem 1.75rem"}
            sx={{ width: "max-content" }}>
            <Box
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#206ef4" },
              }}>
              <FacebookIcon sx={{ color: "white", fontSize: "30px" }} />
            </Box>

            <Box
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#206ef4" },
              }}>
              <InstagramIcon sx={{ color: "white", fontSize: "30px" }} />
            </Box>

            <Box
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#206ef4" },
              }}>
              <TwitterIcon sx={{ color: "white", fontSize: "30px" }} />
            </Box>
          </Box>
        </Box>

        {/* Partners */}

        <Box
          display={"grid"}
          gridTemplateRows={"1fr 1fr 1fr 1fr 1fr"}
          rowGap={"1.5rem"}
          padding={{ xs: "0rem 2.75rem", md: "0px" }}>
            {partners.map((el) => {
              return (
                <Box
                  display={"grid"}
                  gridTemplateColumns={"1fr 1fr"}
                  columnGap={"1.5rem"}
                  alignItems={"center"}>
                  <Box maxWidth={"12.5rem"}>
                    {" "}
                    <img src={el.image} width={"145px"} height={"58px"} />
                  </Box>

                  <Typography
                    color={"rgb(97, 97, 97)"}
                    fontWeight={"700"}
                    fontSize={"0.75rem"}>
                    Authorized Representative
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>

      <Box width={'100%'}>
        <Box display={"flex"} width={'100%'} alignItems={"center"} >
          <img src={footer1} width={"100%"} height={"330px"} />
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          position={"absolute"}
          bottom={"0px"}
          left={"0px"}
          right={"0px"}
          width={"100%"}
          maxWidth={"70rem"}
          alignItems={"center"}
          justifyContent={{ md: "space-between", xs: "center" }}
          padding={{ xs: "1.5rem 1.5rem 5rem", md: "2.5rem 5rem" }}>
          <Box sx={{ mb: { xs: "40px", md: "0px" } }}>
            <Typography
              color={"rgb(255, 255, 255)"}
              fontSize={"1rem"}
              sx={{ wordWrap: "wrap" }}
              fontWeight={400}
              mr={"1rem"}
              component="span">
              Terms
            </Typography>

            <Typography
              color={"rgb(255, 255, 255)"}
              fontSize={"1rem"}
              sx={{ wordWrap: "wrap" }}
              fontWeight={400}
              mr={"1rem"}
              component="span">
              •
            </Typography>

            <Typography
              color={"rgb(255, 255, 255)"}
              fontSize={"1rem"}
              sx={{ wordWrap: "wrap" }}
              fontWeight={400}
              mr={"1rem"}
              component="span">
              Privacy
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              color={"rgb(255, 255, 255)"}
              fontSize={"1rem"}
              sx={{ wordWrap: "wrap" }}
              fontWeight={400}
              mr={"1rem"}
              component="span">
              Powered by
            </Typography>
            <img
              src="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-lock-and-stock.177a82a0.png&w=384&q=75"
              width={"160px"}
              height={"48px"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
