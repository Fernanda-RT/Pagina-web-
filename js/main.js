var btnAdoptar = document.getElementById('boton1'),
    overLay = document.getElementById('overLay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');


btnAdoptar.addEventListener('click', function(){
    overLay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overLay.classList.remove('active');
    popup.classList.remove('active');
});