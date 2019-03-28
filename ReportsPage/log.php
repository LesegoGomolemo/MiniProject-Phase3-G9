<!DOCTYPE html>
<html>
<head>
	<title>Log example</title>
	<style>
	table, th{
	    border: 1px solid black;
	}
	</style>
</head>
<body>
	<form action="log.php" method="post">
        <select name="chosenTable">
            <option value="SelectCategory">-Select Log-</option>
            <option value="NFC">NFC Log</option>
            <option value="OTP">OTP Log</option>
            <option value="ATM_Simulation">ATM Log</option>
			<option value="Client_Info">ATM Log</option>
			<option value="Client_Accounts">Client Accounts Log</option>
			<option value="Client_Notification">Notification Log</option>
			<option value="Facial_Recognition">Facial Recognition Log</option>
			<option value="Authentication">Authentication Log</option>
        </select>
        <input type='submit' />
    </form>
	<br/>
	<br/>
	<?php
		
		$conn = new mysqli("localhost", "root","","logsdb");
		
		if(!$conn){
			
			die("Connection failed: ".mysqli_connect_error());
		}
		
		//Get the chosen table
		
		function getOption($option) {
		  $option = trim($option);
		  $option = stripslashes($option);
		  $option = htmlspecialchars($option);
		  return $option;
		}
		
		$table = getOption($_POST["chosenTable"]);
		
		echo "<table>";
		switch($table)
		{
			case "NFC":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>ATM ID</th><th>NFC Type</th><th>Success?</th><th>Timestamp</th></tr>";
				break;
            case "OTP":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>Pin</th><th>Timestamp</th></tr>";
				break;
            case "ATM_Simulation":
				echo "<tr><th>Log ID</th><th>ATM ID</th><th>Client ID</th><th>Event Type</th><th>Event Description</th><th>Extra Details</th><th>Timestamp</th></tr>";
				break;
			case "Client_Info":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>ATM ID</th><th>Event</th><th>Timestamp</th></tr>";
				break;
			case "Client_Accounts":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>Account ID</th><th>Account Type</th><th>Event</th><th>Timestamp</th></tr>";
				break;
			case "Client_Notification":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>Notification Type</th><th>Content</th><th>Timestamp</th></tr>";
				break;
			case "Facial_Recognition":
				echo "<tr><th>Log ID</th><th>Client ID</th><th>ATM ID</th><th>Duration</th><th>Success?</th><th>Timestamp</th></tr>";
				break;
			case "Authentication":
				echo "<tr><th>Log ID</th><th>Log Type</th><th>Card Type</th><th>Card ID</th><th>Client ID</th><th>Description</th><th>Succes?</th><th>Timestamp</th></tr>";
				break;
			default:
				echo "<tr><th>Log Not Chosen</th></tr>";
				break;
		}
		
		
		$sql = "SELECT * FROM ".$table;
		$result = $conn->query($sql);

		
		if($result->num_rows > 0) {
			while ($row = $result->fetch_assoc())
			{
				echo "<tr>";
				foreach($row as $column)
				{
					echo "<td>{$column}</td>";
				}
				echo "</tr>";
				//echo "<tr><td>".$row["logID"] ."</td><td>". $row["clientID"] ."</td><td>". $row["pin"] ."</td><td>". $row["timestamp"]. "</td></tr>"; 
			}
			
			
			mysqli_free_result($result);
			}
		else{
			echo "0 results";
			}
		echo "</table>";
		
		$conn->close();
		?>



</body>
</html>

