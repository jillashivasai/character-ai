import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useState } from "react";
import MuiSidebar from "../MuiSidebar";
import "./newcharacter.css";

function InputWithWordCount({ label, placeholder, maxWords }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.split(" ").length <= maxWords) {
      setInputValue(newValue);
    }
  };

  return (
    <div className="input-group">
      <label>{label}</label>
      <div className="input-container-with-count">
        <input
          type="text"
          className="input-container"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <span className="word-count">{`${
          inputValue.split(" ").length
        }/${maxWords}`}</span>
      </div>
    </div>
  );
}

export default function NewCharacter() {
  return (
    <>
      <MuiSidebar />
      <div className="flex-container">
    <div className="top-margin-container">
          <div className="character-name">
            <BorderColorIcon
              sx={{ fontSize: 22, marginRight: 0.5, marginBottom: 0.5 }}
            />
          </div>
          <div>
            <InputWithWordCount
              label="Character name"
              placeholder="eg: Albert Einstein"
              maxWords={20}
            />
            <InputWithWordCount
              label="Tagline"
              placeholder="eg: Genius Physicist"
              maxWords={20}
            />
            <InputWithWordCount
              label="Description"
              placeholder="eg: Theory of Relativity"
              maxWords={20}
              style={{innerHeight:100}}
            />
            <InputWithWordCount
              label="Greeting"
              placeholder="eg: Hello, I'm Albert Einstein"
              maxWords={20}
            />
            <div className="input-group to-column">
              <label htmlFor="more-options">More options</label>
              <select id="more-options" className="width">
                <option>More options</option>
              </select>
            </div>
            <div className="input-group to-column">
              <label htmlFor="visibility">Visibility</label>
              <select id="visibility" className="width">
                <option>Visibility</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
