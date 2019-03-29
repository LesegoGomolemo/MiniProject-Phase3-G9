<?php
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "myDB";

  $logType = document.getElementById('trader_cdlmorningdojistarype');
  $period = document.getElementById('period');
  $eventType = document.getElementById('eventType');
  $notificationType = document.getElementById('notificationType');
  $accountType = document.getElementById('accountType');
  $eventType = document.getElementById('eventType');
  $atmID = document.getElementById('atmID');
  $success = document.getElementById('success');
  $cardType = document.getElementById('cardType');

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  if($logtype == "Simulation") {
    if($period.isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND (eventType = $eventType OR atmID = @atmID)";
    else
      $sql = "SELECT * FROM $logType WHERE eventType = $eventType OR atmID = @atmID";
  }

  if($logtype == "Notification") {
    if($period.isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND (notificationType = $notificationType)";
    else
      $sql = "SELECT * FROM $logType WHERE notificationType = $notificationType";
  }

  if($logtype == "Accounts") {
    if($period.isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND (accountType = $accountType OR event = $eventType)";
    else
      $sql = "SELECT * FROM $logType WHERE accountType = $accountType OR event = $eventType";
  }

  if($logtype == "Information") {
    if($period.isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND event = $eventType";
    else
      $sql = "SELECT * FROM $logType WHERE event = $eventType";
  }

  if($logtype == "OTP") {
    if(period.isset()
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) OR (cardType = $cardType OR success = $success)";
    else
      $sql = "SELECT * FROM $logType WHERE cardType = $cardType OR success = $success";
  }

  if($logtype == "NFC") {
    if($period.isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND (atmID = $atmID OR nfcType = $nfcType OR success = $success)";
    else
      $sql = "SELECT * FROM $logType WHERE atmID = $atmID OR nfcType = $nfcType OR success = $success";
  }

  if($logtype == "Facial") {
    if(isset())
      $sql = "SELECT * FROM $logType WHERE (timestamp BETWEEN GETDATE() AND $period) AND (atmID = $atmID OR cardType = $cardType OR success = $success)";
    else
      $sql = "SELECT * FROM $logType WHERE atmID = $atmID OR cardType = $cardType OR success = $success";
  }

  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      if($logType == "Simulation") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "Notification") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "Accounts") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "Information") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "OTP") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "NFC") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
      if($logType == "Facial") {
        while($row = $result->fetch_assoc()) {
          // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";  // how to output
        }
      }
  } else {
      echo "0 results";
  }
  $conn->close();
