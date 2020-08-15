const initialCategories = [
    { name: "Vestimenta", description: "Pilchas para vestirse" },
    {
      name: "Herramientas",
      description: "Artefactos que nos faciliten algún tipo de trabajo",
    },
    {
      name: "Armas",
      description:
        "Artefactos que nos faciliten algunos tipos de trabajo (no muy legales)",
    },
    {
      name: "Maquinarias",
      description: "Como una herramienta, pero más complejo, grande y caro",
    },
    { name: "Ornamental", description: "Elementos para la decoración" },
    {
      name: "Libros",
      description: "Para matar el tiempo de una forma casi productiva",
    },
    { name: "Comestibles", description: "Alimentos, ingredientes, especias" },
  ]
  const initialProducts = [
    {
        name: "Billetera virtual argenta",
        description: "Podés comprar y vender australes, patacones y lecops.",
        price: 100,
        stock: 80000,
      },
      {
        name: "BOOM!",
        description: "Cada vez que se pronuncia esta palabra, un HENRY consigue trabajo en blanco",
        price: 99990,
        stock: 500,
      },    
      {
        name: "Botas del Gato con Botas",
        description: "Miau! Para levantar muchas gatitas.",
        price: 100000,
        stock: 1,
      },
    {
        name: "Buda en código",
        description: "15+ de suerte codeando en Node.js. Esa suerte no se traslada a Express.",
        price: 5000,
        stock: 200,
      },
    {
      name: "Cohete espacial",
      description: "Te lleva a Japón o a Corea en 90 minutos.",
      price: 500,
      stock: 2000,
    },
    {
        name: "Croma en oferta. Ver descripción.",
        description: "Renderiza solamente en color amarillo.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Pata de conejo",
        description: "20 + de suerte en la quiniela para tu abuela.",
        price: 500,
        stock: 150,
      },
      {
        name: "Escalera al cielo",
        description: "Uno de los pocos senderos que te lleva al paraíso (musical).",
        price: 500,
        stock: 150,
      },
      {
        name: "Excalibur",
        description: "La espada clavada en la piedra.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Horrocrux",
        description: "Para contener fragmentos de un alma y evitar la muerte.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Poema de Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 1000,
        stock: 20000,
      },
    {
        name: "La mano de Dios",
        description: "Golazo contra los ingleses en el 86.",
        price: 100000,
        stock: 1,
      },
      {
        name: "Mesa redonde",
        description: "Es como una mesa… pero redonda. Ideal para regalarle a un caballero de Bretaña.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Guiso de momia",
        description: "Para chuparse los dedos.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Necronomicón",
        description: "Libro de saberes arcanos y magia ritual, cuya lectura provoca la locura y la muerte",
        price: 500,
        stock: 2000,
      },
      {
        name: "Santo Grial",
        description: "Copa usada por Jesucristo en la Última Cena. Convierte el agua en vino.",
        price: 500,
        stock: 2000,
      },
  ]

const prodXCat = [
    { productId: 1, categoryId: 1 },
    { productId: 1, categoryId: 2 },
    { productId: 2, categoryId: 1 },
    { productId: 3, categoryId: 2 },
    { productId: 3, categoryId: 1 },
  ]  

const bruteDataImages = ["billetera", "boom", "botas", "buda", "cohetemenem",
 "conejo", "croma","escaleraalcielo","excalibur","horrocrux", "lorem", "manodedios",
  "mesa","momia", "necronomicon", "santogrial"]

  let imageUrls = []

  bruteDataImages.map((e, i) =>{
    imageUrls.push({url: e, productId: i+1})
    imageUrls.push({url: e + 2, productId: i+1})
    imageUrls.push({url: e + 3, productId: i+1})
  })
 


 module.exports = { initialCategories, initialProducts, imageUrls, prodXCat }