
<div class="holder-div div-big">
    <div class="chart-crop"><div id="chart-big" class="chart"></div></div>
</div>

<?php include 'data.php'; ?>

<script type="text/javascript">

$(function () {
        var chart = new CanvasJS.Chart("chart-big", {
            theme: "light1",
            animationEnabled: true,
            title: {
                text: "Daily activity for the past 7 days"
            },
            data: [
            {
                type: "line",                
                dataPoints: <?php echo json_encode($dataPoints1, JSON_NUMERIC_CHECK); ?>
            }
            ]
        });
        chart.render();
    });
</script>


