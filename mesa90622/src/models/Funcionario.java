package models;

public abstract class Funcionario
{
    private String nome;
    private double salario;

    public Funcionario(String nome, double salario)
    {
        this.nome = nome;
        this.salario = salario;
    }

    public double addAumento(double valor)
    {
        return this.salario += valor;
    }

    public double ganhoAnual()
    {
        return this.salario*12;
    }

    public abstract void exibeDados();

    public String getNome()
    {
        return nome;
    }

    public double getSalario()
    {
        return salario;
    }
}
