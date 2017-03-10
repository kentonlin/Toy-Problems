function songDecoder(song){
  var songArr = song.split('');
  for(var i = 0; i < songArr.length; i++){
    if(songArr[i] === "W" && songArr[i +1] === "U" && songArr[i +2] === "B"){
      songArr[i] = " ";
      songArr.splice(i +1, 2);
    }
  }
  return songArr.join("").split(' ').filter((elem, idx)=>{
    if(elem !== " "){
      return elem
    }
  }).join(" ");
}

// CODEWARS
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND
