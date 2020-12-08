function solve(arr){
    let alpha= 'abcdefghijklmnopqrstuvwxyz';
    let finalArr = [];
    arr.forEach(el=>{
      
      let counter = 0;
       console.log('input:', el);
       var eaWordArr = el.split("");
       
       eaWordArr.forEach((el,i)=>{
         console.log(el, i);
         console.log('i:', i, 'index of: ',alpha.indexOf(el));
         
         if(i === alpha.indexOf(el.toLowerCase())){
           counter += 1;
           console.log('counter is:', counter);
         }
         
       });
       finalArr.push(counter);
     });
     console.log(finalArr);
   
   return finalArr;
   
  };
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
  solve(["abode","ABc","xyzD"]);