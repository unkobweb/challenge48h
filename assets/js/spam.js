document.querySelector('.spam_bouton3').addEventListener ('click', (e) => {
    e.preventDefault();

    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();

    clickTarget.removeEventListener('click', (e));

  });
window.alert("ADBLOCK A CESSÉ DE FONCTIONNER !!!");
