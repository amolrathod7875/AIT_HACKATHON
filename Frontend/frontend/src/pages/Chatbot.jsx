import { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // initialize navigate

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div>
        <Typography variant="h4">Chatbot</Typography>

        

        <Paper className="chatbot-paper">
          {messages.map((m, i) => (
            <p key={i}>
              <b>You:</b> <span>{m}</span>
            </p>
          ))}
        </Paper>

        <div className="chatbot-input">
          <TextField
            fullWidth
            label="Type a message..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            className="chatbot-button"
            onClick={sendMessage}
          >
            Send
          </Button>
          {/* Back Button */}
        <Button
          variant="outlined"
          style={{ marginBottom: "10px" }}
          onClick={() => navigate("/")} // redirect to home
        >
          Back
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
