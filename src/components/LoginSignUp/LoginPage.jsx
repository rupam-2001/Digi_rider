import React, { useState, useEffect } from 'react';
import '../LoginSignUp/LoginPage.css'
const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsOtpSent(false);
      setTimer(10);
    }

    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Logic to send OTP (not implemented in this example)
    setIsOtpSent(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Logic to verify OTP (not implemented in this example)
    console.log('OTP submitted:', otp);
  };

  return (
    <div>
      <h2>Login</h2>
      <div className='loginForm-div'>
      {isOtpSent ? (
        <>
          <p>OTP sent to {phoneNumber}. Enter OTP below:</p>
          <form onSubmit={handleOtpSubmit}>
            <label>
              OTP:
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit OTP</button>
          </form>
          <p>Resend OTP in {timer} seconds</p>
        </>
      ) : (
        <form onSubmit={handlePhoneNumberSubmit}>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send OTP</button>
        </form>
      )}
      </div>
      <p>
        Don't have an account? <a href="/login-signup">Signup</a>
      </p>
    </div>
  );
};

export default LoginPage;
