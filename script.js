var mybutton = document.getElementById("back-to-top");
var navbar=document.getElementById("navbar")
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    navbar.classList.add("fixed-top")
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("fixed-top")
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click',topFunction)
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// LOGIN 
let user={email:'phuong@gmail.com', pass:'123456'}
function login(){
  let email=document.getElementById('email')
  let fail=document.getElementById('fail')
  let password=document.getElementById('password')
  if (email.value === user.email && password.value===user.pass){
  window.location.href='/'
  }
  else{
    fail.classList.remove('d-none')
  }
}


// vị trí 1 element
/*
let toado=document.getElementById("footer").offsetTop
console.log(toado)

document.getElementsByTagName('button')[0].onclick = function () {
  scrollTo(document.body, 0, 1250);   
}
   
function scrollTo(element, to, duration) {
   var start = element.scrollTop,
       change = to - start,
       currentTime = 0,
       increment = 20;
       
   var animateScroll = function(){        
       currentTime += increment;
       var val = Math.easeInOutQuad(currentTime, start, change, duration);
       element.scrollTop = val;
       if(currentTime < duration) {
           setTimeout(animateScroll, increment);
       }
   };
   animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
 t /= d/2;
 if (t < 1) return c/2*t*t + b;
 t--;
 return -c/2 * (t*(t-2) - 1) + b;
};
*/