import { Button, TextField, Paper, Typography } from "@mui/material";

function Login() {
  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:"120px" }}>
      <Paper elevation={4} style={{ padding:"40px", width:"350px" }}>
        <Typography variant="h5" style={{ marginBottom:"20px" }}>
          Login
        </Typography>

        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Button variant="contained" fullWidth style={{ marginTop:"20px" }}>
          Login
        </Button>
      </Paper>
    </div>
  );
}

export default Login;
