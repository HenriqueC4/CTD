package models;

public class Administrativo extends Funcionario
{
    public Administrativo(String nome, double salario)
    {
        super(nome, salario);
    }


    @Override
    public double ganhoAnual()
    {
        double meioSalario = super.getSalario()/2;
        return super.ganhoAnual() + meioSalario;
    }

    @Override
    public void exibeDados()
    {
        System.out.println("Nome: "+ super.getNome() + "\n"+ "Salario: " + super.getSalario());
    }
}
