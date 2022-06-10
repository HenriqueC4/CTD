package models;

public class AssistenteAdm extends Funcionario
{
    private boolean turno;
    private double adicional;



    public AssistenteAdm(String nome, double salario, boolean turno, double adicional)
    {
        super(nome, salario);
        this.turno = turno;
        this.adicional = adicional;
    }

    public double addNoturno()
    {
        if(turno)
        {
            return super.getSalario();
        }
        return super.addAumento(this.adicional);
    }

    public String turno()
    {
        if (turno)
        {
            return "Dia";
        }
        return "Noite";
    }

    @Override
    public void exibeDados()
    {
        System.out.println("Nome: "+ super.getNome() + "\n"+ "Salario: " + super.getSalario() + "\n" + "Turno: " + turno());
    }
}
