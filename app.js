let amigos = [];

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "" || /\d/.test(nombre)) {
        alert("Por favor ingrese un nombre válido sin números.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para sortear.");
        return;
    }

    let disponibles = [...amigos];
    let sorteos = [];

    amigos.forEach(amigo => {
        let opciones = disponibles.filter(a => a !== amigo);
        let elegido = opciones[Math.floor(Math.random() * opciones.length)];

        sorteos.push(`${amigo} → ${elegido}`);

        disponibles = disponibles.filter(a => a !== elegido);
    });

    mostrarResultados(sorteos);
}

function mostrarResultados(sorteos) {
    resultado.innerHTML = "";
    sorteos.forEach(r => {
        const li = document.createElement('li');
        li.textContent = r;
        resultado.appendChild(li);
    });
}
