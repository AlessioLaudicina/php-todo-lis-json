<?php

$todoList = [
    'Fare la spesa',
    'Fare il bucato',
    'Palestra',
    'Calcetto',
    'Cena'
];

if (isset($_POST['todoItem'])) {
    $todoList[] = $_POST['todoItem'];
}
header('Content-Type: application/json');
echo json_encode($todoList);