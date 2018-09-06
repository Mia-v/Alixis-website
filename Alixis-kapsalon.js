var screens= [];
function sizes(){
  screens=[];
  document.querySelectorAll(".screens").forEach((el)=>{screens.push(el.offsetTop);});
}
sizes();

window.addEventListener("resize", sizes);
document.addEventListener('wheel', swish);

var pointer = 0;
var isGateClosed = false;



function move(coord) {
  if (coord < screens[pointer+1]) {
    setTimeout(function() {
      coord += 5
      window.scrollTo(0, coord);
      move(coord);
    }, 5);
  }
}

function moveBack(coord){
  if (coord >= screens[pointer-1]){
    setTimeout(function (){
      coord -= 5
      window.scrollTo(0, coord);
      moveBack(coord);
    }, 5);
  }
}


function swish(event) {
  if (event.deltaY > 0) {
    if (pointer == screens.length - 1) {
      return false;
    } else {
      if (!isGateClosed) {
        isGateClosed = true;
        move(screens[pointer]);
        setTimeout(function () {
          console.log("a", screens[pointer]);
          pointer++;
          isGateClosed = false;
        }, 1500);
      }
    }
  } else if (event.deltaY < 0) {
    if (pointer == 0) {
      return false;
    }else{
      if (!isGateClosed){
        isGateClosed = true;
        moveBack(screens[pointer]);
        setTimeout(function(){
          console.log("b", screens[pointer]);
          pointer--;
          isGateClosed = false;
        }, 1500);
      }
    }
  }
}

// var butNext = document.getElementsByClassName("go-next-arrow");
// var i=0;

// function goNext(){
//     if (pointer == screens.length - 1) {
//       return false;
//     }else{
//       if(i<butNext.length-1){
//         butNext[i];
//         if(i%2==0){
//           pointer=i;
//           move(screens[pointer]);
//           i++;
//           pointer++;
//           console.log(pointer);
//         }else{
//           pointer=i;
//           moveBack(screens[pointer]);
//           i--;
//           pointer--;
//           console.log(pointer);
//         }
//       }
//     }
//   }

var butNext = document.getElementsByClassName("arrow-next");
var butPrev = document.getElementsByClassName("arrow-prev");
var x=0, y=0;

function goNext(){
    if(x<butNext.length-1){
      pointer=x;
      move(screens[pointer]);
      pointer++;
    }
}

function goPrev(){

}

function goUp(){
 if(butPrev[y]){
   pointer = y+1;
   moveBack(screens[pointer]);
   y--;
 }
}
function goUp(){
  if(butPrev[y]){
    pointer = y+1;
    moveBack(screens[pointer]);
    y--;
  }
}
