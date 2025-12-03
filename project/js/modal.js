const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal_close');
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
closeBtn.addEventListener('click', closeModal);
setTimeout(() => {
    openModal();
}, 10000); 
function showModalByScroll() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);