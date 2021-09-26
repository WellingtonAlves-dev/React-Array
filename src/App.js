
const produtos = [
  {
    id: 1,
    nome: "Celular",
    preco: "R$ 2000",
    cores: ["#38eeff", "#aa36e0"]
  },
  {
    id: 2,
    nome: "Computador",
    preco: "R$ 999",
    cores: ["#e3fa34", "#fcda30"]
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#261fe0"]
  }
]

function App() {
  
  const dados = produtos.filter(produto => {
    return Number(produto.preco.replace("R$", '')) >= 2000 ? produto : null
  })
  console.log(dados)
  
  return (
    <section>
      {dados.map(produto => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <p>Preco: {produto.preco}</p>
          <ul>
            {
              produto.cores.map(cor => (
                <li 
                style={{backgroundColor: cor, color:"white"}}
                key={cor}>{cor}</li>
              ))
            }
          </ul>
        </div>
      ))}
    </section>
  )
}

export default App;