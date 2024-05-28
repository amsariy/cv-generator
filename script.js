document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('cv-name').innerText = document.getElementById('name').value;
    document.getElementById('cv-email').innerText = document.getElementById('email').value;
    document.getElementById('cv-phone').innerText = document.getElementById('phone').value;
    document.getElementById('cv-address').innerText = document.getElementById('address').value;
    document.getElementById('cv-education').innerText = document.getElementById('education').value;
    document.getElementById('cv-experience').innerText = document.getElementById('experience').value;
    document.getElementById('cv-skills').innerText = document.getElementById('skills').value;

    
    const photoInput = document.getElementById('photo');
    const cvPhoto = document.getElementById('cv-photo');

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cvPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    document.getElementById('cv-result').classList.remove('hidden');
    document.getElementById('download-btn').classList.remove('hidden');
});

document.getElementById('download-btn').addEventListener('click', function() {
    html2canvas(document.getElementById('cv-result'), {scale: 2}).then(canvas => {
        let link = document.createElement('a');
        link.download = 'cv.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    });
});
