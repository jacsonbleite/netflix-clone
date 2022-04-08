let boxFilme = document.querySelectorAll('.box-filme');
let spinnerBg = document.querySelector('.spinner-bg');
let modalBg = document.querySelector('.modal-bg');
let modal = document.querySelector('.modal');
let iframeTrailer = document.createElement('iframe');
let footerBottom = document.querySelector('.footer-bottom');
let back = document.querySelector('.back');
let trailerDestaque = document.querySelector('.trailer-destaque');
let carroselFilmes = document.querySelector('.carrosel-filmes');



let shortClick = function (cb) {
    let min = 0;
    let max = 50;
    let time, self, timeout, event;

    function reset() {
        clearTimeout(timeout);
        timeout = 0;
    }

    window.addEventListener('mouseup', reset); // caso o mouseup ocorra fora do elemento
    return function (e) {
        
        if (!self) {
            self = this;
            self.addEventListener('mouseup', function (e) {                
                let interval = new Date().getTime() - time;
                if (timeout && interval > min) cb.call(self, event);
                reset();
            });
        }
        
        event = e;
        time = new Date().getTime();
        
        if (e.type == 'mousedown') timeout = setTimeout(reset, max);
        
    };
};


let handler = shortClick( (e) => {        
    
    boxesFilmes(boxFilme);        

});

carroselFilmes.addEventListener('mousedown', handler);



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

const boxesFilmes = (boxFilme) => { 
        
    boxFilme.forEach((value, index, array) => {
    
        let item = array[index];        
        trailerClicked(item);

    })

}

trailerDestaque.addEventListener('click', () => {
    
    spinnerBg.classList.remove('d-none');
    
    //só para mostrar o spinner
    setTimeout(() => {
        trailerShow(trailerDestaque.dataset.idDestaque);
    },1500);

})




