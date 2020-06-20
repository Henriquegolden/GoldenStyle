var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;

function preCarregamento(){
	var s=1;
	for(var i=0;i<4;i++){
	imgs[i]=new Image();
	imgs[i].src="imgs/s"+s+".jpg";
	s++;
}

}

function carregarImg(img){
	slider.style.backgroundImage="url(' "+imgs[img].src+"')";

}

function inicia(){
	preCarregamento();
	imgAtual=0;
	maxImg=imgs.length-1;
	slider=document.getElementById("dvslider");
	carregarImg(imgAtual);
	tmp=setInterval(troca,1000);
}

function troca(){
	imgAtual++;
	if(imgAtual>maxImg){
		imgAtual=0;
	}

	carregarImg(imgAtual);
}
window.addEventListener("load",inicia);