// Seleccionar elementos del DOM
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementsByClassName('addItemButton')[0];
const itemList = document.getElementsByName('itemList')[0];

// Función para agregar un nuevo ítem a la lista
function addItem() {
    const newItemText = itemInput.value.trim();

    if (newItemText !== '') {
        // Crear un nuevo elemento li
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Crear un botón para eliminar el ítem
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';

        // Añadir evento al botón de eliminación
        deleteButton.onclick = function () {
            // Añadir la clase de animación de salida
            newItem.style.animation = 'slideOut 0.5s forwards';

            // Esperar a que la animación termine antes de eliminar el ítem
            newItem.addEventListener('animationend', function () {
                itemList.removeChild(newItem);
            });
        };

        // Agregar el botón al nuevo ítem
        newItem.appendChild(deleteButton);

        // Agregar el nuevo ítem a la lista
        itemList.appendChild(newItem);

        // Limpiar el campo de entrada de texto
        itemInput.value = '';
    }
}

// Agregar evento al botón de agregar
addItemButton.addEventListener('click', addItem);

// Agregar evento para que funcione al presionar "Enter"
itemInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});


