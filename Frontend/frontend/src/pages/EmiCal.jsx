import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import "./EmiCal.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [interest, setInterest] = useState(8);
  const [tenure, setTenure] = useState(60);

  const P = amount;
  const R = interest / 12 / 100;
  const N = tenure;

  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalAmount = emi * N;
  const totalInterest = totalAmount - P;

  const chartData = {
    labels: ["Principal amount", "Interest amount"],
    datasets: [
      {
        data: [P, totalInterest],
        backgroundColor: ["#ff6b6bf7", "#8497e5ff"], // red & blue
        hoverBackgroundColor: ["#ff1f1f", "#244bff"],
        borderColor: "#fff",
        borderWidth: 4,
        cutout: "55%", // thicker
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 18,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="emi-page">
      <h2 className="heading">EMI Calculator</h2>

      <div className="emi-card">
        <div className="left-section">
          
          {/* Loan Amount */}
          <label className="label">Loan Amount</label>
          <div className="input-group">
            <span>₹</span>
            <input
              type="number"
              className="manual-input"
              value={amount}
              min="10000"
              max="5000000"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <input
            type="range"
            min="10000"
            max="5000000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="slider"
          />

          {/* Interest */}
          <label className="label">Rate of Interest (p.a.)</label>
          <div className="input-group">
            <input
              type="number"
              className="manual-input"
              value={interest}
              min="5"
              max="20"
              step="0.1"
              onChange={(e) => setInterest(Number(e.target.value))}
            />
            <span>%</span>
          </div>

          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interest}
            onChange={(e) => setInterest(Number(e.target.value))}
            className="slider"
          />

          {/* Tenure */}
          <label className="label">Loan Tenure (months)</label>
          <div className="input-group">
            <input
              type="number"
              className="manual-input"
              value={tenure}
              min="6"
              max="240"
              step="6"
              onChange={(e) => setTenure(Number(e.target.value))}
            />
            <span>Months</span>
          </div>

          <input
            type="range"
            min="6"
            max="240"
            step="6"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="slider"
          />

          {/* Result */}
          <div className="result-box">
            <p><strong>Monthly EMI:</strong> ₹{emi.toFixed(0)}</p>
            <p><strong>Principal amount:</strong> ₹{P.toLocaleString()}</p>
            <p><strong>Total interest:</strong> ₹{totalInterest.toFixed(0)}</p>
          </div>
        </div>

        {/* RIGHT SECTION CHART */}
        <div className="right-section chart-wrapper">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
