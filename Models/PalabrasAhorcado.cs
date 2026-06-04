namespace TP03___Ahorcado.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        palabras = new List<string>();

        palabras.Add("LIBERTADORES");
        palabras.Add("PITYMARTINEZ");
        palabras.Add("UNIVERSIDADCATOLICA");
        palabras.Add("ALIANZALIMA");
        palabras.Add("FLUMINENSE");
        palabras.Add("JOHNKENNEDY");
        palabras.Add("BIRIBIRI");
        palabras.Add("QUINTERO");
        palabras.Add("GALLARDO");
        palabras.Add("BERNABEU");
    }

    public string ObtenerPalabra()
    {
        Random rnd = new Random();

        int posicion = rnd.Next(0, palabras.Count);

        return palabras[posicion];
    }
}