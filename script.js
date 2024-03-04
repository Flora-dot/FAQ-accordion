const toggleButtons = document.querySelectorAll('button');

toggleButtons.forEach(button => {
    button.addEventListener('click', 
    function toggleResponse() {
        const response = button.parentElement.nextElementSibling;
        response.classList.toggle('hidden');
    });
});


