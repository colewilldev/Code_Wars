<?php

/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

*/

Stats
Kata
Solutions
Translations
Collections
Kumite
Social
Discourse
Completed (47)
Unfinished
Obsolete
7 kyu
Build a square
PHP:
function generateShape($int) {
  echo "Input = $int \n";
  $final = '';
  
  
  for($i=0; $i < $int; $i++){
    $s = 0;
    while($s < $int){
      $s ++;
      $final .= "+";
    }
    $s = 0;
    if($i < $int -1){
      $final .= "\n";
    }
    
  }
  echo "Final: $final";
  return $final;
}
2 hours agoRefactor
6 kyu
Meeting
PHP:
function meeting($s) {
   $eachName = explode(";", $s);
   $spaceArray = array();
   $final = "";
   foreach($eachName as $el){
     $names = explode(":", $el);
     $new = strtoupper($names[1])." ".strtoupper($names[0]);
     echo $new . "\n";
     array_push($spaceArray, $new);
   }
  sort($spaceArray);
  foreach($spaceArray as $el){
    $tempArr = [];
    $tempArr = explode(" ", $el);
    $final .= "($tempArr[0], $tempArr[1])";
  }
  return $final;
}
