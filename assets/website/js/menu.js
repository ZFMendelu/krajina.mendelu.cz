let showMenu = document.querySelectorAll('a.menu-toggler')
showMenu.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let menu =  document.querySelector('nav .menu');
        menu.classList.toggle('displayed');
    });
})
