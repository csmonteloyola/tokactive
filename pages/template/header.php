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
	<link href="<?php echo style();?>custom.css" rel="stylesheet">

</head>

<body>

<!-- Navigation -->
<nav class="tok-nav navbar navbar-expand-lg static-top">
	<div class="container">
		<a class="navbar-brand" href="#">
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
			<button class="btn tok-btn-nav my-2 mx-2 my-sm-0" type="submit">SIGN IN</button>
			<button class="btn tok-btn-nav my-2 mx-2 my-sm-0" type="submit">REGISTER</button>
		</div>
	</div>
</nav>

<div class="tok-banner jumbotron jumbotron-fluid">
	<div class="container">
		<div class="row">
			<div class="col-lg-5">
				<p class="tok-banner-subtitle">Welcome to</p>
				<h1 class="tok-banner-title">TokActiv</h1>
				<p class="tok-banner-text">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>

				<input type="text" class="form-control my-4" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">

				<div class="row">
					<div class="col-lg-6 my-3">
						<button class="tok-btn-outline-rounded btn-block" type="submit">SIGN IN</button>
					</div>
					<div class="col-lg-6 my-3">
						<button class="tok-btn-outline-rounded tok-btn-outline-rounded-highlight btn-block" type="submit">REGISTER</button>
					</div>
				</div>

			</div>
			<div class="col-lg-7" align="right">

			</div>
		</div>

	</div>
</div>