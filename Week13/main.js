
    document.getElementById('name').addEventListener('input', function() {
        const errorMessage = document.getElementById('error-message');
        if (this.value.length < 3) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });
