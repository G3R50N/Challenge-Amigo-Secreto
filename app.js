// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
// Array para almacenar los amigos
let amigos = [];

// Validar que el nombre sea correcto (solo letras y espacios)
function esNombreValido(nombre) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return regex.test(nombre.trim());
}

// Agregar amigo
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre.');
    return;
  }

  if (!esNombreValido(nombre)) {
    alert('Ingresa solo nombres válidos (sin números ni caracteres especiales).');
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert('Este nombre ya fue agregado.');
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = '';
}

// Mostrar lista de amigos

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.classList.add('item-amigo'); // clase para estilo

    const span = document.createElement('span');
    span.textContent = `${index + 1}. ${amigo}`;

    // Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '❌';
    btnEliminar.classList.add('btn-eliminar');
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Eliminar amigo de la lista
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  mostrarLista();
}

// Sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
