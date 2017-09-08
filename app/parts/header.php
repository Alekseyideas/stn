<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Stn</title>
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
    <link rel="manifest" href="img/favicons/manifest.json">
    <link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="img/favicons/favicon.ico">
    <meta name="msapplication-config" content="img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="classes/bootstrap.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="plugins/scroll/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.min.css">
    <link rel="stylesheet" href="css/stylesheet.css?<?php echo rand()?>">

</head>
<body>

<header>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                
                <div class="logo-tel">
                    <div class="d-flex align-items-end">
                        <div class="menu-logo">
                            <img src="img/logo.svg" alt="logo">
                        </div>
                        <a href="tel:+77273330999" class="headerPhone">+7  (727)  333  0  999</a>
                    </div>
                </div>
            </div>
            <div id="main-menu">
                <div class="m-close-menu"><i class="fa fa-times" aria-hidden="true"></i></div>
               <nav>
                   <ul class="list-unstyled d-flex align-items-end justify-content-center" id="menu">
                        <li data-menuanchor="firstPage"><a href="#firstPage"></a></li>
                       <li data-menuanchor="secondPage">
                           <a href="#secondPage" class="menu_link main_link">О КОМПАНИИ</a>
                       </li>
                       <li  data-menuanchor="3rdPage">
                           <a href="#3rdPage" class="menu_link main_link">Портфолио</a>

                       </li>
                       <li data-menuanchor="4thPage">
                           <a href="#4thPage" class="main_link">Партнерам</a>
                       </li>
                       <li  data-menuanchor="5thPage">
                           <a href="#5thPage" class="main_link">ВендОрам</a>

                       </li>
                       <li data-menuanchor="6thPage">
                           <a href="#6thPage" class="menu_link main_link" >ПРЕСС-ЦЕНТР</a>
                       </li>
                       <li>
                           <a href="#" class="menu_link" target="_blank">Каталог</a>
                       </li>
                       <li data-menuanchor="lastPage">
                           <a href="#lastPage" class="menu_link main_link" >ВХОД НА ПОРТАЛ</a>
                       </li>
                   </ul>
               </nav>
                <div class="m-lang">

                    <ul class="d-flex justify-content-between list-unstyled">
                        <li><a href="#">eng</a></li>
                        <li><a href="#">kz</a></li>
                        <li><a href="#" class="active">руc</a></li>
                    </ul>
                </div>
            </div>
            <div class="col" id="lang">
                <ul class="d-flex justify-content-end list-unstyled">
                    <li><a href="#">eng</a></li>
                    <li><a href="#">kz</a></li>
                    <li><a href="#" class="active">руc</a></li>
                </ul>
            </div>
            <div class="col" id="mobile-menu">
               <button id="btn_menu"><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>

        </div>

    </div>
</header>

<main id="fullpage">

