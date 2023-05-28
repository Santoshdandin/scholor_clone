import React from 'react'
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import lookmom from "../Images/lookmom.svg";


const News = () => {

    const news = [
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-india-today.09f1f937.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-cnbc.62dd6d60.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-dailyhunt.a85192fb.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-hello-entrepreneurs.0cde0999.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-business-point.07407485.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-delhi-news-now.b116aec1.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-the-Indian-Influencer.4d1a9fcc.png&w=384&q=75",
      },
      {
        img: "https://www.securemyscholarship.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-daily-metro.a363443b.png&w=384&q=75",
      },
    ];
  return (
    <Box
     
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      
      alignItems={"center"}>
      <Box marginTop="6.25rem" height={'40px'}>
        <Typography
          color={"rgb(59, 59, 60)"}
          fontSize={"1.5rem"}
          fontWeight={700}
          >
          Our impact is already going viral
        </Typography>
        <CardMedia
          image={lookmom}
          sx={{
            position: "relative",
            height: "52px",
            width: "152px",
            right: "-220px",
            top: "-30px",
            transform: "translate(50%, -75%)",
          }}
        />
      </Box>

      <Box
        
        maxWidth={"80rem"}
        padding={"3.375rem 1.125rem 5.25rem"} display={'flex'} sx={{flexFlow:'row wrap',alignItems:'center',justifyContent:'center'}}>
            {news.map(({img})=>{
                return (
                  <Box
                    maxWidth={"12.5rem"}
                    margin={"0.5rem"}
                    sx={{
                      transition: "all 300ms ease 0s",
                      ":hover": {
                        cursor: "pointer",
                        transform: "translateY(-0.75rem)",
                      },
                    }}>
                    <CardMedia
                      image={img}
                      sx={{
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "200px",
                        height: "83px",
                      }}
                    />
                  </Box>
                );
            })}
        </Box>
    </Box>
  );
}

export default News