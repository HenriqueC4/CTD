function Restaurante (nomeRestaurante, ...cardapio)
{
    this.nomeRestaurante = nomeRestaurante;
    this.cardapio = cardapio;
    this.entrada = function () {
    
        return "Bem-vindo ao "+this.nomeRestaurante+". Este é o nosso cardápio: " +this.cardapio+".";
      }   
}

let novoRestaurante = new Restaurante('Pé de Fava', 'Carne amanhecida', ' Ovo cru ', ' Frango sem sal');

console.log(novoRestaurante);
console.log(novoRestaurante.entrada());
