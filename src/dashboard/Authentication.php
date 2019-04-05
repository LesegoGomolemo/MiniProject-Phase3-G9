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
						<option value="Authentication.php">Authentication</option>
					 </select>
				</td>
				</tr>
			</thead>
		</table> 
		
		<br>
	<br>
	 <h1 align="center" class="font-weight-bold">AUTHENTICATION LOG</h1> 
	 <br>
	 <br>

	<form action="Authentication2.php" method="post">
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
				
				<td><input class="form-control" type="text" name="cardID" value="" placeholder="-Insert Card ID -"></td>
				<td>
					<select class="form-control" name="chosenCardType">
						<option value="CardType">-Select Card Type-</option>
						<option value="Student">Student</option>
						<option value="ATM">ATM</option>
						<option value="Cheque">Cheque</option>
						<option value="Credit">Credit</option>
					</select>
				</td>
				<td><input class="form-control" type="text" name="clientID" value="" placeholder="- Insert CLient ID -"></td>
				
				<td>
					<select class="form-control" name="isSuccess">
						<option value="Success">-Success-</option>
						<option value="false">False</option>
						<option value="true">True</option>
					</select>
				</td>
				<td><input class="form-control" type='submit' style="background-color:lightsteelblue"/></td>
			  </tr>
			</thead>
		</table>
	</form>  
<?php include 'footer.php';?>