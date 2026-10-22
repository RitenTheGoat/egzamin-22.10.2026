using System;
class Program
{
    static Random rnd = new Random();

    /*
     nazwa funkcji: Haslo
    opis funkcji: funkacja tworzy hasło z 12 znakami, 3 literami małymi, 3 duzymi, 2 znaki specjalne, 2 znaki polskie, 2 cyfry, następnie miesza je w losowy sposób
    parametry: brak
    zwracany typ i opis: zwraca hasło w postaci stringa które zosało pomieszane w losowy sposób
    autor: 00000000000
     */
    static string Haslo()
    {
        string haslo = "";
        for (int i = 0; i < 3; i++)
        {
            int maleint = rnd.Next(97, 122);
            haslo += (char)maleint;
        }
        for (int i = 0; i < 3; i++)
        {
            int wielkieint = rnd.Next(65, 91);
            haslo += (char)wielkieint;
        }
        for (int i = 0; i < 2; i++)
        {
            string polskiezes = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
            char znaki1 = polskiezes[rnd.Next(polskiezes.Length)];
            haslo += znaki1;
        }
        for (int i = 0; i < 2; i++)
        {
            string specjalnezes = "!@#$%^&*()_+";
            char znaki2 = specjalnezes[rnd.Next(specjalnezes.Length)];
            haslo += znaki2;
        }
        for (int i = 0; i < 2; i++)
        {
            int cyfryint = rnd.Next(48, 58);
            haslo += (char)cyfryint;
        }
        char[] znaki = haslo.ToCharArray();

        for (int i = 0; i < znaki.Length; i++)
        {
            int losowy = rnd.Next(znaki.Length);

            char pomocniczy = znaki[i];
            znaki[i] = znaki[losowy];
            znaki[losowy] = pomocniczy;


        }
        return new string(znaki);

    }
    static void Main()
    {
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine("Wygenerowane hasło: " + Haslo());

        }
    }
}