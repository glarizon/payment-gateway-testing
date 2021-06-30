function paymentprocess() {
    var options = {
        "key": "rzp_test_vHFpSSXMP7lyVZ", // Enter the Key ID generated from the Dashboard
        "amount": "300000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Glarizon",
        "description": "Testing gateway",
        "image": "https://example.com/your_logo",
        // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "handler": function (response){
            
        // },
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
