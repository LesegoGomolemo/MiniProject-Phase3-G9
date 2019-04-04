<?php include 'header.php';?>
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
	<form action="Simulation2.php" method="post">
		<table align="center" style="width:80%;" class="table">
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
				<td><input class="form-control" type="text" name="clientID" value="" placeholder="- Insert CLient ID -"></td>
				<td><input class="form-control" type="text" name="atmID" value="" placeholder="- Insert ATM ID -"></td>
				
				
				<td>
					<select class="form-control" name="chosenEventType">
						<option value="EventType">-Select Event Type-</option>
						<option value="Withdrawal">Withdrawal</option>
						<option value="Deposit">Deposit</option>
						<option value="Balance">Balance</option>
						<option value="Transfer">Transfer</option>
					</select>
				</td>
				
				<td><input class="form-control" type='submit' style="background-color:lightsteelblue"/></td>
			  </tr>
			</thead>
		</table>
	</form>  
<?php include 'footer.php';?>