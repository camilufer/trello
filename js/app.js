
//variables
var list= document.getElementById('list')
var box= document.getElementById('box');
var btns=document.getElementById('btns');
var save= document.getElementById('save');
var cancel= document.getElementById('cancel');

//se abre el formulario al hacer click
list.addEventListener('click', function(){
	cont.classList.add('fondo');
	btns.classList.remove('show');
})

close.addEventListener('click', function(){
	container.classList.remove('fondo');
	buttons.classList.add('show');
});








