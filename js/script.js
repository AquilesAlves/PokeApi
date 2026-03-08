const buscaPokemon = async (pokemon) => {

    const APIResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
   
    const dados = await APIResposta.json()
   
    return dados

}