## 📂 Dataset

The machine learning model in this project is trained on the **Credit Card Fraud Detection** dataset.

> **Note:** Due to GitHub's file size limits (>100MB), the raw dataset is not included in this repository.

### How to Set Up the Data:
1. **Download** the dataset from Kaggle:
   👉 [Credit Card Fraud Detection Dataset](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)
2. **Unzip** the file after downloading.
3. **Place** the `creditcard.csv` file in the main folder of this project (or inside a `data/` folder if your code expects it there).
# VeriFin 🚀

![Hackathon](https://img.shields.io/badge/Hackathon-Name-orange) ![Status](https://img.shields.io/badge/Status-Prototype-blue) ![Python](https://img.shields.io/badge/Python-3.8+-yellow) ![License](https://img.shields.io/badge/License-MIT-green)

> **Empowering Financial Security through AI-Driven Insights.**

## 📖 Overview

**VeriFin** is a comprehensive FinTech solution designed to tackle two of the most critical challenges in the banking sector: **Fraud Prevention** and **Risk Assessment**. Built during **Innerve X**, this web application leverages machine learning models to provide real-time predictions for credit card transactions and loan eligibility.

Our goal is to assist financial institutions in minimizing losses and automating the decision-making process with high accuracy.

---

## 🔑 Key Features

### 1. 🛡️ Credit Card Fraud Detection
* **Real-time Analysis:** Instantly analyzes transaction details (amount, location, time, etc.).
* **Anomaly Detection:** Uses machine learning algorithms to flag suspicious activities.
* **Visual Reports:** Displays probability scores and risk factors for flagged transactions.

### 2. 💰 Loan Approval Prediction
* **Automated Eligibility:** Users input financial details (income, credit score, loan amount) to check approval odds.
* **Bias Reduction:** Standardized algorithms reduce human bias in the lending process.
* **Instant Feedback:** Provides immediate "Approved" or "Rejected" status with reasoning.

### 3. 📊 Interactive Dashboard
* User-friendly interface for customers and bank admins.
* Data visualization charts for transaction history and loan statistics.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js / HTML5 / CSS3 |
| **Backend** | Flask / Django / Node.js |
| **ML Models** | Scikit-Learn, Pandas, NumPy, XGBoost |

---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
* Python 3.8+
* Node.js (if using React)
* Git

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/amolrathod7875/AIT_HACKATHON.git
    cd AIT_HACKATHON
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    # Create virtual environment (optional but recommended)
    python -m venv venv
    source venv/bin/activate # On Windows use `venv\Scripts\activate`
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Run the server
    python app.py
    ```

3.  **Frontend Setup** (If applicable)
    ```bash
    cd frontend
    npm install
    npm start
    ```

4.  **Access the App**
    * Open your browser and navigate to `http://localhost:3000` (or the port specified in your console).

---

## 🧠 Model Insights

### Fraud Detection
We utilized the **Credit Card Fraud Detection and Loan Approval Prediction Dataset** dataset. 
* **Algorithm:** Logistic Regression.
* **Accuracy:** Achieved ~98% accuracy on the test set.
* **Handling Imbalance:** Used SMOTE (Synthetic Minority Over-sampling Technique) to handle class imbalance.

### Loan Prediction
* **Features Used:** No_of_dependents, Education, Self_employed, Income_annum, Loan_amount, Loan_term, Cibil_score, Residential_assets_value, Commercial_assets_value, Luxury_assets_value, Bank_asset_value, Loan_status.
* **Accuracy:** Achieved ~98% accuracy on the test set.
* **Algorithm:** XGBClassifier.

---

## 📸 Screenshots

| Landing Page | Fraud Detection | Loan Approval | Expense Tracker | Bill Remainder |
| :---: | :---: | :---: | :---: |:---: |
| ![Landing](https://via.placeholder.com/300x150?text=Landing+Page) | ![Fraud](https://via.placeholder.com/300x150?text=Fraud+Detection) | ![Loan](https://via.placeholder.com/300x150?text=Loan+Prediction) |![Expenses](https://via.placeholder.com/300x150?text=Expense+Tracker) |![Remainder](https://via.placeholder.com/300x150?text=Bill+Remainder) |

*(Note: Replace the placeholder links above with actual paths to your screenshots, e.g., `./assets/screenshot1.png`)*

---

## 🔮 Future Scope

* **Blockchain Integration:** To create an immutable ledger for transaction logs.
* **KYC Automation:** Integrating OCR to scan and verify user documents automatically.
* **Mobile App:** Developing a cross-platform mobile application using Flutter/React Native.

---

## 👥 The Team

* **Amol Rathod** - [Role, Ml Enginner]
* **Om Mane** - [Role, ML Engineer]
* **Abhisek Kallimath** - [Role,UI/UX Designer]
* **Adesh Phadtare** - [Role, Web Developer]

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.