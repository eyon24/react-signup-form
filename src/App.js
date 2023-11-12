import "./App.css";
import { useState } from "react";
import { ReactSVG } from "react-svg";
function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const paragraph =
    "See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";

  const handleOnChange = (e) => {
    switch (e.target.id) {
      case "firstName":
        setUser({ ...user, firstName: e.target.value });
        break;
      case "lastName":
        setUser({ ...user, lastName: e.target.value });
        break;
      case "email":
        setUser({ ...user, email: e.target.value });
        break;
      case "password":
        setUser({ ...user, password: e.target.value });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <main className="App">
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
      <div className="user">
        <div className="user__trial">
          <span>
            <span>Try it free 7 days then </span>$20/mo. thereafter
          </span>
        </div>
        <form onSubmit={handleSubmit} action="none" className="user__form">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleOnChange}
          />
          <div className="user__form--error">
            <ReactSVG src="icon-error.svg" className="user__form--errorIcon" />
            <span className="user__form--errorMessage">
              First Name cannot be empty
            </span>
          </div>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleOnChange}
          />
          <div className="user__form--error">
            <ReactSVG src="icon-error.svg" className="user__form--errorIcon" />
            <span className="user__form--errorMessage">
              Last Name cannot be empty
            </span>
          </div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleOnChange}
          />
          <div className="user__form--error">
            <ReactSVG src="icon-error.svg" className="user__form--errorIcon" />
            <span className="user__form--errorMessage">
              Looks like this is not an email
            </span>
          </div>
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleOnChange}
          />
          <div className="user__form--error">
            <ReactSVG src="icon-error.svg" className="user__form--errorIcon" />
            <span className="user__form--errorMessage">
              Password cannot be empty
            </span>
          </div>
          <button className="user__form--button" type="submit">
            CLAIM YOUR FREE TRIAL
          </button>
          <span className="user__form--terms">
            By clicking the button, you are agreeing to our{" "}
            <a>Terms and Services</a>
          </span>
        </form>
      </div>
    </main>
  );
}

export default App;
