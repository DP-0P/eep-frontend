import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LoginSignup.module.css";
import { hexToRgb } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface LoginSignupProps {}

// const handleChange = () => {
//     console.log("hello");
// }

const LoginSignup: React.FC<LoginSignupProps> = () => {
  const [isLogin, setIsLogin] = useState(false);

  // const [alignment, setAlignment] = React.useState("web");

  // const handleChange = (
  //   event: React.MouseEvent<HTMLElement>,
  //   newAlignment: string
  // ) => {
  //   setAlignment(newAlignment);
  // };

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginInput}>
        <TextField
          className={styles.textField}
          required
          id="outlined-required"
          label="Employee ID"
          sx={{ width: 300 }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ width: 300 }}
        />
        {isLogin ? (
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            sx={{ width: 300 }}
          />
        ) : (
          <></>
        )}
        <Button
          variant="contained"
          onClick={() => {
            console.log("submit form");
          }}
          sx={{ width: 300 }}
        >
          Submit
        </Button>
      </div>
      <div className={styles.loginView}>
        <Button
          variant={!isLogin ? "contained" : "outlined"}
          onClick={() => {
            setIsLogin(false);
          }}
          sx={{ width: 145 }}
        >
          Login
        </Button>
        <Button
          variant={isLogin ? "contained" : "outlined"}
          onClick={() => {
            setIsLogin(true);
          }}
          sx={{ width: 145 }}
        >
          Sign Up
        </Button>
      </div>
      {/* <div className={styles.loginView}>
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Login</ToggleButton>
      <ToggleButton value="android">Sign Up</ToggleButton>
    </ToggleButtonGroup>
      </div> */}
    </div>
  );
};

export default LoginSignup;
