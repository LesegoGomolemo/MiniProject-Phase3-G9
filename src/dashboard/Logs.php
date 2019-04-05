<!DOCTYPE html>
<html>
<head>
	<title>LOG</title>
	<script src="jquery-3.3.1js"></script>
        <style>
	table, th{
	    border: 1px solid black;
	}
	</style>
	
</head>
<body>

	<form action="" method="">
		<table  align="center" style="width:80%;" class="table">
			<thead>
				<tr>
				<td>
					<select class="form-control" name="chosenLog" onchange="location = this.value;">
						<option value="">-Select Log Type-</option></a>
						<option value="NFC.php">NFC</option>
						<option value="OTP.php">OTP</option>
						<option value="Accounts.php">Accounts</option>
						<option value="Notification.php">Notification</option>
						<option value="ReportLog.php">Report</option>
						<option value="Simulation.php">Simulation</option>
						<option value="Facial.php">Facial Recognition</option>
						<option value="Information.php">Client Information</option>
						<option value="Authentication.php">Authentication</option>
					 </select>
				</td>
				</tr>
			</thead>
		</table>
	</form>

	<div class="container">
	  <h3>WELCOME TO NEXT-GEN SYSTEM LOGS</h3>
	  <h4> Getting Started:</h4>
	  <p>1. Use the Drop Down Menu above to select the required System Log </p> 
	  <p>2. Use the new Menu to specify (filter) required details from the log</p>
	  <p>-- Feel free to leave any of the options blank if they do not meet the required filter</p>
	  <p>3. Select the 'Submit Query' button to view the System Logs.</p>
	  <p>4. Alternatively, select a new system from the new Menu for a different System Log and repeat steps 2 to 3.</p>  
	</div>
</body>
</html>