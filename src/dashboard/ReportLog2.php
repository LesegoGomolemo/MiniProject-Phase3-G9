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
	
	$eventType = getOption($_POST["chosenEventType"]);
	
	
	
	//logID, clientID, atmID, nfcType, success, "timestamp"
	//SELECT "logID", "clientID", "atmID", "nfcType", success, "timestamp"
        //FROM public."NFC"
        
	//session_start();
	//$table = $_SESSION['table1'];
	
	$sql = "SELECT * FROM public.\"ReportLogs\"";

	if($period == "SelectPeriod" && $eventType == "EventType")
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

		
		if($eventType && $eventType != "EventType")
		{
			if($eventType == "Facial Recognition" || $eventType == "Download Excel" )
			{
				$sql .= " AND \"eventType\" = '{\"";
				$sql .= $eventType;
				$sql .= "\"}'";
				}
			else
				$sql .= " AND \"eventType\" = '{".$eventType."}'";
		}

	}
	else if($eventType && $eventType != "EventType")
	{
		$sql .= " \"eventType\" = '{".$eventType."}'";
		
	}

	$sql .= " ORDER BY \"logID\" ASC";

	$result = $db->query($sql);

	/*
                
                echo "<a href=\"#\" id=\"nfc\" onClick=\"fnExcelReport()\">download</a>";
                echo "<br/>";

				

                echo "<table align:\"center\" name:\"nfcTable\" id:\"nfcTable\">";
				echo "<thead>
						<tr><th>Log ID</th><th>Event Type</th><th>Timestamp</th></tr>
					</thead>";
                echo "<tbody style=\"height:200px; overflow:scroll\">";
				echo "<div>";
		*/		
?>
                <!--
				<a href="#" id="nfc" onClick="fnExcelReport()">download</a>
				-->
                <br/>

				

                <table  align="center" style="width:80%;" class="table table-sm table-bordered table-condensed "  >
					<thead class="thead-light">
						<tr>
							<th scope="col">Log ID</th>
							<th scope="col">Event Type</th>
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
			echo "<tr><td colspan=\"3\">0 Results Found</td></tr>";
		}

		echo "</div>";
		echo "</tbody>";
		echo "</table>";
		
        echo '<script>
                function fnExcelReport() {

                    windows.alert("just");

                    var tab_text = "<html xmlns:x=\"urn:schemas-microsoft-com:office:excel\">";
                    tab_text = tab_text + "<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>";

                    tab_text = tab_text + "<x:Name>Test Sheet</x:Name>";

                    tab_text = tab_text + "<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>";
                    tab_text = tab_text + "</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>";

                    tab_text = tab_text + "<table border=\"1px\">";
                    tab_text = tab_text + $("#nfcTable").html();
                    tab_text = tab_text + "</table></body></html>";

                    var data_type = "data:application/vnd.ms-excel";

                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");

                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        if (window.navigator.msSaveBlob) {
                            var blob = new Blob([tab_text], {
                                type: "application/csv;charset=utf-8;"
                            });
                            navigator.msSaveBlob(blob, "NFC Table.xlsx");
                        }
                    } else {
                        $("#test").attr("href", data_type + ", " + encodeURIComponent(tab_text));
                        $("#test").attr("download", "NFC Table.xlsx");
                    }

                }
            </script> ';
                
		


?>
<?php include 'footer.php';?>