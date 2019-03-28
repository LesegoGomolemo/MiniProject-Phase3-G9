//----------------------------------------------------------------------------------------------------------------------
// toggle logs and graphs
//----------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    $('#logs').click(function() {
      $('.chartRow').hide();
      $('.logTable').show();
    });
});

$(document).ready(function(){
    $('#graphics').click(function() {
      $('.logTable').hide();
      $('.chartRow').show();
    });
});

window.onload = function () {

  //----------------------------------------------------------------------------------------------------------------------
  // load line graph
  //----------------------------------------------------------------------------------------------------------------------
  var limit = 7;    //increase number of dataPoints by increasing the limit
  var y = 10000;
  var data = [];
  var dataSeries = { type: "line" };
  var dataPoints = [];
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var count = 0;
  for (var i = 0; i < limit; i += 1) {
    y += Math.round(Math.random() * 10 - 5);
    dataPoints.push({
      x: i,
      y: y, label: days[count]
    });
    count++;
  }
  dataSeries.dataPoints = dataPoints;
  data.push(dataSeries);

  var options = {
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: "Daily Users - Past 7 Days"
    },
    axisY: {
      includeZero: false
    },
    data: data
  };

  $("#DailyUsers").CanvasJSChart(options);

  //----------------------------------------------------------------------------------------------------------------------
  // load pie chart
  //----------------------------------------------------------------------------------------------------------------------
  var options = {
    title: {
        text: "Authentication Types"
    },
    subtitles: [{
      text: "As of November, 2019"
    }],
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 0,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 48.36, label: "Facial Recognition" },
        { y: 26.85, label: "Biometrics" },
        { y: 1.49, label: "One Time PIN" },
        { y: 6.98, label: "PIN" }
      ]
    }]
  };
  $("#AuthenticationTypes").CanvasJSChart(options);

  //----------------------------------------------------------------------------------------------------------------------
  // load drilldown chart
  //----------------------------------------------------------------------------------------------------------------------
  var totalVisitors = 883000;
  var visitorsData = {
  "Successful vs Failed Authentication": [{
  click: visitorsChartDrilldownHandler,
  cursor: "pointer",
  explodeOnClick: false,
  innerRadius: "75%",
  legendMarkerType: "square",
  name: "Successful vs Failed Authentication",
  radius: "100%",
  showInLegend: true,
  startAngle: 90,
  type: "doughnut",
  dataPoints: [
    { y: 519960, name: "Success", color: "#E7823A" },
    { y: 363040, name: "Fail", color: "#546BC1" }
  ]
  }],
  "Success": [{
  color: "#E7823A",
  name: "Success",
  type: "column",
  xValueFormatString: "MMM YYYY",
  dataPoints: [
    { x: new Date("1 Jan 2019"), y: 33000 },
    { x: new Date("1 Feb 2019"), y: 35960 },
    { x: new Date("1 Mar 2019"), y: 42160 },
    { x: new Date("1 Apr 2019"), y: 42240 },
    { x: new Date("1 May 2019"), y: 43200 },
    { x: new Date("1 Jun 2019"), y: 40600 },
    { x: new Date("1 Jul 2019"), y: 42560 },
    { x: new Date("1 Aug 2019"), y: 44280 },
    { x: new Date("1 Sep 2019"), y: 44800 },
    { x: new Date("1 Oct 2019"), y: 48720 },
    { x: new Date("1 Nov 2019"), y: 50840 },
    { x: new Date("1 Dec 2019"), y: 51600 }
  ]
  }],
  "Fail": [{
  color: "#546BC1",
  name: "Fail",
  type: "column",
  xValueFormatString: "MMM YYYY",
  dataPoints: [
    { x: new Date("1 Jan 2019"), y: 22000 },
    { x: new Date("1 Feb 2019"), y: 26040 },
    { x: new Date("1 Mar 2019"), y: 25840 },
    { x: new Date("1 Apr 2019"), y: 23760 },
    { x: new Date("1 May 2019"), y: 28800 },
    { x: new Date("1 Jun 2019"), y: 29400 },
    { x: new Date("1 Jul 2019"), y: 33440 },
    { x: new Date("1 Aug 2019"), y: 37720 },
    { x: new Date("1 Sep 2019"), y: 35200 },
    { x: new Date("1 Oct 2019"), y: 35280 },
    { x: new Date("1 Nov 2019"), y: 31160 },
    { x: new Date("1 Dec 2019"), y: 34400 }
  ]
  }]
  };

  var newVSReturningVisitorsOptions = {
  animationEnabled: true,
  theme: "light2",
  title: {
  text: "Successful vs Failed Authentication"
  },
  subtitles: [{
  text: "Click on Any Segment to Drilldown",
  backgroundColor: "#2eacd1",
  fontSize: 16,
  fontColor: "white",
  padding: 5
  }],
  legend: {
  fontFamily: "calibri",
  fontSize: 14,
  itemTextFormatter: function (e) {
    return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
  }
  },
  data: []
  };

  var visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    axisX: {
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2"
  },
  axisY: {
    gridThickness: 0,
    includeZero: false,
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2",
    lineThickness: 1
  },
  data: []
  };

  newVSReturningVisitorsOptions.data = visitorsData["Successful vs Failed Authentication"];
  $("#SuccessFail").CanvasJSChart(newVSReturningVisitorsOptions);

  function visitorsChartDrilldownHandler(e) {
    e.chart.options = visitorsDrilldownedChartOptions;
    e.chart.options.data = visitorsData[e.dataPoint.name];
    e.chart.options.title = { text: e.dataPoint.name }
    e.chart.render();
    $("#backButton").toggleClass("invisible");
  }

  $("#backButton").click(function() {
    $(this).toggleClass("invisible");
    newVSReturningVisitorsOptions.data = visitorsData["Successful vs Failed Authentication"];
    $("#SuccessFail").CanvasJSChart(newVSReturningVisitorsOptions);
  });

  //----------------------------------------------------------------------------------------------------------------------
  // load bar graph
  //----------------------------------------------------------------------------------------------------------------------

  var options = {
	animationEnabled: true,
	title: {
		text: "Popular Actions",
		fontColor: "Peru"
	},
	axisY: {
		tickThickness: 0,
		lineThickness: 0,
		valueFormatString: " ",
		gridThickness: 0
	},
	axisX: {
		tickThickness: 0,
		lineThickness: 0,
		labelFontSize: 18,
		labelFontColor: "Peru"
	},
	data: [{
		indexLabelFontSize: 26,
		toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
		indexLabelPlacement: "inside",
		indexLabelFontColor: "white",
		indexLabelFontWeight: 600,
		indexLabelFontFamily: "Verdana",
		color: "#62C9C3",
		type: "bar",
		dataPoints: [
			{ y: 21, label: "21%", indexLabel: "Balances" },
			{ y: 25, label: "25%", indexLabel: "Withdrawal" },
			{ y: 33, label: "33%", indexLabel: "Deposit" },
			{ y: 36, label: "36%", indexLabel: "Transfers" },
			{ y: 42, label: "42%", indexLabel: "Payments" },
		]
	}]
};

$("#PopularActions").CanvasJSChart(options);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
