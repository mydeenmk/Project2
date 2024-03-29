// CURL Command to verify phone number

// curl -X POST "https://verify.twilio.com/v2/Services/VAc3bd6fd3a489cd7f31bca92385800155/Verifications" \
//   --data-urlencode "To=+919790550158" \
//   --data-urlencode "Channel=sms" \
//   -u "AC4f5f38aca4ca5ff4ad7e560e2dc14ba7:71171031dedec9290004e7a221b71fb0"

// echo
// echo -n "Please enter the OTP:"
// read OTP_CODE

// curl -X POST "https://verify.twilio.com/v2/Services/VAc3bd6fd3a489cd7f31bca92385800155/VerificationCheck" \
//   --data-urlencode "To=+919790550158" \
//   --data-urlencode "Code=$OTP_CODE" \
//   -u "AC4f5f38aca4ca5ff4ad7e560e2dc14ba7:71171031dedec9290004e7a221b71fb0"


//   +12055767129