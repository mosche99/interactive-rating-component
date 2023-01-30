const $star1 = document.getElementById('star-1'),
$star2 = document.getElementById('star-2'),
$star3 = document.getElementById('star-3'),
$star4 = document.getElementById('star-4'),
$star5 = document.getElementById('star-5'),
$submit = document.getElementById('submit');
const $app = document.getElementById('app');
const $thankYou = document.getElementById('thank-you');
let calification;

$calification = document.getElementById('calification');

document.addEventListener('click', e => {
    if (e.target === $star1) {
        $star1.classList.add('star-clicked');
        $star2.classList.remove('star-clicked');
        $star3.classList.remove('star-clicked');
        $star4.classList.remove('star-clicked');
        $star5.classList.remove('star-clicked');
        calification = 1;
    } else if (e.target === $star2) {
        $star2.classList.add('star-clicked');
        $star1.classList.remove('star-clicked');
        $star3.classList.remove('star-clicked');
        $star4.classList.remove('star-clicked');
        $star5.classList.remove('star-clicked');
        calification = 2;
    } else if (e.target === $star3) {
        $star3.classList.add('star-clicked');
        $star2.classList.remove('star-clicked');
        $star1.classList.remove('star-clicked');
        $star4.classList.remove('star-clicked');
        $star5.classList.remove('star-clicked');
        calification = 3;
    } else if (e.target === $star4) {
        $star4.classList.add('star-clicked');
        $star2.classList.remove('star-clicked');
        $star3.classList.remove('star-clicked');
        $star1.classList.remove('star-clicked');
        $star5.classList.remove('star-clicked');
        calification = 4;
    } else if (e.target === $star5) {
        $star5.classList.add('star-clicked');
        $star2.classList.remove('star-clicked');
        $star3.classList.remove('star-clicked');
        $star4.classList.remove('star-clicked');
        $star1.classList.remove('star-clicked');
        calification = 5;
        
    }

    e.preventDefault()
    
})

$submit.addEventListener('click', e => {
    if (typeof (calification)==='undefined') {
        alert('No calificaste la página, inténtalo de nuevo');
    } else {
        $calification.textContent = `You selected ${calification} of 5 stars`;
        $app.classList.add('hide');
        $thankYou.classList.remove('hide');
    }
    
    e.preventDefault();
})