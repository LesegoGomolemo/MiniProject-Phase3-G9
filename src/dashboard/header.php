<!DOCTYPE HTML>
<html lang = "en">
    <head>
        <meta charset = "UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>FNB Reports</title>

        <link href="/assets/bootstrap.min.css" rel="stylesheet">
		<link href="/assets/style.css" rel="stylesheet">
		<link href="/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">

        <script src="/assets/js/jquery-1.12.4.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #01aaad;">
            <a class="navbar-brand" href="#">
                <img src="media/FNBLogo.png" width="150" alt="FNB Logo" class="img">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item" style="list-style-type: none !important;">
                        <div class="icon-text"><a href="#" class="dashboardLink nav-link"><i class="fa fa-tachometer fa-lg"></i></a></div>

                        <!--a href="#" class="dashboardLink nav-link"><i class="fa fa-home fa-2x"></i></a-->
                    </li>
                    <li class="nav-item pad-right" style="list-style-type: none !important;">
                        <a href="#" class="logLink nav-link"><i class="fa fa-list-ul fa-lg"></i></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="nav-padding"></div>

        <script type="text/javascript">
            $(document).ready( function() {
                $('.dashboardLink').click(btnDash);
                $('.logLink').click(btnLogs);
            });

            function btnLogs() {
                document.getElementById("dashBoard").style.display = 'none';
                document.getElementById("logs").style.display = 'block';
                $("#excel").toggleClass("disabled");
            }

            function btnDash() {
                document.getElementById("logs").style.display = 'none';
                document.getElementById("dashBoard").style.display = 'block';
                $("#excel").toggleClass("disabled");
            }
        </script>