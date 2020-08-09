<?php require('../helpers/utility_helper.php')?>
<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>TokActiv</title>

	<!-- Bootstrap core CSS -->
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900' rel='stylesheet'>
	<link href="<?php echo style();?>bootstrap/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo style();?>custom.css?<?=rand()?>" rel="stylesheet">
	<link href="<?php echo style();?>fa/css/all.css?<?=rand()?>" rel="stylesheet">
	<link href="<?php echo script();?>custom.js">
</head>

<body>

<!-- Navigation -->
<nav class="tok-nav navbar navbar-expand-lg static-top">
	<div class="container">
		<a class="navbar-brand" href="/pages/index.php">
			<img src="<?php echo images()?>logo-hp.png" class="nav-logo" />
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="tok-nav-item list-unstyled list-inline ml-auto pt-3">
				<li class="list-inline-item">
					<a class="tok-nav-link" href="#">Community</a>
				</li>
				<li class="list-inline-item">
					<a class="tok-nav-link" href="#">Support</a>
				</li>
			</ul>
			<a href="/pages/login.php" class="btn tok-btn-nav my-2 mx-2 my-sm-0" type="submit">SIGN IN</a>
			<a href="/pages/register.php" class="btn tok-btn-nav my-2 mx-2 my-sm-0" type="submit">REGISTER</a>
		</div>

	</div>
</nav>