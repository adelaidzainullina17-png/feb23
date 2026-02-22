document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question-container');
    const giftContainer = document.getElementById('gift-container');
    const questionText = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    let currentStep = 1;

    function updateQuestion(step) {
        if (step === 1) {
            questionText.innerText = 'Ты служил?';
            questionImage.src = 'images/question1.jpg';  // ВАШЕ ИМЯ
        } else if (step === 2) {
            questionText.innerText = 'Может, на военную кафедру ходил?';
            questionImage.src = 'images/question2.jpg';  // ВАШЕ ИМЯ
        } else if (step === 3) {
            questionText.innerText = 'Может, повестку получал?';
            questionImage.src = 'images/question3.jpg';  // ВАШЕ ИМЯ
        }
    }

    function showGift() {
        questionContainer.classList.add('hidden');
        giftContainer.classList.remove('hidden');
        
        giftContainer.innerHTML = `
            <div class="gift-card">
                <h2>🎉 С ПРАЗДНИКОМ, РОДНОЙ! 🎉</h2>
                
                <div class="gallery">
                    <button class="gallery-btn prev" onclick="changeImage(-1)">❮</button>
                    <img id="gallery-img" class="gallery-img" src="images/gallery1.jpg" alt="поздравление">
                    <button class="gallery-btn next" onclick="changeImage(1)">❯</button>
                </div>
                
                <p>Листай дальше! 🎁</p>
                
                <audio autoplay loop style="display: none;">
                    <source src="audio/army-song.mp3" type="audio/mpeg">
                </audio>
            </div>
        `;
    }

    btnYes.addEventListener('click', function() {
        showGift();
    });

    btnNo.addEventListener('click', function() {
        if (currentStep === 1) {
            currentStep = 2;
            updateQuestion(2);
        } else if (currentStep === 2) {
            currentStep = 3;
            updateQuestion(3);
        } else if (currentStep === 3) {
            showGift();
        }
    });

    updateQuestion(1);
});

// Галерея
const galleryImages = [
    'images/gallery1.jpg',
    'images/gallery2.jpg', 
    'images/gallery3.jpg',
    'images/gallery4.jpg',
    'images/gallery5.jpg'
];

let currentImageIndex = 0;

window.changeImage = function(direction) {
    currentImageIndex = currentImageIndex + direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('gallery-img').src = galleryImages[currentImageIndex];
};
