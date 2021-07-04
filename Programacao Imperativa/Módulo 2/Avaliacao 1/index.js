function microondas(alimento, tempo)
{
    let resposta = '';

    switch (alimento)
    {
        case 1: 
            if (tempo >= 2 * 10 && tempo < 3 * 10)   
            {
                resposta = 'A comida queimou.';
            }
            else if (tempo < 10)
            {
                resposta = 'Tempo insuficiente.';
            }
            else if (tempo >= 3 * 10)
            {
                resposta = 'Kabum!';
            }
            else
            {
                resposta = 'Prato pronto, bom apetite!';
            }
            break;
        case 2: 
            if (tempo >= 2 * 8 && tempo < 3 * 8)   
            {
                resposta = 'A comida queimou.';
            }
            else if (tempo < 8)
            {
                resposta = 'Tempo insuficiente.';
            }
            else if (tempo >= 3 * 8)
            {
                resposta = 'Kabum!';
            }
            else
            {
                resposta = 'Prato pronto, bom apetite!';
            }
            break;
        case 3: 
            if (tempo >= 2 * 15 && tempo < 3 * 15)   
            {
                resposta = 'A comida queimou.';
            }
            else if (tempo < 15)
            {
                resposta = 'Tempo insuficiente.';
            }
            else if (tempo >= 3 * 15)
            {
                resposta = 'Kabum!';
            }
            else
            {
                resposta = 'Prato pronto, bom apetite!';
            }
            break;
        case 4: 
            if (tempo >= 2 * 12 && tempo < 3 * 12)   
            {
                resposta = 'A comida queimou.';
            }
            else if (tempo < 12)
            {
                resposta = 'Tempo insuficiente.';
            }
            else if (tempo >= 3 * 12)
            {
                resposta = 'Kabum!';
            }
            else
            {
                resposta = 'Prato pronto, bom apetite!';
            }
            break;
        case 5: 
            if (tempo >= 2 * 8 && tempo < 3 * 8)   
            {
                resposta = 'A comida queimou.';
            }
            else if (tempo < 8)
            {
                resposta = 'Tempo insuficiente.';
            }
            else if (tempo >= 3 * 8)
            {
                resposta = 'Kabum!';
            }
            else
            {
                resposta = 'Prato pronto, bom apetite!';
            }
            break;
        
        default:
            resposta = 'Prato inexistente.';
    }

    return resposta;
}

console.log(microondas(2, 25));