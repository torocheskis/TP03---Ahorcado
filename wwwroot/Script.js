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

    document.getElementById("palabraOculta").innerHTML =
    palabraOculta.join(" ");
}

function ArriesgarLetra()
{
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

    document.getElementById("palabraOculta").innerHTML =
    palabraOculta.join(" ");

    document.getElementById("intentos").innerHTML = "Intentos restantes: " + intentos;

    if(!palabraOculta.includes("_"))
    {
        document.getElementById("mensaje").innerHTML = "GANASTE";
    }

    if(intentos == 0)
    {
        document.getElementById("mensaje").innerHTML = "PERDISTE, la palabra era: " + palabra;
    }

    document.getElementById("letra").value = "";
}