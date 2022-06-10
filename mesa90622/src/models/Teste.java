package models;

public class Teste
{
    public static void main(String[] args)
    {
        AssistenteAdm adm1 = new AssistenteAdm("Marcio", 1500.00, false, 300.00);

        adm1.addNoturno();
        adm1.exibeDados();

        Tecnico tec1 = new Tecnico("Marcela", 2000.00);

        tec1.exibeDados();
    }
}
