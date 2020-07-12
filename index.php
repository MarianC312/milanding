 <!DOCTYPE html>
<html lang="en">
<?php
    const HOST = "localhost", USERNAME = "root", PASSWORD = "", DB = "milanding";

    $db = new mysqli(HOST, USERNAME, PASSWORD, DB);
    $data = $db->prepare("SELECT * FROM data");
    //$result = $data->fetch(PDO::FETCH_ASSOC);
    //print_r($result);
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link href="./css/style.css" rel="stylesheet">
    <!-- Cargar React. -->
    <!-- Nota: cuando se despliegue, reemplazar "development.js" con "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- Babel para JSX -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <!-- Íconos. -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <title>My landing page</title>
</head>

<body>
    <div id="app"></div>
</body>

<script type="text/babel" src="./app/main.jsx"></script>

</html>