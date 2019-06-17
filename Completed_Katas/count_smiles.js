//return the total number of smiling faces in the array
// valid smile :) :D ;-D :~)
// invalid smiles ;( :> :} :] 
// if array is empty return 0...

let faces = [':)', ';(', ':--', ':-D'];

function countSmileys(arr) {
  let validEyes = [':', ';'];
  let validNoses = ['-', '~'];
  let validMouths = [')', 'D'];
  
  let smileCounter = 0;
  if (arr.length === 0) { return smileCounter };
  arr.forEach(el => { 
    
    if (validEyes.indexOf(el[0]) > -1) { 
      console.log(` \b Eyes are ${el[0]} Nose: ${el[1]}, Mouth: ${el[2]}`);
      
      if (!el[2] && validMouths.indexOf(el[1]) > -1) { 
        smileCounter++;
        console.log(el, ' --> is is a match! 2 part smile, incrementing ===', smileCounter);
      }
      if ((validNoses.indexOf(el[1]) > -1) && (validMouths.indexOf(el[2]) > -1)) { 
        
        smileCounter++;
        console.log(el, ' --> is is a match! 3 part smile, incrementing ===', smileCounter);
      }
    }
  })
  console.log('Total Smile Count ===', smileCounter);
}
countSmileys(faces);