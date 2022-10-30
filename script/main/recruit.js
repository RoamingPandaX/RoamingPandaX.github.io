document.getElementById("btn-dropDownMenu").onclick = () => {
  if(document.querySelector("body > header > div > div").style.display == "none") {
      document.querySelector("body > header > div > div").style.display = "block";
  } else {
      document.querySelector("body > header > div > div").style.display = "none";
  }
}

// Set the date we're counting down to
var countDownDate = new Date("Oct 30, 2022 16:03:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days>=0 && hours >=0 && minutes>=0 && seconds >=0) {
    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
  } else {
    document.getElementById("day").innerHTML = 0;
    document.getElementById("hour").innerHTML = 0;
    document.getElementById("min").innerHTML = 0;
    document.getElementById("second").innerHTML = 0;
  }
   
    
  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);

$(".num").countUp({
  time: 2000,
  delay: 10,
});

document.getElementsByClassName("apply-ngay")[0].onclick = () => {
  document.getElementsByClassName("noti")[1].style.display = "block";
}

document.getElementsByClassName("dangKyNgay")[0].onclick = () => {
  document.getElementsByClassName("noti")[0].style.display = "block";
}
