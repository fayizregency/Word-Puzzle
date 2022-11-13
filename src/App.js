import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { alphabets, secret } from "./constants";
import wrongSound from "./assets/sounds/wrong_tune.mp3";
import correctSound from "./assets/sounds/correct_answer.mp3";
import useSound from "use-sound";
import containerImg from "./assets/img/main-bg.png";
import { Landing } from "./components/Landing";
import { Game } from "./components/Game";
import { WinAlert } from "./components/WinAlert";
import "./App.css";
function App() {
  const [activeKey, setActiveKey] = useState(0);
  const [textField, setTextField] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [playWrongSound] = useSound(wrongSound);
  const [playCorrectSound] = useSound(correctSound);
  const [section, setSection] = useState("landing");

  const handleClickLetter = (letter, idx) => {
    if (secret[activeKey] === letter) {
      playCorrectSound();
      setTextField([...textField, letter]);
      setActiveKey(activeKey + 1);
      handleFeedback(true);
    } else {
      playWrongSound();
      handleFeedback(false);
    }
  };

  const handleFeedback = (state) => {
    setFeedback(state ? "true" : "false");
    setTimeout(() => {
      setFeedback("");
    }, 500);
  };

  useEffect(() => {
    if (secret.toString() === textField.toString()) {
      setTextField([]);
      setActiveKey(0);
      setSection("won");
    }
  }, [textField]);
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        className="App"
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          maxWidth: "700px",
          backgroundImage: `url(${containerImg})`,
        }}
      >
        {section === "landing" ? (
          <Landing startGame={() => setSection("game")} />
        ) : section === "game" ? (
          <Game
            textField={textField}
            handleClickLetter={handleClickLetter}
            showFeedback={showFeedback}
          />
        ) : section === "won" ? (
          <WinAlert />
        ) : null}
      </Container>
    </>
  );
}

export default App;
