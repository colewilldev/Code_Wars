// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Keep the original order of friends in the output...

var friendsList = ['bob', 'tron', 'ting', 'fluff', 'shieldy'];
var friendIs4 = '1234';
let newArr = [];

function friend(friends) {
  console.log('Inside the friends list');
  friends.forEach(el => { 
    if (el.length === 4) newArr.push(el);
  })
  console.log('The list', newArr);
  return newArr;
}

friend(friendsList);

