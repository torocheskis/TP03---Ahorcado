let palabra;
let palabraOculta = [];
let intentos = 10;

window.onload = function ()
{
    palabra = document.getElementById("palabra").value;

    for(let i = 0; i < palabra.length; i++)
    {
        palabraOculta.push("_");
    }

    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");
}

function ArriesgarLetra()
{
    if(intentos == 0 || !palabraOculta.includes("_"))
    {
        return;
    }

    let letra = document.getElementById("letra").value;

    letra = letra.toUpperCase();

    let encontro = false;

    for(let i = 0; i < palabra.length; i++)
    {
        if(palabra[i] == letra)
        {
            palabraOculta[i] = letra;
            encontro = true;
        }
    }

    if(encontro == false)
    {
        intentos--;
    }

    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");

    document.getElementById("intentos").innerHTML ="Intentos restantes: " + intentos;

if(!palabraOculta.includes("_"))
{
    document.getElementById("mensaje").innerHTML = "Felicidades, ganaste";
    document.getElementById("mensaje").style.color = "green";

    document.getElementById("letra").disabled = true;
}

if(intentos == 0)
{
    document.getElementById("mensaje").innerHTML = "Perdiste, la palabra era: " + palabra;

    document.getElementById("mensaje").style.color = "red";

    document.getElementById("letra").disabled = true;
}

    document.getElementById("letra").value = "";
}