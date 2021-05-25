function valider(){
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;

    let imc = poids/(taille*taille);
    let roundedImc = Math.round(imc * 100) / 100;
    let resultat = document.getElementById("resultat");
    if(imc<18.5)
    resultat.innerHTML= "Votre IMC est :" + roundedImc + "vous êtes un peu Chétif!";
    if(18.5<imc<25)
    resultat.innerHTML= "Votre IMC est :" + roundedImc + "vous êtes Nickel!";
    if(imc>25)
    resultat.innerHTML= "Votre IMC est :" + roundedImc + "vous êtes un peu Costaud!";
}