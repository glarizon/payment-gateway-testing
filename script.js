function paymentprocess() {
    var options = {
        "key": "rzp_test_vHFpSSXMP7lyVZ", // Enter the Key ID generated from the Dashboard
        "amount": "300000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Glarizon",
        "description": "Testing gateway",
        "image": "https://example.com/your_logo",
        // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            savetoDB(response);
        },
        "prefill": {
            "name": "glarizon",
            "email": "glarizon@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "glarizon tower"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var propay = new Razorpay(options);
    propay.open();
};

function savetoDB(response) {
    console.log(response)
    firebase.database().ref('payment').set({
        payment_id: response.razorpay_payment_id
    });
}



const firebaseConfig = {
    apiKey: "AIzaSyDWpqDpeh37hz8qBsKqfj7EKhz-hL646n0",
    authDomain: "payment-testing-3e5a3.firebaseapp.com",
    projectId: "payment-testing-3e5a3",
    storageBucket: "payment-testing-3e5a3.appspot.com",
    messagingSenderId: "863455544681",
    appId: "1:863455544681:web:264c53b904403ec55969f8",
    measurementId: "G-R506TFBL4R"
  };