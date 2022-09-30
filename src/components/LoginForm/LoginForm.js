import React, { useRef, useState } from "react";
import myAPI from "../../modules/API";
import { switchLoggedIn, toggleLoginForm } from "../../actions";
import "./LoginForm.css";
import { useDispatch } from "react-redux";

function LoginForm() {
    const myAPIModule = myAPI;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const wrongCombinationErrorRef = useRef(null);

    const handleLoginClick = async () => {
        try {
            const isLoggedIn = await myAPIModule.login(email, password);
            if (isLoggedIn) {
                dispatch(switchLoggedIn());
                dispatch(toggleLoginForm());
            }
        } catch (err) {
            wrongCombinationErrorRef.current.className =
                "wrong-combination-error-msg";
        }
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = event => {
        setPassword(String(event.target.value));
    };

    return (
        <form spellCheck="false" className="login-form">
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleEmailChange}
                    className="input"
                    id="email"
                    type="email"
                    autoComplete="off"
                />
            </div>

            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                    onChange={handlePasswordChange}
                    className="input"
                    id="password"
                    type="password"
                    autoComplete="off"
                />
            </div>

            <div className="button-container">
                <button
                    onClick={handleLoginClick}
                    className="login-form-login-btn"
                    type="button"
                >
                    Login
                </button>
            </div>
            <span
                ref={wrongCombinationErrorRef}
                className="wrong-combination-error-msg hidden"
            >
                Username/password combination is wrong!
            </span>
        </form>
    );
}

export default LoginForm;
