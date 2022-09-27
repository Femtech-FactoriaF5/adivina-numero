/**
 * Adivina el número
 * La máquina tiene un número secreto al azar.
 * La jugadora tiene tres intentos.
 * Cada intento consume una vida
 * Si acierta sacamos un mensaje "HAS GANADO"
 * Si consume todas las vidas un mensaje "HAS PERDIDO" y se acaba el juego
 * Si fallas pero te quedan vidas saca mensaje "VUELVE A INTENTARLO"
 **/

/* DEBERES
1.función calcular número secreto
2.función comparar número secreto con número de la jugadora (PROMPT)
3.bucle while que ejecute comparar número secreto
*/

/* Motor del juego */
//Se tiene que implementar algún tipo de recursión, todo el juego va en su interior:
// - setInterval
// - recursión
// - while

export const message = {
    win: "YOU WIN",
    loose: "YOU LOOSE",
    next: "TRY AGAIN"
}

export const randomSecretGeneration = () => Math.floor(Math.random()*10)

export const playEngine = (secret) => {
    let attemps=0;
    let response = message.loose;
    while(attemps<3){
        const number = +prompt('Guess the secret number?');

        if(secret !== number){
            attemps++;
            alert(`Te quedan ${3-attemps} intentos`);
        } else {
        response = message.win;
        break;
    }
    }
    return response
}


const findSecret = (secret) => {
    const response = playEngine(secret);
    alert(response);

}

window.addEventListener('load', ()=> findSecret(randomSecretGeneration()));

