from flask import Flask, request, jsonify
from flask_cors import CORS

# Import the cosine algo function
from SimilarityAlgo import match_caregivers
app = Flask(__name__)
CORS(app)

# API route to match caregivers based on carerecipient requirements
@app.route('/match_caregivers', methods=['POST'])
def run_match_caregivers():
  care_recipient_data = request.json
  result = match_caregivers(care_recipient_data)
  return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)