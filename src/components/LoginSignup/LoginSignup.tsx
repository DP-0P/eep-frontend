import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './LoginSignup.module.css'

interface LoginSignupProps{
};

const LoginSignup: React.FC<LoginSignupProps> = () =>{
    return (
        <div className={styles.loginForm}>
        <TextField
            required
            id="outlined-required"
            label="First Name"/>
        <TextField
            required
            id="outlined-required"
            label="Last Name"
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />
        <Button variant="contained">SignUp</Button>
      </div>
    );
};

export default LoginSignup;