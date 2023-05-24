import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";



const Footer = () => {
    const footerLinks = [
      "About",
      "Zestimates",
      "Research",
      "Careers",
      "Help",
      "Advise",
      "Fair Housing Guide",
      "Terms of use",
      "Privacy Portal",
      "Cookie Preference",
      "Blog",
      "AI",
      "Mobile Apps",
      "Trulia",
      "StreetEasy",
      "HotPads",
      "Out East",
      "ShowingTime+",
    ];
  return (
    <Box>
      <Box
        margin={{ md: "0px 71.5px", xs: "0px 0px" }}
        padding={{ md: "24px 24px", xs: "0px 0px" }}
        textAlign={"center"}>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {footerLinks.map((link) => {
            return (
              <Box
                sx={{
                  ":hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    padding: "10px",
                    color: "gray",
                  }}>
                  {link}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            padding: "10px",
            color: "#0D4599",
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}>
          Do Not Sell or Share My Personal Information
        </Typography>
      </Box>

      <Divider variant="middle" />

      <Box
        display={"flex"}
        alignItems={"center"}
        width={"95%"}
        m={"auto"}
        my="10px">
        <img
          src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
          width={"100%"}
        />
      </Box>
    </Box>
  );
};

export default Footer;
