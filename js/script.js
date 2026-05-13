const pokemonNome = document.querySelector('.pokemonNome')
const pokemonNumero = document.querySelector('.pokemonNumero')
const pokemonImagem = document.querySelector('.pokemonImagem')

const formulario = document.querySelector('.formulario')
const input = document.querySelector('.inputPesquisa')

const anterior = document.querySelector('.anterior')
const proximo = document.querySelector('.proximo')

let pesquisaPokemon = 1

const buscaPokemon = async (pokemon) => {
    const APIResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResposta.status === 200) {
        const dados = await APIResposta.json()
        return dados
    }
}

const renderizaPokemon = async (pokemon) => {

    pokemonNome.innerHTML = "Loading..."
    pokemonNumero.innerHTML = ''

    const data = await buscaPokemon(pokemon)

    if (data) {
        pokemonImagem.style.display = 'block'
        pokemonNome.innerHTML = data.name
        pokemonNumero.innerHTML = data.id
        pokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        pesquisaPokemon = data.id
        
    } else {
        pokemonImagem.style.display = 'none'
        pokemonNome.innerHTML = "Not found :("
    }
    input.value = ''
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    renderizaPokemon(input.value.toLowerCase())
})

anterior.addEventListener('click', () => {
    if (pesquisaPokemon > 1) {
        pesquisaPokemon--
        renderizaPokemon(pesquisaPokemon)
    }
    
})
proximo.addEventListener('click', () => {
    pesquisaPokemon++
    renderizaPokemon(pesquisaPokemon)

})

renderizaPokemon(pesquisaPokemon)

