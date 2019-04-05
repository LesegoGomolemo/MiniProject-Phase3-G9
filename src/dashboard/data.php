<?php include 'DBConnect.php'; ?>
<?php
    //QUERY FOR DAILY ACTIVITY FOR 7 DAYS
    $dataPoints1 = array();
    $count = 7; //7 days
    while($count > 0) {
        $query = "SELECT to_char(\"timestamp\", 'Day') as day, COUNT(a.*) FROM (SELECT * FROM public.\"Simulation\" WHERE \"timestamp\" BETWEEN CURRENT_DATE - INTERVAL '$count days' AND CURRENT_DATE - INTERVAL '". ($count - 1) ." days') AS a GROUP BY \"timestamp\"";
        $result = $db->query($query);
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $dataPoints1[] = array("y" => $row["count"], "label" => substr($row["day"], 0 - strlen($row["day"]), strlen($row["day"]) - 2));
        }
        $count--;
    }

    //QUERY FOR NUMBER OF EACH ACCOUNT TYPE
    $query = "SELECT \"accountType\", COUNT(*) as count FROM public.\"Accounts\" GROUP BY \"accountType\" ORDER BY count DESC";
    $result = $db->query($query);

    $dataPoints2 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints2[] = array("y" => $row["count"], "label" => substr($row["accountType"], 1 - strlen($row["accountType"]), strlen($row["accountType"]) - 2));
    }

    //QUERY FOR SUCCESS VS FAILURE
    $query = "SELECT bc.\"success\", COUNT(b.*) + COUNT(bc.*) + COUNT(d.*) AS count "
            ."FROM public.\"NFC\" bc "
	        ."Left JOIN public.\"Facial\" b ON bc.\"logID\"=b.\"logID\" "
	        ."Left JOIN public.\"OTP\" d ON b.\"logID\"=d.\"logID\" "
            ."GROUP BY bc.\"success\" ORDER BY count DESC";

    $result = $db->query($query);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints3[] = array("y" => $row["count"], "label" => substr($row["success"], 1 - strlen($row["success"]), strlen($row["success"]) - 2));
    }   


    //QUERY FOR POPULAR ACTIONS PERFORMED
    $query = "SELECT \"eventType\", COUNT(*) as count FROM public.\"Simulation\" GROUP BY \"eventType\" ORDER BY count ASC";
    $result = $db->query($query);

    $dataPoints4 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints4[] = array("y" => $row["count"], "label" => substr($row["eventType"], 1 - strlen($row["eventType"]), strlen($row["eventType"]) - 2));
    }


    //QUERY FOR NOTIFICATION TYPE
    $query = "SELECT \"notificationType\", COUNT(*) as count FROM public.\"Notification\" GROUP BY \"notificationType\" ORDER BY count ASC";
    $result = $db->query($query);

    $dataPoints5 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints5[] = array("y" => $row["count"], "label" => substr($row["notificationType"], 1 - strlen($row["notificationType"]), strlen($row["notificationType"]) - 2));
    }


    //QUERY FOR OPEN VS CLOSED ACCOUNTS
    $query = "SELECT \"eventType\", COUNT(*) as count FROM public.\"ReportLogs\" GROUP BY \"eventType\" ORDER BY count ASC";
    $result = $db->query($query);

    $dataPoints6 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints6[] = array("y" => $row["count"], "label" => substr($row["eventType"], 1 - strlen($row["eventType"]), strlen($row["eventType"]) - 2));
    }

    //QUERY FOR OPEN VS CLOSED ACCOUNTS
    $query = "SELECT \"eventType\", COUNT(*) as count FROM public.\"Accounts\" WHERE \"eventType\" = '{Close}' OR \"eventType\" = '{Open}' GROUP BY \"eventType\" ORDER BY count DESC";
    $result = $db->query($query);

    $dataPoints7 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints7[] = array("y" => $row["count"], "label" => substr($row["eventType"], 1 - strlen($row["eventType"]), strlen($row["eventType"]) - 2));
    }
?>