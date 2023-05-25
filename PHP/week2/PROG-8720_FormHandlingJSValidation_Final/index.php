<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
		<title>Registration</title>
	</head>
    <body>
        <form class="form" action="register.php" method="POST" id=" registration_form" onsubmit="return validateForm()">
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
            <input type="hidden" id="device_type" name="device_type">
            <button type="text" class="submit">Register</button>
        </form>
    </body>
</html>

<script>
    window.onload = function(){
        document.getElementById("device_type").value = get_device_type;
    }
    function validateForm(){
        
        var first_name = document.getElementById("firstname").value;
        if(!first_name.match(/^[a-zA-Z_]+$/) || first_name === ''){
            alert("Invalid Firstname");
            return false;
        }
        
        var last_name = document.getElementById("lastname").value;
        if(!last_name.match(/^[a-zA-Z_]+$/) || last_name === ''){
            alert("Invalid Lastname");
            return false;
        }
        
        var email = document.getElementById("email").value;
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email === ''){
            alert("Invalid Email");
            return false;
        }
        
    }
    
    function get_device_type(){
        const user_agent = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(user_agent)) {
            return "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(user_agent)) {
            return "mobile";
        }
        return "desktop";
    }
</script>
