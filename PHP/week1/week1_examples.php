
<?php

//strings and string escape

echo 'Arnold once said I\'ll be back';
echo '<br>';

$str1="This is an \"escaped\" string";
echo $str1;
echo '<br>';
echo '<br>';

//simple array
$array_cars=array("Volvo","BMW","Toyota");
echo $array_cars[0];
echo '<br>';
echo $array_cars[1];
echo '<br>';
echo $array_cars[2];
echo '<br>';
echo '<br>';

//array with keys
$array_keys=array("Volvo"=>"XC90", "BMW"=>"X5", "Toyota" => "RAV4");
echo $array_keys["Volvo"];
echo '<br>';
echo $array_keys["BMW"];
echo '<br>';
echo $array_keys["Toyota"];
echo '<br><br>';

//loops
echo "execute a var_dump on array_num<br>";

$array_num=array(1,100,7,4,5);
var_dump($array_num); 
echo '<br><br>';

$total=0;
for ($x=0;$x<sizeof($array_num);$x++) {
       $total+=$array_num[$x];

}
echo "Total of array_num: " . $total;
echo '<br><br>';



//condition
$hour=date("H");    //use date function to get current hour
echo "current hour is: " . $hour;
echo '<br>';
if ($hour < 10) {
    echo "good morning";
}
elseif ($hour < 20) {
    echo "good evening";
}
else {
    echo "good night";
}

echo '<br><br>';


//functions
$max=find_max($array_num);
echo 'Max value of array_num: ' . $max;

function find_max($array) {
   return max($array);
}


echo '<br><br>';


//email validation
$email1="john.doe@example.com";
$email2="john.doeexample.com";

if (filter_var($email1, FILTER_VALIDATE_EMAIL)) {
    echo $email1 . ' is a valid email adress<br>';
} else {
    echo $email1 . 'is not a valid email adress<br>';
}

if (filter_var($email2, FILTER_VALIDATE_EMAIL)) {
    echo $email2 . ' is a valid email adress<br>';
} else {
    echo $email2 . ' is not a valid email adress<br>';
}

echo '<br><br>';


//pregmatch 
$str="Visit W3Schools";
$pattern="/w3schools/i";   //i means case insensitive

if (preg_match($pattern, $str)) {
   echo "pattern $pattern was found using preg_match in \"$str\"<br>";
}
else
{
    echo "pattern $pattern not found using preg_match in \"$str\"<br>";
}

$str="Visit W4Schools";
if (preg_match($pattern, $str)) {
   echo "pattern $pattern was found using preg_match in \"$str\"<br>";
}
else
{
    echo "pattern $pattern not found using preg_match in \"$str\"<br>";
}

echo '<br><br>';


/*pregmatch with position. 
First position x or - 
Second position y or -
Third position z or -
*/
$str="xyz";
$pattern="/^[\-x][\-y][\-z]/";
findpattern($str,$pattern);

$str="x-z";
findpattern($str,$pattern);

$str="---";
findpattern($str,$pattern);

$str="j-z";
findpattern($str,$pattern);

$str="xyk";
findpattern($str,$pattern);

$str="xy";
findpattern($str,$pattern);


function findpattern($str,$pattern)
{
    if (preg_match($pattern, $str)) {
      echo "pattern $str was found using preg_match<br>";
    }
    else
    {
    echo "pattern $str not found using preg_match<br>";
    }

}




?>