let aprobados = document.querySelector('.aprobados-div');
let desaprobados = document.querySelector('.desaprobados-div');

const datos = async () => {
    try {axios('index.txt')
    .then(res => {
        let numeroAprobados = res.data.aprobados;
        let numeroDesaprobados = res.data.desaprobados;
        aprobados.innerHTML = `<b>${numeroAprobados}</b>`;
        desaprobados.innerHTML = `<b>${numeroDesaprobados}</b>`;
    })} catch(e) {
        console.log(e)
    }
}
    let button = document.querySelector('#mostrarDatos').addEventListener('click', datos);