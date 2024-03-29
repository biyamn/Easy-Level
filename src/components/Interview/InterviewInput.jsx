import React from "react";
import { useState } from "react";
import styles from "./InterviewInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const InterviewInput = ({ onInterviewSubmit }) => {
  const options = [
    { value: "기술면접" },
    { value: "인성면접" },
    { value: "포트폴리오" },
    { value: "기타" },
  ];

  const [enteredInterview, setEnteredInterview] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleInterviewChange = (e) => {
    setEnteredInterview(e.target.value);
    setIsValid(true);
  };

  const handleInterviewSubmit = (e) => {
    e.preventDefault();
    if (enteredInterview.trim() === "") {
      setIsValid(false);
      setEnteredInterview("");
      return;
    }
    setIsValid(true);
    console.log(selectedOption, enteredInterview);
    onInterviewSubmit(selectedOption, enteredInterview);
    setEnteredInterview("");
    setSelectedOption(options[0].value);
  };

  const SelectType = () => {
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
      console.log(e.target.value);
    };

    return (
      <Box sx={{ minWidth: 70, mr: "10px", height: "45px" }}>
        <FormControl
          variant="filled"
          sx={{
            minWidth: 70,
            bgcolor: "#fff",
            borderRadius: "6px",
            marginBottom: "100px",
            color: "white",
            height: "45px",
          }}
          fullWidth
        >
          <InputLabel id="demo-simple-select-label">면접 분류</InputLabel>
          <Select
            sx={{ height: "50px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            label="Age"
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleInterviewSubmit}>
        <SelectType />
        <div>
          <input
            className={
              !isValid ? `${styles.input} ${styles.invalid}` : `${styles.input}`
            }
            type="text"
            value={enteredInterview}
            onChange={handleInterviewChange}
            placeholder="상세 종류 추가하기"
          />
          <button className={styles.button} type="submit">
            <FontAwesomeIcon icon={faPlus} color="#1a202c" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InterviewInput;
