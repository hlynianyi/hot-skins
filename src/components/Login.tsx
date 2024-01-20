import { useState } from 'react';
import { LogoIconSvg, TitleIconSvg, EyeSvg } from '../assets/login_component';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <section className="login-container">
      <LogoIconSvg />
      <TitleIconSvg />
      <div className="login_inputs-container">
        <label htmlFor="Search" className="login_input-container">
          <input
            className="login_input"
            id="login"
            type="text"
            placeholder="Your email"
          />
        </label>
        <label htmlFor="password" className="login_input-container">
          <input
            className="login_input"
            id="password"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            type="button"
            className="login_password-show"
            onClick={togglePasswordVisibility}
          >
            <EyeSvg />
          </button>
        </label>
        <button className="login-button">Login</button>
      </div>
    </section>
  );
};

export default Login;
