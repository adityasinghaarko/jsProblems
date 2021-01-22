function megaFriend(names){
    var highestLength = 0;
    var maxLengthNamedFriend = '';
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        var elementLength = element.length;
        if(elementLength > highestLength){
            maxLengthNamedFriend = element;
            highestLength = elementLength;
        }
    }
    return maxLengthNamedFriend;
}


var myFriends = ['HTML', 'CSS', 'Javascript', 'Python', 'C'];
var checkMegaFriend = megaFriend(myFriends);
console.log(checkMegaFriend);
