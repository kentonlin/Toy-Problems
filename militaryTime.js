function main(string) {
    var time = string.split(":");
    var secondsPmAm = time.splice(time.length -1).join("").split("")
    var seconds = secondsPmAm.slice(0,2).join("");
    var pmAM = secondsPmAm.slice(-2).join("");
    var hours;

    if(pmAM === "PM"){
      if(time[0] !== "12"){
        hours = +time.shift() + 12;
        time.unshift(hours);
      }
    }
    if(pmAM === "AM"){
      if(time[0] === "12"){
        time[0] = "00";
      }
    }

    console.log(time.join(":") + ":" + seconds);


}

main("12:27:45AM")
