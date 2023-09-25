

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const overlay = document.getElementById("overlay");

    openButton.addEventListener("click", function () {
        overlay.classList.add("is-open");
    });

    closeButton.addEventListener("click", function () {
        overlay.classList.remove("is-open")
    });
});

const textarea = document.querySelector('.comment-ar');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', updateCharCount);

function updateCharCount() {
    const text = textarea.value; 
    const textLength = text.length; 
    const maxLength = parseInt(textarea.getAttribute('maxlength')); 
    charCount.textContent = `${textLength}/${maxLength}`; 
}

  updateCharCount();
