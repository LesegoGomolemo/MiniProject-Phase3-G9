<?php include 'header.php';?>
	 <!--table, th{
	    border: 1px solid black;
	}-->
    
    <table align="center" style="width:80%;" class="table">
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
					 </select>
				</td>
				</tr>
			</thead>
		</table>
       

	<form action="ReportLog2.php" method="post">
		<table align="center" style="width:90%;" class="table">
			<thead>
			  <tr>
				<td>
					<select class="form-control" name="chosenPeriod">
						<option value="SelectPeriod">-Select Period-</option>
						<option value="1Day">1 Day</option>
						<option value="3Days">3 Days</option>
						<option value="1Week">1 Week</option>
						<option value="1Month">1 Month</option>
					 </select>
				</td>
				<td>
					<select class="form-control" name="chosenEventType">
						<option value="EventType">-Select Event Type-</option>
						<option value="Search">Search</option>
						<option value="">Refresh</option>
						<option value="Download Excel">Refresh</option>
						<option value="Authentication">Search</option>
						<option value="Facial Recognition">Facial Recognition</option>
						<option value="OTP">OTP</option>
						<option value="NFC">NFC</option>
						<option value="Simulation">Simulation</option>
						<option value="Information">Client Information</option>
					</select>
				</td>
				<td><input class="form-control" type='submit' style="background-color:lightsteelblue"/></td>
			  </tr>
			</thead>
		</table>
	</form>   
<?php include 'footer.php';?>