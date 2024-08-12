function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array';

    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir']
const myBigBuddy = megaFriend(1245);
// console.log(myBigBuddy);
if(friends.indexOf('Lion') !=-1){
    // console.log('Lion exists');
}

if(friends.includes('Fox')){
    console.log('Fox exsits using includes');
}
else{
    console.log("Fox doesn't exists")
}


if(friends.includes('Lion')){
    console.log('Lion exsits using includes')
}


// concat
const first = [1, 2, 3, 5,];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);