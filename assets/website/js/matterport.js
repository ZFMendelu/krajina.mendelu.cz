
let points = document.querySelectorAll('.matterport-point');
let embed = document.querySelector('.matterport-embed');
let iframe = document.querySelector('.matterport-embed iframe');
let btnClose = document.querySelector('.matterport-embed .btn-close');

points.forEach((point) =>{
    point.addEventListener('click', () => {
        let embedSrc = point.getAttribute('matterport-data')
        console.log(embedSrc)
        iframe.setAttribute('src', embedSrc);
        embed.classList.add('displayed');
    })
})

btnClose.addEventListener('click', ()=>{
    embed.classList.remove('displayed');
})