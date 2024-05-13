import styles from "./RegisterPage.module.css";
import { useState, useRef } from "react";

function RegisterPage({ returnToLogin }) {
    const nameRef = useRef();
    const loginRef = useRef();
    const passwdRef = useRef();
    const passwdChkRef = useRef();

    function registerUser() {
        const passwd = passwdRef.current.value
        const login = loginRef.current.value
        const name = nameRef.current.value
        requestPost("/v1/user/register", {"name": name, "username": login, "passwd": passwd}, loggedIn)
    }

    function handleSubmit() {
        if (passwdRef.current.value != passwdChkRef.current.value) {
            alert('Podane hasla nie sa takie same!')
            return
        }

        //registerUser()

        alert('pomyslnie utworzono uzytkownika')
        returnToLogin()       
    }

    return (
        <>
        <div className={styles.contReg}>
            <form className={styles.regForm} onSubmit={(e) => {e.preventDefault()}}>
                <h2 className={styles.logH2}><b>Register</b></h2><br/>
                <input type="text" className={styles.logInput} id="name" ref={nameRef} placeholder="Name"/><br/>
                <input type="text" className={styles.logInput} id="login" ref={loginRef} placeholder="Login"/><br/>
                <input type="password" className={styles.logInput} id="passwd" ref={passwdRef} placeholder="Password"/><br/>
                <input type="password" className={styles.logInput} id="passwdChk" ref={passwdChkRef} placeholder="Repeat Password"/><br/>
                <input type="button" className={styles.logInput} id="return" value="go to login" onClick={returnToLogin}/>
                <input type="submit" className={styles.logInput} id="submit" value="Register" onClick={handleSubmit}/>
            </form>
        </div>
        </>
    ) ;
}

export default RegisterPage;