//  https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

function groupByCommas(n) {
    let stringIn = n.toString();
    console.log('\n length of input:', stringIn.length);
    let final = [];

    let numberArr = stringIn.split('');
    console.log(numberArr);
    console.log('TARGET:', stringIn.length);
    for(let i = stringIn.length; i > 0 ; i --){
        console.log(' I is :', i);
        
        console.log(`Final.length: ${final.length}`);
        
        
        if((final.length > 2) && (final.length % 3) ===0){
            console.log('inside!!!');
            final.push(',');
        }
        final.push(stringIn.charAt(i-1));
      console.log('Final Ans:', final);
    }
    
    return final.reverse().join('');
}
console.log(groupByCommas(100000));