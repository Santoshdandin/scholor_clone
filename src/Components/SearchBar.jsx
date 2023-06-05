import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

import SearchIcon from "@mui/icons-material/Search";

import '../Components/SearchBar.css';
import Button from "@mui/material/Button";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const SearchBar = () => {

  const [query,setQuery] = useState('')
  const navigate = useNavigate()


  const technologies = [
    "Javascript",
    "HTML",
  "React js",
  "Node js",

  ];

  const courses = [
    "Full stack developer",
    "ML Engineering",
    "Frontend",
    "Backend",
  ];




     const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch=()=>{
console.log(query)
navigate(`/movie/${query}`);
  }

   const handleQuery = (e) => {
    setQuery(e.target.value)
   };

  
     
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        mt: "30px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Box>
        <Tabs
          textColor="black"
          selectionFollowsFocus="false"
          TabIndicatorProps={{
            hidden: "true",
            sx: { backgroundColor: "white", height: 3, width: "10px" },
          }}
          sx={{
            "& button": {
              textTransform: "unset",
              mx: "80px",
              opacity: 0.5,
              fontWeight: "600",
              fontSize: "1rem",
            },
            "& button.Mui-selected": {
              opacity: 1,
              borderBottom: "4px solid white",
            },
            //"& button:after": {
            //   content: `" "`,
            //   position: "absolute",
            //   height: "10px",
            //   width: "40px",
            //   backgroundColor: "white",
            //   borderRadius: "5px",
            // },
          }}
          value={value}
          onChange={handleChange}>
          <Tab label="Technologies" {...a11yProps(0)} />
          <Tab label="Courses" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          height="40px"
          borderRadius={"3.75rem"}
          width={{ lg: "40rem", xs: "20rem" }}
          bgcolor={"rgb(255, 255, 255)"}
          sx={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: " 1fr auto",
            columnGap: "0.5rem",
          }}
          padding={"0.25rem 0.25rem 0.25rem 1.5rem"}
          border={"0.125rem solid rgb(238, 240, 241)"}>
          {/* <Box>
            <select>
              <option disabled selected>
                Edu.Level
              </option>
              <option>Undergraduvate</option>
              <option>Postgraduvate</option>
              <option>Diploma</option>
              <option>Foundation</option>
              <option>Phd</option>
            </select>
          </Box> */}

          {/* <Divider orientation="vertical" variant="middle" flexItem /> */}

          <InputBase
            sx={{ ml: 1 }}
            placeholder="Start Your search"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={handleQuery}
          />

          <Box>
            <Button
              sx={{ borderRadius: "40px" }}
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Box>

        <Box position={"absolute"} mx="20px" mt="30px" display={"flex"}>
          <Typography>Suggested:</Typography>
          <Box display={"flex"} flexWrap={"wrap"} color={"#BCC5D3"}>
            {technologies.map((name) => {
              return <Typography mx="10px">{name}</Typography>;
            })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          height="40px"
          borderRadius={"3.75rem"}
          width={{ lg: "40rem", xs: "20rem" }}
          bgcolor={"rgb(255, 255, 255)"}
          sx={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: " 1fr auto",
            columnGap: "0.5rem",
          }}
          padding={"0.25rem 0.25rem 0.25rem 1.5rem"}
          border={"0.125rem solid rgb(238, 240, 241)"}>
          {/* <Box>
            <select>
              <option disabled selected>
                Edu.Level
              </option>
              <option>Undergraduvate</option>
              <option>Postgraduvate</option>
              <option>Diploma</option>
              <option>Foundation</option>
              <option>Phd</option>
            </select>
          </Box> */}

          {/* <Divider orientation="vertical" variant="middle" flexItem /> */}

          <InputBase
            sx={{ ml: 1 }}
            placeholder="Start Your search"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box>
            <Button
              sx={{ borderRadius: "40px" }}
              variant="contained"
              startIcon={<SearchIcon />}>
              Search
            </Button>
          </Box>
        </Box>

        <Box position={"absolute"} mx="20px" mt="30px" display={"flex"}>
          <Typography>Suggested:</Typography>
          <Box display={"flex"} flexWrap={"wrap"} color={"#BCC5D3"}>
            {courses.map((name) => {
              return <Typography mx="10px">{name}</Typography>;
            })}
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default SearchBar