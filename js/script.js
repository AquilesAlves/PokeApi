const buscaPokemon = (pokemon) => {

    const APIResposta = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIResposta)

}

buscaPokemon()