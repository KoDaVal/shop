document.querySelectorAll('.agregar').forEach(boton => {
    boton.addEventListener('click', (event) => {
        const producto = event.target.parentElement.querySelector('h2').innerText;
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${producto} agregado al carrito!`);
    });
});
