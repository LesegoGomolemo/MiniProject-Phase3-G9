<?php include 'DBConnect.php'; ?>
<?php
    $dataPoints1 = array(
        array("y" => 6, "label" => "Apple"),
        array("y" => 4, "label" => "Mango"),
        array("y" => 5, "label" => "Orange"),
        array("y" => 7, "label" => "Banana"),
        array("y" => 4, "label" => "Pineapple"),
        array("y" => 6, "label" => "Pears"),
        array("y" => 7, "label" => "Grapes"),
        array("y" => 5, "label" => "Lychee"),
        array("y" => 4, "label" => "Jackfruit")
    );


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
        $dataPoints3[] = array("y" => $row["count"], "label" => substr($row["success"], 1 - strlen($row["success"]), strlen($row["success"]) - 2));;
    }   


    //QUERY FOR POPULAR ACTIONS PERFORMED
    $query = "SELECT \"eventType\", COUNT(*) as count FROM public.\"Simulation\" GROUP BY \"eventType\" ORDER BY count ASC";
    $result = $db->query($query);

    $dataPoints4 = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $dataPoints4[] = array("y" => $row["count"], "label" => substr($row["eventType"], 1 - strlen($row["eventType"]), strlen($row["eventType"]) - 2));
    }
?>