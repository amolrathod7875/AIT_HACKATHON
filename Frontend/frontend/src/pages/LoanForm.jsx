import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import "./LoanForm.css";

function LoanForm() {
  const [income, setIncome] = useState("");
  const [credit, setCredit] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!income || !credit || !amount) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/predict-loan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          income: Number(income),
          credit_score: Number(credit),
          loan_amount: Number(amount),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setResult(data.loan_approval);


    } catch (err) {
      alert("Backend Error! Check Flask server.");
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <Paper className="loan-paper">
        <Typography variant="h5">Loan Approval Prediction</Typography>

        <TextField fullWidth label="Applicant Income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <TextField fullWidth label="Credit Score"
          type="number"
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
        />

        <TextField fullWidth label="Loan Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          className="loan-button"
          disabled={loading}
          onClick={handleCheck}
        >
          {loading ? "Checking..." : "Check Eligibility"}
        </Button>

        {result !== null && (
          <Typography style={{ marginTop: "15px", fontWeight: "600" }}>
            {result === 1 ? "✔ Loan Approved" : "❌ Loan Not Approved"}
          </Typography>
        )}
      </Paper>
    </div>
  );
}

export default LoanForm;



