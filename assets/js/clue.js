console.log("Le dossier contient un fichier js intriguant. Essayez d'en savoir plus !")


function salut(){
    var indice=['06a05b13819f4afad991cc2143732b66', '81d6f316d169150d0e8733866c38684d', '67524210524b62ad06b8fc7c6dc7135e', '2c7e83387c5037f434548b3f015d6a77', '2eb9ba676677383f40fe1edb2e71bf53', 'ab2fa9b37515f94bc40919cbb9d02b45'];
    const randomIndice = indice[Math.floor(Math.random() * indice.length)];
    console.log("Vous avez retrouvé :" , randomIndice ,". Mais c'est illisible !");
}

