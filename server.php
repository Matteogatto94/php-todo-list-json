<?php

$tasks_string = file_get_contents('tasks.json');
$tasks_array = json_decode($tasks_string);

if (isset($_POST['newTask'])) {

    $task = $_POST['newTask'];
    array_push($tasks_array, $task);

    $json_tasks = json_encode($tasks_array);
    file_put_contents('tasks.json', $json_tasks);
}


header('Content-type: application/json');
echo json_encode($tasks_array);
