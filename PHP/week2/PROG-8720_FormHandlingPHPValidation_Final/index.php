<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
		<title>Registration</title>
	</head>
    <body>
        <form class="form" action="register.php" method="POST" id=" registration_form">
            <div class="title">Welcome</div>
            <div class="subtitle">Let's create your account!</div>
            <div class="input-container ic1">
                <input id="firstname" name="firstname" class="input" type="text"/>
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
            </div>
            <div class="input-container ic2">
                <input id="lastname" name="lastname" class="input" type="text"/>
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
            </div>
            <div class="input-container ic2">
                <input id="email" name="email" class="input" type="text"/>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email </label>
            </div>
            <button type="text" class="submit">Register</button>
        </form>
    </body>
</html>