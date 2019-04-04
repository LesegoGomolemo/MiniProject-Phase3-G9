<?php include 'DBLogin.php'; ?>
<?php

    $dsn = "pgsql:"
    . "host=$host;"
    . "dbname=$dbname;"
    . "user=$user;"
    . "port=$port;"
    . "sslmode=require;"
    . "password=$password";

    $db = new PDO($dsn);
?>