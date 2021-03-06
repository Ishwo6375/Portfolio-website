const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () =>{
     menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})


const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
   navItems.forEach(item => {
       const link = item.querySelector('a');
       link.classList.remove('active');
   }) 
}

navItems.forEach(item => {
   const link = item.querySelector('a'); 
   link.addEventListener('click', () => {
       changeActiveItem();
       link.classList.add('active');
   })
})

//read more about section//
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', ()=> {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
       readMoreBtn.textContent = "show less";
    }else{
        readMoreBtn.textContent = "show more";
    }
})





window.addEventListener('load', () => {
    let progressBars = document.querySelectorAll('.progress-bar');

    let values = [
        '80%',
        '70%',
        '70%',
        '80%',
        '60%',
        '70%'
    ];

    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    })
});