<?php

$todoList = [
    'Fare la spesa',
    'Fare la spesa',
    'Fare la spesa'
];

header('Content-Type: application/json');

echo json_decode($todoList);