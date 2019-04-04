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
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-light" style="background-color: #01aaad;">
            <a class="navbar-brand" href="#">
                <img src="media/FNBLogo.png" width="150" alt="FNB Logo" class="img">
            </a>
            <a class="dashboardLink"><i class="fa fa-home fa-2x"></i></a>
            <a class="logLink"><i class="fa fa-list-ul fa-2x"></i></a>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-share-alt fa-2x"></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#">Test</a></li>
                </ul>
            </li>
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
        }

        function btnDash() {
            document.getElementById("logs").style.display = 'none';
            document.getElementById("dashBoard").style.display = 'block';
        }
        </script>