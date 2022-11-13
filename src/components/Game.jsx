import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { alphabets, secret } from "../constants";
import frame1 from "../assets/img/frame1.svg";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
export const Game = ({ handleClickLetter, textField, showFeedback }) => {
  return (
    <Box
      className="image-cover"
      sx={{
        height: "100vh",
        padding: "50px",
      }}
    >
      <div>
        <div>
          {alphabets.map((item, i) => (
            <Button
              variant="contained"
              onClick={() => handleClickLetter(item, i)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          {secret.map((item, i) => (
            <TextField
              key={item}
              sx={{ width: "7ch", marginRight: "10px" }}
              id="outlined-size-small"
              value={textField[i]}
              disabled
              size="small"
            />
          ))}
        </div>
        <div>
          {showFeedback === "false" ? (
            <SentimentVeryDissatisfiedIcon color="error" />
          ) : showFeedback === "true" ? (
            <SentimentSatisfiedAltIcon color="success" />
          ) : null}
        </div>
      </div>
    </Box>
  );
};
