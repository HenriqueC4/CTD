function podeSubir(alturaM, acompanhada)
{
    if (alturaM > 1.4 && alturaM <= 2)
    {
        console.log('Acesso autorizado.');
        return true;
    }
    else if (alturaM >= 1.2 && alturaM <= 1.4 && acompanhada == true)
    {    
        console.log('Acesso autorizado somente com acompanhante.');
        return true;
    }
    else
    {
        console.log('Acesso negado.');
        return true;
    }
}

podeSubir(1.2, true);