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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Login = () => {
  const navigate = useNavigate();
  const initialData = {
    username: "",
    email: "",
    password: "",
  };

  const [details, setDetails] = useState(initialData);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://salmon-cougar-tux.cyclic.app/users?email=${details.email}&password=${details.password}`
      )
      .then((res) => {
        console.log(res.data)
        if (res.data.length) {
          
          localStorage.setItem("User", JSON.stringify(res.data));
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.error(err));
  };

   let { email, password } = details;

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
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          component={"form"}
          onSubmit={handleSubmit}>
          <Typography variant="h5" mb="30px">
            Login
          </Typography>
          <TextField
            required
            type="email"
            sx={{ width: "100%" }}
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
          />

          <FormControl sx={{ mt: "20px", width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              required
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
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
            Don't have account{" "}
            <Link to="/register">
              <Typography color="blue" as="span">
                Register
              </Typography>
            </Link>{" "}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
