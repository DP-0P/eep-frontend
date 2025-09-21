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
            className={styles.textField}
            required
            id="outlined-required"
            label="Employee ID"
            sx={{ width: 300}}/>
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ width: 300}}
        />
        <Button variant="contained"
        sx={{ width: 300}}>Login</Button>
      </div>
    );
};

export default LoginSignup;