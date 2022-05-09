let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;
let enlaces = document.querySelectorAll('.lists li a');

// MENU DE NAVEGACIÓN

btnMenu.addEventListener('click', () =>{
    if(activador){
        menu.style.left = '0';
        menu.style.transition = '0.5s';
        activador=false;
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
    }else{
        activador = true;
        menu.style.left = '100%';
        menu.style.transition = '0.5s';
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
    }
});

// CUANDO TOCO UNA OPCION QUE SE GUARDE EL MENÚ

enlaces.forEach( (opcion) =>{
    menu.addEventListener('click', (e) =>{
        if(e.target == opcion){
            menu.style.left = '100%';
            menu.style.transition = '1s';
            document.querySelector('.btn-menu i').classList.toggle('fa-times');
            activador = true;
        }
    });


});



// INTERCALAR CLASE ACTIVO



enlaces.forEach((element) =>{
    element.addEventListener('click', (evento) => {
        enlaces.forEach((link)=>{
            link.classList.remove('activo');
        });
        evento.target.classList.add('activo');
    });
});


// EFECTOS SCROLL

let scrollPrevio = window.pageYOffset;

window.onscroll = () =>{
    
    let scrollActual = window.pageYOffset;

    let goTop = document.querySelector('.go-top');
    
    //Mostrar y ocultar menu
    if(scrollPrevio > scrollActual){
        containerMenu.style.top = '0';
        containerMenu.style.transition = '0.5s';
    } else{
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    scrollPrevio = scrollActual;

    let arriba = window.pageYOffset;

    if(arriba <= 600){
        containerMenu.style.borderBottom = "none";
        goTop.style.right = '-100%';
    }else{
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        goTop.style.right = '0';
        goTop.style.transition = '0.5s';
    }
}


let goTop = document.querySelector('.go-top');

goTop.addEventListener('click', (e) =>{
    //console.log(target.e);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// let verAbajo = document.querySelector('#abajo');

// verAbajo.addEventListener('click', ()=>{
//     document.body.scrollTop = 4600;
//     document.documentElement.scrollTop = 4600;
// });





