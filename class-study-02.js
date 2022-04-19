//criar e acessar valores (objeto e array)

//a) array lista de compras 
const listaCompras = ['Banana', 'Maçã', 'Laranja'];

console.log (listaCompras)
console.log (listaCompras.length)

//b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
  const book ={
    title: "As Férias da Minha Vida",
    author: "Clara Savelli",
    pages: 336,
    year: 2019,
    read: false,
}

console.log(book.title)
console.log(book.author)
console.log(book.pages)
console.log(book.year)
console.log(book.read)


//c) Criar um array com varios objetos de livros

const bookList = new Array('As Férias da Minha Vida', 'Fala Sério, Mãe', 'O diário de Bridget Jones');

console.log(bookList)