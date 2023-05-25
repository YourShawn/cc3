<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
		<title>Registration</title>
	</head>
    <body>
        <div class="form">
            <?php

                $errors = [];

                if(!empty($_POST['firstname'])){
                    $firstname = $_POST['firstname'];
                    if(!is_text_only($firstname)){
                        $errors[] = "<p>Error!!!! FirstName should be text only!!</p>";
                    }
                } else {
                    $firstname = null;
                    $errors[] = "<p>Error!!!! FirstName is required!!</p>";
                }
                if(!empty($_POST['lastname'])){
                    $lastname = $_POST['lastname'];
                    if(!is_text_only($lastname)){
                        $errors[] = "<p>Error!!!! LastName should be text only!!</p>";
                    }
                } else {
                    $lastname = null;
                    $errors[] = "<p>Error!!!! LastName is required!!</p>";
                }
                if(!empty($_POST['email'])){
                    $email = $_POST['email'];
                    if(!is_valid_email($email)){
                        $errors[] = "<p>Error!!!! Email should be valid!!</p>";
                    }
                } else {
                    $email = null;
                    $errors[] = "<p>Error!!!! Email is required!!</p>";
                }

                if(count($errors) == 0){
                    header("Location: success.php");
                    exit;
                } else {
                    foreach($errors as $error){
                        echo $error;
                    }
                    echo '<button onclick="location.href=\'index.php\';" type="button">Go Back</button>';
                }
            
                function is_valid_email($user_email) {
					if(filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
						return true;
					} else {
                        return false;
                    }
				}
                function is_text_only($input_value) {
                    if(!preg_match("/[^a-zA-Z- ]/",$input_value)) {
                        return true;
                    } else { 
                        return false;
                    }
                }
            
            ?>
        </div>
    </body>
</html>