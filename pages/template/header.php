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

	<script>
		var TxtRotate = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 5) || 1000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			var that = this;
			var delta = 150 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function () {
				that.tick();
			}, delta);
		};


		window.onload = function () {
			var elements = document.getElementsByClassName('txt-rotate');
			console.log("window.onload -> elements", elements)
			for (var i = 0; i < elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-rotate');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtRotate(elements[i], JSON.parse(toRotate), period);
				}
			}
			// INJECT CSS
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
			document.body.appendChild(css);
		};
	</script>
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