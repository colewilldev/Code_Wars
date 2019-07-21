<?php

/** 
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum($s) {

  $final = '';
  
  for($i = 0; $i < strlen($s); $i++){
    $final .= strtoupper($s[$i]);
    $x = 0;
   
   while($x < $i ){
      $final .= strtolower($s[$i]);
      $x++;
    }
    
    if($i <strlen($s) - 1){
      $final .="-";
    }
  }
  return $final;
}
