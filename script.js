const vector = document.querySelector('.vector')
const nav2 = document.querySelector('.nav2')
const close = document.querySelector('.close')
const header = document.querySelector('head')

vector.addEventListener('click',()=> {
    vector.classList.add('hide');
    close.classList.remove('hide');
    nav2.classList.toggle('visible');
    header.classList.add('hide');

})

close.addEventListener('click',()=> {
    vector.classList.remove('hide');
    close.classList.add('hide');
    nav2.classList.toggle('visible');
    header.classList.remove('hide');
})
