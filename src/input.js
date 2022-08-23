import { useState } from "react";
import { useNavigate } from "react-router-dom";
import githubLogo from "./github-logo.svg";

import "./styles/input.css";

function Input() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/user", { state: { userName: name } });
  };

  return (
    <div className="input-container">
      <img src={githubLogo} alt="github-logo" />
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Github Username"
          type="text"
          name="Github Username"
          required
        />
      </form>
    </div>
  );
}

export default Input;
