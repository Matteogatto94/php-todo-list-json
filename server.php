<?php

$tasks = [
    "HTML",
    "CSS",
    "Responsive Design",
    "Javascript",
    "PHP",
    "Laravel"
];

header('Content-type: application/json');
echo json_encode($tasks);
