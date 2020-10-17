

var pics=[
"images.jpg",
"images1.jpg",
"images2.jpg",
"images3.jpg",
"images4.jpg" ,
"images5.jpg"
];
var btn= document.querySelector("img");
var img= document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
if (counter === 6){
	counter =0;
   }
img.src= pics[counter]
counter = counter + 1;

});