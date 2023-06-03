# BPS-Slider-Library
![image](https://github.com/codeingroom/BPS-Slider-Library/assets/57828021/584e01ab-9b36-4e77-9360-d3fc32cbb36a)
#HTML
<!-----Slider Html Code------->
<div class="slider" id="slider">
<button class="left_btn" id="previous"><</button>
  <!---------For Image------------>
<div class="slider_img p1"><img src="image/1.jpg" class="sl_img"></div>
<div class="slider_img p2"><img src="image/2.jpg" class="sl_img"></div>
<div class="slider_img p3"><img src="image/3.jpg" class="sl_img"></div>
<div class="slider_img p4"><img src="image/4.jpg" class="sl_img"></div>
<div class="slider_img p4"><img src="image/5.jpg" class="sl_img"></div>
<div class="slider_img p4"><img src="image/6.jpg" class="sl_img"></div>
<div class="slider_img p4"><img src="image/7.jpg" class="sl_img"></div>
<button class="right_btn" id="next">></button>
<!--Create Dout-->
<div class="dot_box" id="dots">
</div>
<!-------------->
</div>
 #CSS
  .slider{
	background-color:blue;
	box-shadow: 1px 2px 3px #000,inset 1px 0px 7px 5px #00000063;
	width:100%;
	height:15rem;
	position:relative;
	border-radius:5px;
	
	display:flex;
	align-items:center;
	justify-content:center;
}
.left_btn{
background-color: #fff;
color: #000;
font-size: larger;
position: absolute;
left: 0px;
width: 4rem;
height: 10rem;
border: 1px;
z-index: 5;
cursor:pointer;	
}
.right_btn{
	background-color: #fff;
color: #000;
font-size: larger;
position: absolute;
right: 0px;
width: 4rem;
height: 10rem;
border: 1px;
z-index: 5;
cursor:pointer;
}
.left_btn:hover{
	background-color:#aaa;
}
.right_btn:hover{
	background-color:#aaa;
}
.slider_img{
	background-color:orange;
	width:100%;
	height:100%;
	position:absolute;
	
}
.sl_img{
	width:100%;
	height:100%;
	object-fit: cover;
}
.p1{
	background-color:orange;
	z-index:1;
}

@media screen and (max-width: 600px) {
.slider{
	height:30%;
}
.left_btn{
	width: 2rem;
height: 5rem;
}
.right_btn{
	width: 2rem;
height: 5rem;
}
}

.dot_box{
	width:100%;
	height:1rem;
	position:absolute;
	bottom:0px;
	z-index:10;
	display: flex;
	align-items: center;
	justify-content: center;
}
.dot{
	background-color:#aaa;
	width:10px;
	height:10px;
	border-radius:10px;
	margin:2px;
	box-shadow: inset 0px 2px 4px 1px #000;
	cursor:pointer;
}
.newdot{
	background-color: #ffffffb5;
box-shadow: 0px 2px 1px #000;
border: 2px solid #716d6d;
}
#JAVASCRIPT
  //Developer Name: Bhanu Pratap Singh
//Version:1.0
//Date:3-06-2023
//Name:BPS Slider Library
//===============This Slider Library Created By Bhanu Pratap Singh=================================
let ck=document.getElementById("slider");//for touch
let prev=document.getElementById("previous");
let nex=document.getElementById("next");
let slider_image=document.getElementsByClassName("slider_img");
let dot=document.getElementById("dots");
let dotbox=document.getElementsByClassName("dot");

//================================================
var key=0;//this help to change the slider image
var def=0;//this for dot


//create dot====If you no need to dot so Comment this code====
//==================
let str="";
for(let i=0;i<slider_image.length;i++){
	str+="<div class='dot'></div>";
}
dot.innerHTML=str;
dotbox[0].classList.add("newdot");
//==================
for(let j=0;j<slider_image.length;j++){
//Event apply	
	dotbox[j].addEventListener("click",()=>{
		def=j;
		key=def;
		for(let z=0;z<slider_image.length;z++){
			if(def==z){
				dotbox[def].classList.add("newdot");
				continue;
			}
			slider_image[z].style.zIndex="-1";
			dotbox[z].classList.remove("newdot");
			console.log(z);
		}
		slider_image[def].style.zIndex="1";
		console.log(def+"=value="+j);
	});
}
//======end=====================================





//====Next button====================
nex.addEventListener("click",()=>{
	console.log("next click");
	key+=1;
	def=key;
	for(let i=0;i<slider_image.length;i++){
//This If condition to check the key value is greater than to class length or not========================
		if(key>=slider_image.length){
			key=0;
			i=0;
			def=0;
			slider_image[slider_image.length-1].style.zIndex="-1";//for last element
			slider_image[0].style.zIndex="1";//for stsrting element
			dotbox[slider_image.length-1].classList.remove("newdot");
			dotbox[def].classList.add("newdot");
			console.log(def);
			break;
		}
//This IF condition to check key less then to slider_image length or not=========================
		if(key<slider_image.length){
			slider_image[key-1].style.zIndex="-1";//this set the value -1 previous element
			slider_image[key].style.zIndex="1";//This set the value 1 next elemnt so show the new image
			dotbox[def-1].classList.remove("newdot");
			dotbox[def].classList.add("newdot");
			break;
		}
	
	}
	
});
//==================end======================================



//==================Previous button===========================
prev.addEventListener("click",()=>{
	console.log("previous click");
	key-=1;
	def=key;
	for(let i=0;i<slider_image.length;i++){
		if(key>=slider_image.length){
			key=0;
			i=0; 
		}
		if(key<0){
			slider_image[0].style.zIndex="-1";//for stating element
			slider_image[slider_image.length-1].style.zIndex="1";//for last element
			key=slider_image.length-1;
			dotbox[0].classList.remove("newdot");
			dotbox[slider_image.length-1].classList.add("newdot")
			break;
		}
//This IF condition to check key less then to slider_image length or not=========================
		if(key<slider_image.length){
			slider_image[key+1].style.zIndex="-1";//this set the value -1 previous element
			slider_image[key].style.zIndex="1";//This set the value 1 next elemnt so show the new image
			dotbox[def+1].classList.remove("newdot");
			dotbox[def].classList.add("newdot")
			break;
		}
	
	}
});
//=============end button========================================

