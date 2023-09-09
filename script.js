document.getElementById('mostrarModal').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.getElementById('miModal').style.display = 'block';
});

document.getElementById('cerrarModal').addEventListener('click', function () {
    document.getElementById('miModal').style.display = 'none';
});