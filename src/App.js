import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const paragraph =
    "See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";

  const USER_INFO = ["First Name", "Last Name", "Email", "Password"];

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
        <form action="none" className="user__form">
          <input type="text" placeholder="First Name" value={user.firstName} />
          <input type="text" placeholder="Last Name" value={user.lastName} />
          <input type="text" placeholder="Email" value={user.email} />
          <input type="text" placeholder="Password" value={user.password} />
          <button className="user__form--button">CLAIM YOUR FREE TRIAL</button>
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
