$(window).scroll(function(){
  var main = $(".main");

  var I1 = $(".I1");
  var btn1 = $(".btn1")
  var btn = $(".btn")
  var hero= $(".hero")




  var scroll = $(window).scrollTop();

 
  if (scroll > 5) {
    $(main).css({"background-color":"white", }
    );

    $(I1).css({"height":"30px","width":"100px","margin-top":"10px" })
 
    $(hero).css({"margin-top":"10px"})
    

  }

  else{
    $(main).css({"background-color" : "transparent", });  	
    $(I1).css({"height":"51px","width":"150px"  ,"margin-top":"45px"})
  
    $(hero).css({"margin-top":"45px"})

  }
})



var countNumbers = [
  document.getElementById("count-number1"),
  document.getElementById("count-number2"),
  document.getElementById("count-number3"),
  document.getElementById("count-number4"),
  document.getElementById("count-number5"),
  document.getElementById("count-number6")
];

var counts = [0, 0, 0, 0, 0, 0];

function updateCounts() {
  if (counts[0] < 40) {
      counts[0]++;
      countNumbers[0].textContent = counts[0].toLocaleString();
  }

  if (counts[1] < 1200) {
      counts[1]++;
      countNumbers[1].textContent = counts[1].toLocaleString();
  }

  if (counts[2] < 500) {
      counts[2]++;
      countNumbers[2].textContent = counts[2].toLocaleString();
  }

  if (counts[3] < 100) {
      counts[3]++;
      countNumbers[3].textContent = counts[3].toLocaleString();
  }

  if (counts[4] < 40) {
      counts[4]++;
      countNumbers[4].textContent = counts[4].toLocaleString();
  }

  if (counts[5] < 1900) {
      counts[5]++;
      countNumbers[5].textContent = counts[5].toLocaleString();
  }
}

setInterval(updateCounts, 0.5);




// slider window js



const slides = document.querySelectorAll(".slide");

let count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 30}%`;
});

const nxt = () => {
  if (count == slides.length - 1) {
    count = 0;
    slideChange();

  } else {
    count++;
    slideChange();
  }

};

const prv = () => {
  if (count == 0) {

    count = slides.length - 1
    slideChange();
  }
  else {
    count--
    slideChange()
  }

};

const slideChange = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

// aboutUs 2nd menu
// function show() {
//   var abs = document.getElementsByClassName("abs2-contain1")

// abs.style.display="block";
// alert("'sahil")
  
// }

function show() {
  var abs1 = document.getElementsByClassName("abs2-contain1");
  var abs2 = document.getElementsByClassName("abs2-contain2");


  for (var i = 0; i < abs1.length; i++) {
    abs1[i].style.display = "none";
    
  }
  for (var i = 0; i < abs2.length; i++) {
    abs2[i].style.display = "block";
      abs2[i].style.border="1px solid"

  }
}
function show1() {
  var abs1 = document.getElementsByClassName("abs2-contain1");
  var abs2 = document.getElementsByClassName("abs2-contain2");


  for (var i = 0; i < abs1.length; i++) {
    abs1[i].style.display = "block";
    abs1[i].style.border="1px solid"
  }
  for (var i = 0; i < abs2.length; i++) {
    abs2[i].style.display = "none";
  }
 

}

function math(){
  document.getElementsByClassName("math").value=Math.random()
}
math();