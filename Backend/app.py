import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

app = Flask(__name__)
CORS(app)

# ----------------------------
# Load credit model (FIXED PATH)
# ----------------------------
credit_model_path = "../Credit_Card_Fraud_Detection/credit_model.pkl"
credit_model = joblib.load(credit_model_path)

# ----------------------------
# Flask routes
# ----------------------------
@app.route("/")
def home():
    return "Flask API is running!"

@app.route("/predict-credit", methods=["POST"])
def predict_credit():
    data = request.json
    features = data["features"]   # expecting list of numbers
    prediction = credit_model.predict([features])[0]
    return jsonify({"prediction": int(prediction)})

# ----------------------------
# Run Flask
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
