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

</body>
</html>
