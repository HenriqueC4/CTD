// Repetir como um papagaio

for (var i = 1; i <= 5; i++)
{
    console.log('Olá mundo.');
}

// Contando números ímpares

for (var impar = 1; impar <= 10; impar++)
{
    if (impar % 2 != 0)
    {
        console.log(impar);
    }
}

// Criando a tabuada

for (let tabuada = 1; tabuada <= 10; tabuada++)
{
    for (var y = 1; y <= 10; y++ )
    {
        console.log(tabuada +  ' X ' + y + ' = ' + y*tabuada);
    }

    console.log(" ");
}