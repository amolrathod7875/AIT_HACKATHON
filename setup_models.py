import pandas as pd
import numpy as np
import pickle
import os
from sklearn.linear_model import LogisticRegression
from xgboost import XGBClassifier

# Create 'models' directory if it doesn't exist
if not os.path.exists('models'):
    os.makedirs('models')

print("🔄 Generating models...")

# --- 1. Generate Dummy Fraud Detection Model (Logistic Regression) ---
# The app expects 30 features: Time, V1-V28, Amount
print("   - Training Fraud Model...")
X_fraud = np.random.rand(100, 30)  # 100 samples, 30 features
y_fraud = np.random.randint(0, 2, 100) # Binary target (0 or 1)

model_fraud = LogisticRegression()
model_fraud.fit(X_fraud, y_fraud)

with open('models/credit_model.pkl', 'wb') as f:
    pickle.dump(model_fraud, f)
print("     ✅ credit_model.pkl saved.")

# --- 2. Generate Dummy Loan Approval Model (XGBoost) ---
# The app expects 11 features:
# dependents, education, self_employed, income, loan_amt, loan_term, cibil, 
# res_assets, comm_assets, lux_assets, bank_assets
print("   - Training Loan Model...")
X_loan = np.random.rand(100, 11)
y_loan = np.random.randint(0, 2, 100)

model_loan = XGBClassifier(eval_metric='logloss')
model_loan.fit(X_loan, y_loan)

with open('models/loan_model.pkl', 'wb') as f:
    pickle.dump(model_loan, f)
print("     ✅ loan_model.pkl saved.")

print("\n🎉 Success! You can now run 'python app.py'")