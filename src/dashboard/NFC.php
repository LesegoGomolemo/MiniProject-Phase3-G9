<?php include 'header.php';?>
	 <!--table, th{
	    border: 1px solid black;
	}-->
    
    
       

    
    
       

	<form action="NFC2.php" method="post">
		<table class="table">
			<thead>
			  <tr>
				<td>
					<select name="chosenPeriod">
						<option value="SelectPeriod">-Select Period-</option>
						<option value="1Day">1 Day</option>
						<option value="3Days">3 Days</option>
						<option value="1Week">1 Week</option>
						<option value="1Month">1 Month</option>
					 </select>
				</td>
				<td>Insert CLient ID: <input type="text" name="clientID" value=""></td>
				<td>Insert ATM ID: <input type="text" name="atmID" value=""></td>
				<td>
					<select name="chosenNFCType">
						<option value="NFCType">-Select NFC Type-</option>
						<option value="Phone">Phone</option>
						<option value="ATM">ATM</option>
					</select>
				</td>
				<td>
					<select name="isSuccess">
						<option value="Success">-Success-</option>
						<option value="false">False</option>
						<option value="true">True</option>
					</select>
				</td>
				<td><input type='submit' /></td>
			  </tr>
			</thead>
		</table>
	</form>  
<?php include 'footer.php';?>