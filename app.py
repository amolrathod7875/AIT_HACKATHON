from flask import Flask, render_template, request
import pickle
import numpy as np
import os

app = Flask(__name__)

# --- Load Models Safely ---
# Checks if models exist to prevent crashing on startup
def load_model(path):
    if os.path.exists(path):
        return pickle.load(open(path, 'rb'))
    return None

model_fraud = load_model('models/credit_model.pkl')
model_loan = load_model('models/loan_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/loan')
def loan_page():
    return render_template('loan.html')

@app.route('/fraud')
def fraud_page():
    return render_template('fraud.html')

@app.route('/predict_loan', methods=['POST'])
def predict_loan():
    if not model_loan:
        return render_template('result.html', msg="Model not found!", status="error")
    
    try:
        # Extract features ensuring correct type conversion
        features = [
            int(request.form['no_of_dependents']),
            int(request.form['education']),
            int(request.form['self_employed']),
            float(request.form['income_annum']),
            float(request.form['loan_amount']),
            float(request.form['loan_term']),
            float(request.form['cibil_score']),
            float(request.form['residential_assets_value']),
            float(request.form['commercial_assets_value']),
            float(request.form['luxury_assets_value']),
            float(request.form['bank_asset_value'])
        ]
        
        final_features = np.array([features])
        prediction = model_loan.predict(final_features)
        
        result_text = "APPROVED" if prediction[0] == 1 else "REJECTED"
        status_class = "success" if prediction[0] == 1 else "danger"
        
        return render_template('result.html', msg=f"Loan Status: {result_text}", status=status_class, details="Based on the applicant's CIBIL score and asset evaluation.")

    except Exception as e:
        return render_template('result.html', msg=f"Error: {str(e)}", status="warning")

@app.route('/predict_fraud', methods=['POST'])
def predict_fraud():
    if not model_fraud:
        return render_template('result.html', msg="Model not found!", status="error")
    
    try:
        # Simple inputs for Time & Amount
        time = float(request.form['time'])
        amount = float(request.form['amount'])
        
        # Simulated V-features (since we can't ask user for 28 PCA values)
        # In a real app, these come from the transaction backend, not user input.
        # We fill them with zeros for this demo.
        v_features = [0.0] * 28 
        
        final_features = np.array([[time] + v_features + [amount]])
        prediction = model_fraud.predict(final_features)
        
        result_text = "FRAUD DETECTED" if prediction[0] == 1 else "SAFE TRANSACTION"
        status_class = "danger" if prediction[0] == 1 else "success"
        
        return render_template('result.html', msg=result_text, status=status_class, details=f"Transaction Amount: ${amount}")

    except Exception as e:
        return render_template('result.html', msg=f"Error: {str(e)}", status="warning")

if __name__ == "__main__":
    app.run(debug=True)