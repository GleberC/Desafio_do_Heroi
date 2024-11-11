function classificacaoHeroi(){
    let name = document.getElementById('name').value;
    let Exp = parseInt(document.getElementById('Exp').value);
    let nivel;

    if (Exp < 1000){
        nivel="ferro"
    }
    else if (Exp >= 1001 && Exp <= 2000){
        nivel="Bronze"
    }
    else if (Exp >= 2001 && Exp <= 5000){
        nivel="Prata"
       }
    else if (Exp>=5001 && Exp <= 7000){
        nivel="Ouro"
       }  
    else if (Exp >= 7001 && Exp <= 8000){
        nivel="Platina"
       }
    else if (Exp >= 8001 && Exp <= 9000){
        nivel="Ascendente"
       }
       else if (Exp >= 9001 && Exp <= 10000){
        nivel="Imortal"
       }
    else {
        nivel="Radiante"
       }

       document.getElementById('resultado').textContent = `O Herói de nome ${name} está no nível de ${nivel}.`;
       function limparCampo(){
        name.value="";
        Exp.value = "";
       
}

}