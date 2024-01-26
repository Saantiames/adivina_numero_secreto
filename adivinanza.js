const generarNumeroAleatorio = () => {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio
};    

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {

    if (numeroAdivinado == numeroSecreto) { //cambie el === por == porque sino no terminaba el juego diciendo que era mayor
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
        } 
        else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
        } 
        else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
        }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
}
