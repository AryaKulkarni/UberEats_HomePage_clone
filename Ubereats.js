let head1 = document.getElementById("header");
let head2 = document.getElementById("header");
let headContents=head1.innerHTML;
let hamMenu=document.getElementById("openbtn")
let Body=document.getElementById("body")
let fade=document.getElementById("fadeMe")
let colors = "white";
let rootclr=document.getElementById("root");
let foot=document.getElementById("footer")
let dist=document.body.scrollTop
let dist2=0,dist3=0
const inputField=`
<button id="openbtn" onclick="openNav()" style="position:relative; bottom:0px;">&#9776;</button>
    <h1 id="word" style="font-weight:400">Uber</h1>
    <h1 id="Word2">Eats</h1><div>
<input type="text" placeholder="&#127968;&nbsp;&nbsp;&nbsp;Enter delivery address" style="font-size:110%; position:relative; bottom:20px; left:50px; width:600px; margin-bottom:0px; padding-left:10px;" id="DelText">
</div>
<button id="logbtn">Log in</button>
    <button id="signbtn">Sign Up</button>`;

    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
      fade.style.opacity="0";
      fade.style.zIndex="0";
    });
window.onload=function() {
  window.innerWidth=rootclr.offsetWidth
  head1.offsetWidth=foot.clientWidth
}

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop || window.pageYOffset > window.innerHeight) {
        head1.style.backgroundColor = "rgb(255,255,255,1)";
        head1.style.opacity=1;
        head1.style.borderBottom="groove";
        head1.style.zIndex=1;
        hamMenu.style.backgroundColor = colors;
        // console.log(document.documentElement.scrollTop)
    }
    else {
        head1.style.backgroundColor = "rgb(0,0,0,0)"
        head1.style.borderBottom="none";
        hamMenu.style.backgroundColor = "rgb(0,0,0,0)";
        head1.style.zIndex=1;
    }
    if(document.documentElement.scrollTop>=360) {
      head1.innerHTML=inputField;

    }
    else {
      console.log(headContents)
      head1.innerHTML=headContents;
    }
})
function func() {
  // const elem=document.activeElement
  // dist=elem.scrollTop
  openNav()

}
var elem
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    document.body.style.overflow="hidden";
    rootclr.style.backgroundColor = "rgba(0,0,0,0.5)";
    rootclr.style.overflow="hidden";
    fade.style.opacity="0.5";
    fade.style.zIndex="10";
    elem=document.activeElement
    fade.addEventListener("click",function() {
      closeNav();
  })
}
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.marginLeft= "0";
    rootclr.style.backgroundColor = "white";
    rootclr.style.overflow="visible";
    // document.body.style.backgroundColor = "rgba(255,255,255,0.5)";
    document.body.style.overflow="visible";
    fade.style.opacity="0";
    fade.style.zIndex="0";
    document.activeElement=elem
    // var elem2
    // elem2.scrollTop=dist
    // document.activeElement=elem2
    // console.log(dist)
  }
//   function openAndStop() {
//       openNav()
//       Body.style.overflow=hidden;

//   }
// window.onload = function () {

//   function changeImage() {   
//       var BackgroundImg=["/Users/abhayakulkarni/Desktop/ReactStuff/BackforUber_2_cleanup.png",
//       "/Users/abhayakulkarni/Desktop/ReactStuff/BackforUber_cleanup.png"];
//       var i = Math.floor((Math.random() * 2));
//       rootclr.backgroundImage = 'url("' + BackgroundImg[0] + '")';
//   }
//   window.setInterval(changeImage, 10000);
// }
const menubtn=document.getElementById("Menu")
// menubtn.addEventListener("click",function() {
//     console.log("Clicked")
//     console.log(menubtn)
//     openNav()
// })
// function add() {
//     console.log(clicked)
// }
// window.addEventListener('scroll', function (event) {
//   if (isInViewPort(head1)) {
//     head1.style.backgroundColor="#EF9068";
//   }
// }, false);
// function isInViewPort(element) {
//   // Get the bounding client rectangle position in the viewport
//   var bounding = element.getBoundingClientRect();

//   // Checking part. Here the code checks if it's *fully* visible
//   // Edit this part if you just want a partial visibility
//   if (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   ) {
//       console.log('In the viewport! :)');
//       return true;
//   } else {
//       console.log('Not in the viewport. :(');
//       return false;
//   }
// }
