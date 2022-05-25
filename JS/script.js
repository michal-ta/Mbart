var colorChange = document.getElementById('colorpicker');


colorChange.addEventListener('input', function(event) {
    document.getElementById('bgr').style.background=event.target.value;
});