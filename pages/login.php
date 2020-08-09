<?php require('template/header.php')?>

<!-- Page Content -->
<div class="main-content container py-5">

	<div class="row my-5">
		<div class="col-sm-12 text-center">
			<h1 class="tok-text-uppercase tok-text-bold">Sign In to your Account</h1>
		</div>
	</div>

	<div class="row my-5">
		<div class="col-sm-6 text-right">
			<button class="btn tok-btn-solid blue my-2 mx-2 my-sm-0" type="submit">
				<span class="btn-label"><i class="fab fa-facebook align-middle"></i>
				SIGN IN WITH FACEBOOK
			</button>
		</div>
		<div class="col-sm-6 text-left">
			<button class="btn tok-btn-solid black my-2 mx-2 my-sm-0" type="submit">
				<span class="btn-label"><i class="fab fa-google align-middle"></i>
				SIGN IN WITH GOOGLE
			</button>
		</div>
	</div>

	<hr/>

	<div class="row mt-5">
		<div class="col-sm-12 text-center">
			<p>Registered with your email?</p>
			<input type="text" class="tok-input" size="40" id="" placeholder="YOUR EMAIL"/>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-sm-12 text-center">
			<button class="btn tok-btn-solid white my-2 mx-2 my-sm-0" type="submit">
				<span class="btn-label"><i class="fas fa-envelope align-middle"></i>
				SIGN UP WITH YOUR EMAIL
			</button>
		</div>
	</div>

</div>


<?php require('template/footer.php')?>