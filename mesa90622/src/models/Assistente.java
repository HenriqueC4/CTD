package models;

public class Assistente extends Funcionario
{
    private int matricula;

    public Assistente(String nome, double salario, int matricula)
    {
        super(nome, salario);
        this.matricula = matricula;
    }

    @Override
    public void exibeDados()
    {
        System.out.println("Nome: "+ super.getNome() + "\n"+ "Salario: " + super.getSalario() + "\n" + "Matricula: " + this.matricula);
    }
}
