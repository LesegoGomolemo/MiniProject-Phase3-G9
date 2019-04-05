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

		</div>
	<br/>


<?php include 'DBConnect.php'; ?>
<?php
	/*$db = new mysqli("localhost", "root","","logsdb");
		
		if(!$db){
			die("Connection failed: ".mysqli_connect_error());
		}
*/
        
        
	function getOption($option) {
		  $option = trim($option);
		  $option = stripslashes($option);
		  $option = htmlspecialchars($option);
		  return $option;
		}
	
	$period = getOption($_POST["chosenPeriod"]);
	$cardID = (int)$_POST["cardID"];
	$cardType = getOption($_POST["chosenCardType"]);
	$clientID = (int)$_POST["clientID"];
	
	$success = getOption($_POST["isSuccess"]);
	
	
	//logID, clientID, atmID, nfcType, success, "timestamp"
	//SELECT "logID", "clientID", "atmID", "nfcType", success, "timestamp"
        //FROM public."NFC"
        
	//session_start();
	//$table = $_SESSION['table1'];
	
	$sql = "SELECT * FROM public.\"Authentication\"";

	if($period == "SelectPeriod" && $cardID == "" && $cardType == "CardType" && $clientID == "" && $success == "Success")
	{
	
	}
	else {
		$sql .= " WHERE";
	}

	
	if($period && $period != "SelectPeriod")
	{
		switch($period)
		{
			case "1Day":
				//$sql+= "WHERE DATEDIFF(DAY,  DATEADD(day, -1, timestamp), GETDATE()) AND";
				$sql .= " timestamp >= (CURRENT_TIMESTAMP - INTERVAL '1 Day')";
				break;
			case "3Days":
				$sql .= " timestamp >= (CURRENT_TIMESTAMP - INTERVAL '3 Day')";
				break;
			case "1Week":
				$sql .= " timestamp >= (CURRENT_TIMESTAMP - INTERVAL '7 Day')";
				break;
			case "1Month":
				$sql .= " timestamp >= (CURRENT_TIMESTAMP - INTERVAL '1 Month')";
				break;
		}

		if($cardID) 
			$sql .= " AND \"cardID\" = ".$cardID;
		if($cardType =! "CardType")
			$sql .= " AND \"cardType\" = '{".$cardType."}'";
		if($clientID) 
			$sql .= " AND \"clientID\" = ".$clientID;
		if($success && $success != "Success")
			$sql .= " AND success = ".$success;

	}
	else if($cardID) 
	{
		$sql .= " \"cardID\" = ".$cardID;
		if($cardType =! "CardType")
			$sql .= " AND \"cardType\" = '{".$cardType."}'";
		if($clientID) 
			$sql .= " AND \"clientID\" = ".$clientID;
		if($success && $success != "Success")
			$sql .= " AND success = ".$success;
	}
	else if($cardType && $cardType != "CardType")
	{
		$sql .= " \"cardType\" = '{".$cardType."}'";
		if($clientID) 
			$sql .= " AND \"clientID\" = ".$clientID;
		if($success && $success != "Success")
			$sql .= " AND success = ".$success;
	}
	else if($clientID) 
	{
		$sql .= " \"clientID\" = ".$clientID;
		if($success && $success != "Success")
			$sql .= " AND success = ".$success;
	}
	else if($success && $success != "Success")
	{
		$sql .= " success = ".$success;
	}

	$sql .= " ORDER BY \"logID\" ASC";

	$result = $db->query($sql);
                
                /*echo "<a href=\"#\" id=\"nfc\" onClick=\"fnExcelReport()\">download</a>";
                echo "<br/>";

				

                echo "<table align:\"center\" name:\"nfcTable\" id:\"nfcTable\">";
				echo "<thead>
						<tr><th>Log ID</th><th>Card ID</th><th>Card Type</th><th>Client ID</th><th>Description</th><th>Success?</th><th>Timestamp</th></tr>
					</thead>";
                echo "<tbody style=\"height:200px; overflow:scroll\">";
				echo "<div>";
				*/
?>
                <!--
				<a href="#" id="nfc" onClick="fnExcelReport()">download</a>
				-->
                <br/>

				<br>
				<table align="center" style="width:30%;" class="table">
					<thead>
						<tr>
						<!--<td>
							<a href="#" id="test" class="btn btn-info" onClick="fnExcelReport()" role="button">Download Excel</a>
						</td>-->
						<td><a href="#" id="test"  onClick="fnExcelReport()"><input class="form-control" type='submit' style="background-color:lightsteelblue" value="Download Excel"/></a></td>
						</tr>
					</thead>
				</table>
				<br>
				<br>
				

                <table  align="center" style="width:80%;" class="table table-sm table-bordered table-condensed " name="logTable" id="logTable" >
					<thead class="thead-light">
						<tr>
							<th scope="col">Log ID</th>
							<th scope="col">Card ID</th>
							<th scope="col">Card Type</th>
							<th scope="col">Client ID</th>
							<th scope="col">Description</th>
							<th scope="col">Success?</th>
							<th scope="col">Timestamp</th>
						</tr>
					</thead>
					<tbody>
				
<?php				

				
		if($result->rowCount() > 0) 
		{
			
			
			while ($row = $result->fetch(PDO::FETCH_ASSOC))
				{
					echo "<tr>";
					foreach($row as $column)
					{
						echo "<td>{$column}</td>";
					}
					echo "</tr>";
					//echo "<tr><td>".$row["logID"] ."</td><td>". $row["clientID"] ."</td><td>". $row["pin"] ."</td><td>". $row["timestamp"]. "</td></tr>"; 
				}
			
			
			
			
		}
		else
		{
			echo "<tr><td colspan=\"7\">0 Results Found</td></tr>";
		}

		echo "</div>";
		echo "</tbody>";
		echo "</table>";
		
        
                
?>
        <script>
                function fnExcelReport() {

                    

                    var tab_text = "<html xmlns:x=\"urn:schemas-microsoft-com:office:excel\">";
                    tab_text = tab_text + "<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>";

                    tab_text = tab_text + "<x:Name>Test Sheet</x:Name>";

                    tab_text = tab_text + "<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>";
                    tab_text = tab_text + "</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>";

                    tab_text = tab_text + "<table border=\"1px\">";
                    tab_text = tab_text + $("#logTable").html();
                    tab_text = tab_text + "</table></body></html>";

                    var data_type = "data:application/vnd.ms-excel";

                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");

                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        if (window.navigator.msSaveBlob) {
                            var blob = new Blob([tab_text], {
                                type: "application/csv;charset=utf-8;"
                            });
                            navigator.msSaveBlob(blob, "Authentication Log Table.xls");
                        }
                    } else {
                        $("#test").attr("href", data_type + ", " + encodeURIComponent(tab_text));
                        $("#test").attr("download", "Authentication Log Table.xls");
                    }

                }
            </script> 

<?php include 'footer.php';?>
