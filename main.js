
document.getElementById('popup-open-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
    this.style.display = 'none'; // This will hide the button
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('popup-open-btn').style.display = 'block'; // This will show the button again when the popup is closed
});
