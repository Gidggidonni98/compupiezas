(function(){
    const sliders = [...document.querySelectorAll('.important__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', () =>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
       const currentImportant = document.querySelector('.important__body--show').dataset.id;
       value = Number(currentImportant);
       value+= add;
        sliders[Number(currentImportant)-1].classList.remove('important__body--show');
       if(value === sliders.length+1 || value === 0){
        value = value === 0 ? sliders.length : 1;
       }

       sliders[value-1].classList.add('important__body--show')
    }
})();