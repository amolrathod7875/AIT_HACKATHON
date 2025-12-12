import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding:"30px" }}>
      <Typography variant="h4">Dashboard</Typography>

      <div style={{ marginTop:"30px", display:"flex", gap:"20px" }}>
        <Paper style={{ padding:"20px", width:"250px" }}>
          <Typography variant="h6">Credit Card Fraud Detection</Typography>
          <Link to="/fraud"><Button variant="outlined" style={{ marginTop:"10px" }}>Open</Button></Link>
        </Paper>

        <Paper style={{ padding:"20px", width:"250px" }}>
          <Typography variant="h6">Loan Approval Prediction</Typography>
          <Link to="/loan"><Button variant="outlined" style={{ marginTop:"10px" }}>Open</Button></Link>
        </Paper>

        <Paper style={{ padding:"20px", width:"250px" }}>
          <Typography variant="h6">Chatbot</Typography>
          <Link to="/chatbot"><Button variant="outlined" style={{ marginTop:"10px" }}>Open</Button></Link>
        </Paper>
      </div>
    </div>
  );
}

export default Dashboard;
