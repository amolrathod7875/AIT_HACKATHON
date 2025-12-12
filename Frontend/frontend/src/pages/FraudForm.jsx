import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import "./FraudForm.css";

function FraudForm() {
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [merchant, setMerchant] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    // Backend expects 30 features, so we send dummy values except actual 1st value
    const features = [
      parseFloat(amount),
      0.5, -1.2, 3.4, 0.1, -0.2, 1.1, -0.5, 0.3, -0.1,
      0.2, -0.7, 2.1, 1.8, -1.4, 0.9, 0.6, -0.9, 3.0, 1.2,
      0.4, -0.8, 1.5, -1.1, 0.7, 0.0, 0.3, -0.2, 200.55, 0
    ]; // 30 values

    const response = await fetch("http://127.0.0.1:5000/predict-credit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features }),
    });

    const data = await response.json();
    setResult(data.prediction);
  };

  return (
    <div className="fraud-container">
      <Paper className="fraud-paper">
        <Typography variant="h5">Credit Card Fraud Detection</Typography>

        <TextField
          fullWidth
          label="Transaction Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <TextField
          fullWidth
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <TextField
          fullWidth
          label="Merchant"
          variant="outlined"
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          className="fraud-button"
          onClick={handlePredict}
        >
          Predict Fraud
        </Button>

        {result !== null && (
          <Typography style={{ marginTop: "20px", fontSize: "18px" }}>
            <b>Result:</b>{" "}
            {result === 1 ? "⚠ Fraud Detected" : "✔ No Fraud Detected"}
          </Typography>
        )}
      </Paper>
    </div>
  );
}

export default FraudForm;
