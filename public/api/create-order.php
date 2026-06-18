<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ⚠️ REPLACE THESE WITH YOUR ACTUAL KEYS FROM RAZORPAY DASHBOARD ⚠️
$keyId = "rzp_test_Srf6wbDOo54wdu";
$keySecret = "pLah1yKHWwZAGJWDwzTbOuzh";

// Read the incoming JSON data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!isset($input['amount'])) {
    http_response_code(400);
    echo json_encode(["error" => "Amount is required"]);
    exit();
}

// Ensure the amount is a valid float/integer and convert to paise
$amount = floatval($input['amount']);
$amountInPaise = intval(round($amount * 100));

// Set up the request to Razorpay Orders API
$url = "https://api.razorpay.com/v1/orders";
$data = [
    "amount" => $amountInPaise,
    "currency" => "INR",
    "receipt" => "rcpt_" . uniqid()
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERPWD, $keyId . ":" . $keySecret);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($error) {
    http_response_code(500);
    echo json_encode(["error" => "Curl error: " . $error]);
    exit();
}

http_response_code($httpcode);
echo $response;
