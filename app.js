let amigos = [];

function esNombreValido(nombre) {
  const regex = /^[a-zA-ZñÑ\s]+$/;
  return regex.test(nombre);
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!esNombreValido(nombre)) {
    alert("Ingrese un nombre válido");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe ingresar al menos 2 nombres para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
