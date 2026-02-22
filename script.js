// ПОЛНЫЙ КОД СКРИПТА - копируйте целиком!

document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const questionContainer = document.getElementById('question-container');
    const giftContainer = document.getElementById('gift-container');
    const questionText = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    // Шаг игры (1, 2 или 3)
    let currentStep = 1;

    // Функция для обновления вопроса и картинки
    function updateQuestion(step) {
        if (step === 1) {
            questionText.innerText = 'Ты служил?';
            questionImage.src = 'images/question1?123';
        } else if (step === 2) {
            questionText.innerText = 'Может, на военную кафедру ходил?';
            questionImage.src = 'images/question2?123';
        } else if (step === 3) {
            questionText.innerText = 'Может, повестку получал?';
            questionImage.src = 'images/question3?123';
        }
    }

    // ===== НОВАЯ ФУНКЦИЯ ПОКАЗА ОТКРЫТКИ С ГАЛЕРЕЕЙ =====
    function showGift() {
        // Прячем вопросы
        questionContainer.classList.add('hidden');
        // Показываем подарок
        giftContainer.classList.remove('hidden');
        
        // Вставляем открытку с галереей
        giftContainer.innerHTML = `
            <div class="gift-card">
                <h2>🎉 С ПРАЗДНИКОМ, РОДНОЙ! 🎉</h2>
                
                <!-- Галерея картинок -->
                <div class="gallery">
                    <button class="gallery-btn prev" onclick="changeImage(-1)">❮</button>
                    <img id="gallery-img" class="gallery-img" src="images/gallery1?123" alt="поздравление">
                    <button class="gallery-btn next" onclick="changeImage(1)">❯</button>
                </div>
                
                <p>Листай дальше! 🎁</p>
                
                <!-- Песня (без индикатора) -->
                <audio autoplay loop style="display: none;">
                    <source src="audio/army-song.mp3" type="audio/mpeg">
                </audio>
            </div>
        `;
    }

    // Кнопка ДА
    btnYes.addEventListener('click', function() {
        showGift();
    });

    // Кнопка НЕТ
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

    // Запускаем первый вопрос
    updateQuestion(1);
});

// ===== ГАЛЕРЕЯ (работает отдельно) =====
// Массив с картинками для галереи
const galleryImages = [
    'images/gallery1?123',
    'images/gallery2?123', 
    'images/gallery3?123',
    'images/gallery4?123',
    'images/gallery5?123'  // добавьте сколько нужно
];

let currentImageIndex = 0;

// Функция для переключения картинок
window.changeImage = function(direction) {
    currentImageIndex = currentImageIndex + direction;
    
    // Зацикливаем галерею (чтобы после последней шла первая)
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    // Меняем картинку
    document.getElementById('gallery-img').src = galleryImages[currentImageIndex];
};