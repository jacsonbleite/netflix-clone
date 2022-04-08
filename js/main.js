let boxFilme = document.querySelectorAll('.box-filme');
let spinnerBg = document.querySelector('.spinner-bg');
let modalBg = document.querySelector('.modal-bg');
let modal = document.querySelector('.modal');
let iframeTrailer = document.createElement('iframe');
let footerBottom = document.querySelector('.footer-bottom');
let back = document.querySelector('.back');
let trailerDestaque = document.querySelector('.trailer-destaque');



const trailerClicked = (clicked) => {

    clicked.addEventListener('click', () => {
        
        spinnerBg.classList.remove('d-none');

        //só para mostrar o spinner
        setTimeout(() => {
            trailerShow(clicked.dataset.id);
        }, 1500);

    })

}

back.addEventListener('click', () => {

    modalBg.classList.add('d-none');
    footerBottom.style.display = "none";
    iframeTrailer.src = "";

});


const trailerShow = (dataId) => {

    spinnerBg.classList.add('d-none');
    modalBg.classList.remove('d-none');
    footerBottom.style.display = "flex";

    createTrailer(dataId);

}

const createTrailer = (dataId) => {

    iframeTrailer.src = `https://www.youtube.com/embed/${dataId}?rel=0&modesbranding=1&showinfo=0&controls=1&autoplay=1&mute=0"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture
        allowfullscreen>`;
    modal.appendChild(iframeTrailer);

}

boxFilme.forEach((value, index, array) => {

    let clicked = array[index];
    trailerClicked(clicked);

})

trailerDestaque.addEventListener('click', () => {
    
    spinnerBg.classList.remove('d-none');
    
    //só para mostrar o spinner
    setTimeout(() => {
        trailerShow(trailerDestaque.dataset.idDestaque);
    },1500);

})




