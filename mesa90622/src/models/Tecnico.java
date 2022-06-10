package models;

public class Tecnico extends Funcionario
{

    public Tecnico(String nome, double salario)
    {
        super(nome, salario);
    }

    @Override
    public double ganhoAnual()
    {
        return super.getSalario() + super.ganhoAnual();
    }

    @Override
    public void exibeDados()
    {
        System.out.println("Nome: "+ super.getNome() + "\n"+ "Salario: " + super.getSalario());
    }
}
