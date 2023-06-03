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

