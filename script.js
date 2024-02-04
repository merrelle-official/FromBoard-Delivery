const prevElement = document.getElementById("prev-feedback");
const nextElement = document.getElementById("next-feedback");
const feedbackCards = document.querySelectorAll(".feedback__card");
const feedbackContainer = document.querySelector(".feedback__cards");
let currentCardNum = 0;
let isAnimating = false;

if (currentCardNum === feedbackCards.length - 2 || feedbackCards.length < 3){
    nextElement.disabled = true;
}

if (currentCardNum === 0){
    prevElement.disabled = true;
}

function slideFeedback(index){
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    if (index && currentCardNum<(feedbackCards.length-2)){
        prevElement.disabled = false;
        feedbackContainer.style.left = parseInt(window.getComputedStyle(feedbackContainer).left) - feedbackCards[0].offsetWidth - parseInt(window.getComputedStyle(feedbackContainer).gap) + 'px';
        currentCardNum++;
        if (currentCardNum === feedbackCards.length - 2){
            nextElement.disabled = true;
        }
    } else if (!index && currentCardNum != 0){
        nextElement.disabled = false;
        feedbackContainer.style.left = parseInt(window.getComputedStyle(feedbackContainer).left) + feedbackCards[0].offsetWidth + parseInt(window.getComputedStyle(feedbackContainer).gap) + 'px';
        currentCardNum--;
        if (currentCardNum === 0){
            prevElement.disabled = true;
        }
    }

    feedbackContainer.addEventListener('transitionend', function handleTransitionEnd() {
        isAnimating = false;
        feedbackContainer.removeEventListener('transitionend', handleTransitionEnd);
    });
}

prevElement.addEventListener('click', function(){
    slideFeedback(0);
});

nextElement.addEventListener('click', function(){
    slideFeedback(1);
});