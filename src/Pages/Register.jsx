import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";

import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const sports = [
   "Swimming",
    "Cricket",
    "Chess" ,
    "Football" ,
  "Basketball" ,
   "Tennis" ,
   "Badminton",
  "Soccer"
];

const levels = ["Beginner","Intermediate","Professional"]

const Register = () => {

      const initialData = {
        username: "",
        location: "",
        age:"",
        phone:"",
        level:"",
        email: "",
        password: "",
      };

      const [details, setDetails] = useState(initialData);
      const [sportsInterest, setSportsInterest] = useState([]);
    //   const [password, setPassword] = useState("");
    //   const [cPassword, setCPassword] = useState("");

      const handleChange = (e) => {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
          level: e.target.innerText,
          sportsInterest
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();


     
          axios
            .post(`https://salmon-cougar-tux.cyclic.app/users`, details)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
        
      };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };



    
  return (
    <Box py="50px">
      <Box
        width={"400px"}
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        m="auto"
        mt="30px"
        borderRadius={"5px"}
        padding={"10px"}
        px="20px"
        bgcolor={"white"}
        boxShadow={"large"}>
        <Box
          display={"grid"}
          gap={"15px"}
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          component={"form"}
          onSubmit={handleSubmit}>
          <Typography variant="h5" mb="15px">
            Register
          </Typography>
          <TextField
            // required
            type="text"
            sx={{ width: "100%" }}
            id="username"
            name="username"
            onChange={handleChange}
            label="Name"
            placeholder="Enter your name"
            variant="outlined"
          />

          <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"20px"}>
            <TextField
              //   required
              type="text"
              id="location"
              name="location"
              onChange={handleChange}
              label="Location"
              placeholder="Enter your location"
              variant="outlined"
            />
            <TextField
              //   required
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              label="Age"
              placeholder="Enter your age"
              variant="outlined"
            />
          </Box>

          <TextField
            // required
            type="number"
            sx={{ width: "100%" }}
            id="phone"
            name="phone"
            onChange={handleChange}
            label="Phone"
            placeholder="Enter your phone number"
            variant="outlined"
          />

          <TextField
            // required
            type="email"
            sx={{ width: "100%" }}
            id="email"
            name="email"
            onChange={handleChange}
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
          />

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              //   required
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Autocomplete
            multiple
            id="sportsInterested"
            options={sports}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            
            onChange={(event,value)=>setSportsInterest(value)}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Sports" placeholder="Interested" />
            )}
          />

          <Autocomplete
            disablePortal
            options={levels}
            id="level"
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} label="Level" />}
          />

          <Button
            sx={{
              mt: "30px",
              color: "rgb(250, 250, 250)",
              borderRadius: "2rem",
              padding: "0.875rem",
              fontSize: "18px",
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
            size="large"
            type="submit">
            Submit
          </Button>
        </Box>

        <Box>
          <p>
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
