document.querySelectorAll('.miniatura').forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        document.getElementById('imagemDestaque').src = this.src;
    });
});
