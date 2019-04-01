
<div class="holder-div div-big">
    <div class="chart-crop"><div id="chart-big" class="chart"></div></div>
</div>

<div class="small-div-parent div-big">
<div id="subDiv1" class="holder-div div-sml">
        <div class="chart-crop"><div id="chart-sml-1" class="chart"></div></div>
    </div>

    <div id="subDiv2" class="holder-div div-sml">
        <div class="chart-crop"><div id="chart-sml-2" class="chart"></div></div>
    </div>

    <div id="subDiv3" class="holder-div div-sml">
        <div class="chart-crop"><div id="chart-sml-3" class="chart"></div></div>
    </div>
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

    $(function () {
        var chart = new CanvasJS.Chart("chart-sml-1", {
            theme: "light1",
            animationEnabled: true,
            title: {
                text: "Number of each account type"
            },
            data: [
            {
                type: "pie",                
                dataPoints: <?php echo json_encode($dataPoints2, JSON_NUMERIC_CHECK); ?>
            }
            ]
        });
        chart.render();
    });

    $(function () {
        var chart = new CanvasJS.Chart("chart-sml-2", {
            theme: "light1",
            animationEnabled: true,
            title: {
                text: "Total Successful VS Failed logins"
            },
            data: [
            {
                type: "doughnut",                
                dataPoints: <?php echo json_encode($dataPoints3, JSON_NUMERIC_CHECK); ?>
            }
            ]
        });
        chart.render();
    });

    $(function () {
        var chart = new CanvasJS.Chart("chart-sml-3", {
            theme: "light1",
            animationEnabled: true,
            title: {
                text: "Popular actions performed"
            },
            data: [
            {
                type: "bar",                
                dataPoints: <?php echo json_encode($dataPoints4, JSON_NUMERIC_CHECK); ?>
            }
            ]
        });
        chart.render();
    });
</script>

