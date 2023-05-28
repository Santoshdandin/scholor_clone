
import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CountUp from "react-countup";



const Count = () => {
     
  return (
    <Box
      width={"100%"}
      padding={"0.5rem"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
      maxWidth={"80rem"}
      marginBottom={{ xs: "6rem", md: "4rem" }}
      margin={"auto"}>
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        maxWidth={"90rem"}
        maxHeight={"30rem"}
        top={{ xs: "20rem", md: "6rem" }}>
        <Box
          position={"absolute"}
          sx={{
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            border: " 0",
            margin: "0",
            padding: "0",
            position: "absolute",
            top: " 0",
            left: "0",
            bottom: " 0",
            right: "0",
          }}>
          <CardMedia
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              boxSizing: "border-box",
              padding: "0",
              border: "none",
              margin: "auto",
              display: "block",
              width: "0",
              height: "0",
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              overflowClipMargin: "content-box",
              overflow: "clip",
            }}
            image="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-page-map.3f6d7fb2.png&w=3840&q=75"
          />

          {/* <img
            src="https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-page-map.3f6d7fb2.png&w=3840&q=75"
            width={"100%"}
            height={"100%"}
          /> */}
        </Box>
      </Box>
      <Box
        position={"relative"}
        marginTop="5rem"
        padding={"0.5rem"}
        textAlign={"center"}>
        <Typography
          color={"rgb(59, 59, 60)"}
          fontSize={"1.5rem"}
          fontWeight={700}
          sx={{ wordWrap: "break-word" }}>
          We are making education more accessible for everyone
        </Typography>
        <Typography
          color={"rgb(97, 97, 97)"}
          fontSize={"1rem"}
          fontWeight={600}
          mt={"1rem"}>
          Here is how we are doing so far ...
        </Typography>
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={{ md: "1fr 1fr 1fr", xs: "1fr" }}
        columnGap={"3.875rem"}
        rowGap={"3.75rem"}
        sx={{ placeItems: "center" }}
        padding={"1.5rem 0.5rem"}
        marginTop={"3.75rem"}
        position={"relative"}>
        <Box
          sx={{
            borderRadius: "1.25rem",
            border: "0.5rem solid rgb(238, 240, 241)",
            display: "grid",
            rowGap: "1rem",
            background: "rgba(255, 255, 255, 0.8)",
            padding: { md: "2.25rem 4rem", xs: "2.25rem 1.5rem" },
          }}>
          <Typography
            color={"rgb(250, 160, 51)"}
            fontSize={"2rem"}
            fontWeight={700}
            textAlign={"center"}>
            16,500+
          </Typography>
          <Typography
            color={"rgb(97, 97, 97)"}
            fontSize={"1rem"}
            fontWeight={600}
            textAlign={"center"}>
            Applications Received
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "1.25rem",
            border: "0.5rem solid rgb(238, 240, 241)",
            display: "grid",
            rowGap: "1rem",
            background: "rgba(255, 255, 255, 0.8)",
            padding: { md: "2.25rem 4rem", xs: "2.25rem 1.5rem" },
          }}>
          <Typography
            color={"rgb(250, 160, 51)"}
            fontSize={"2rem"}
            fontWeight={700}
            textAlign={"center"}>
            USD 91.4M+
          </Typography>
          <Typography
            color={"rgb(97, 97, 97)"}
            fontSize={"1rem"}
            fontWeight={600}
            textAlign={"center"}>
            Sholorships Applied For
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "1.25rem",
            border: "0.5rem solid rgb(238, 240, 241)",
            display: "grid",
            rowGap: "1rem",
            background: "rgba(255, 255, 255, 0.8)",
            padding: { md: "2.25rem 4rem", xs: "2.25rem 1.5rem" },
          }}>
          <Typography
            color={"rgb(250, 160, 51)"}
            fontSize={"2rem"}
            fontWeight={700}
            textAlign={"center"}>
            41000+
          </Typography>
          <Typography
            color={"rgb(97, 97, 97)"}
            fontSize={"1rem"}
            fontWeight={600}
            textAlign={"center"}>
            Courses Available
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Count