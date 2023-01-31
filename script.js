let pessoas = ["Paulo","Pedro","Ioanis","Ricardo","João"]

//console.log(pessoas)

pessoas.unshift("Clara")

//console.log(pessoas)

pessoas.pop()

//console.log(pessoas)

pessoas.push("Marcelo","Gabriel")

//console.log(pessoas)

pessoas.shift()

console.log(pessoas)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

console.log(numbers)

let obj = {
    nome: "Paulo",
    idade: 19,
    cidade: "rio de janeiro"
  }

obj.cor = "azul"

delete obj.nome 

console.log(obj)

let cadastro = [
    {
        nome: "Clara",
        telefone: 4545-4545,
        idade:19,
        amigos:['Paulo', 'Ioanis' , 'Pedro','Mikael']
    },
    {
        nome: "Ioanis",
        telefone: 2659-8525,
        idade:20,
        amigos:["Paulo", "Clara","Pedro","Mikael"]
    },
    {
        nome: "Paulo",
        telefone: 8954-7845,
        idade:19,
        amigos:["Clara", "Ioanis","Pedro","Mikael"]
    },
    {
        nome: "Pedro",
        telefone: 7545-9522,
        idade:11,
        amigos:["Paulo", "Ioanis","Clara","Mikael"]
    },
    {
        nome: "Mikael",
        telefone: 4545-4545,
        idade:21,
        amigos:["Paulo", "Ioanis","Pedro","Clara"]
    }
]

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1])
