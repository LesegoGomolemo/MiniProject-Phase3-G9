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
        <script type="text/javascript" src="script.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
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
                        <div class="icon-text"><a href="#" class="dashboardLink nav-link"><i class="fa fa-home fa-lg"></i></a></div>

                        <!--a href="#" class="dashboardLink nav-link"><i class="fa fa-home fa-2x"></i></a-->
                    </li>
                    <li class="nav-item" style="list-style-type: none !important;">
                        <a href="#" class="logLink nav-link"><i class="fa fa-list-ul fa-lg"></i></a>
                    </li>
                    <li class="nav-item dropdown pad-right">
                        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-share-alt fa-lg"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" id="pdf" href="#">Download PDF</a>
                            <a class="dropdown-item disabled" id="excel" href="#">Download Excel</a>
                        </div>
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