import time
import requests
from datetime import datetime

# URLs to check
url1 = "https://caring-minds.onrender.com/"
url2 = "https://caring-minds-backend.onrender.com/match_caregivers"

data = {
  "availability": "Full Time",
  "behaviouralSymptoms": ["Mental decline"],
  "careType": ["Medication Management", "Daily Living Support"],
  "dementiaStage": "Moderate",
  "dementiaType": ["Alzheimer's Disease", "Vascular Dementia"],
  "emotionalSymptoms": ["Agitation"],
  "gender": "Do not wish to disclose",
  "genderPreference": "Female",
  "languagePreference": ["English"],
  "languageSymptoms": [],
  "lifestyleChanges": [],
  "movementSymptoms": ["Muscle stiffness or rigidity"],
  "otherSymptoms": []
}

headers = {"Content-Type": "application/json"}

# Target stop date and time
STOP_DATETIME = datetime(2024, 12, 25, 12, 0, 0)

def check_urls():
  try:
    response1 = requests.get(url1)
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {url1} - Status: {response1.status_code}")
  except Exception as e:
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {url1} - Error: {e}")

  try:
    response2 = requests.post(url2, headers=headers, json=data)
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {url2} - Status: {response2.status_code}")
  except Exception as e:
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {url2} - Error: {e}")

if __name__ == "__main__":
  while True:
    current_datetime = datetime.now()
    
    # Check if the current date and time match the stop condition
    if current_datetime >= STOP_DATETIME:
      print(f"[{current_datetime.strftime('%Y-%m-%d %H:%M:%S')}] Stopping the script as the stop time is reached.")
      break

    check_urls()
    time.sleep(300)  # wait for 5 minutes

## Run the Script in background
# nohup python3 -u check_urls.py > /home/Students/kgv34/CS5326/check_urls.log 2>&1 &

## Verify the Script is Running
# ps aux | grep check_urls.py

## View Logs
# tail -f check_urls.log

## Stop the Script
# kill -9 <PID>

