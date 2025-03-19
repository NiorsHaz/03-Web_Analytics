<?php
// Fetch data from Google Analytics API (pseudo-code)
$analyticsData = [
    'visitors' => 1200,
    'bounceRate' => '25%',
    'topPages' => ['/', '/services', '/contact']
];

header('Content-Type: application/json');
echo json_encode($analyticsData);
?>