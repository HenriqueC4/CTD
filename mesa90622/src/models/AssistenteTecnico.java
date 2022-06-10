package models;

public class AssistenteTecnico extends Funcionario
{
    private double bonus;

    public AssistenteTecnico(String nome, double salario, double bonus)
    {
        super(nome, salario);
        this.bonus = bonus;
    }

    public double addBonus()
    {
       return super.addAumento(this.bonus);
    }

    @Override
    public void exibeDados()
    {
        System.out.println("Nome: "+ super.getNome() + "\n"+ "Salario: " + super.getSalario());
    }
}
