const initialCategories = [
	{ name: 'Vestimenta', description: 'Pilchas para vestirse' },
	{
		name: 'Herramientas',
		description: 'Artefactos que nos faciliten algún tipo de trabajo',
	},
	{
		name: 'Armas',
		description: 'Artefactos que nos faciliten algunos tipos de trabajo (no muy legales)',
	},
	{
		name: 'Maquinarias',
		description: 'Como una herramienta, pero más complejo, grande y caro',
	},
	{ name: 'Ornamental', description: 'Elementos para la decoración' },
	{
		name: 'Libros',
		description: 'Para matar el tiempo de una forma casi productiva',
	},
	{ name: 'Comestibles', description: 'Alimentos, ingredientes, especias' },
];
const initialProducts = [
	{
		name: 'Billetera virtual argenta',
		description: 'Podés comprar y vender australes, patacones y lecops.',
		price: 100,
		stock: 80000,
	},
	{
		name: 'BOOM!',
		description: 'Cada vez que se pronuncia esta palabra, un HENRY consigue trabajo en blanco',
		price: 99990,
		stock: 500,
	},
	{
		name: 'Botas del Gato con Botas',
		description: 'Miau! Para levantar muchas gatitas.',
		price: 100000,
		stock: 1,
	},
	{
		name: 'Buda en código',
		description: '15+ de suerte codeando en Node.js. Esa suerte no se traslada a Express.',
		price: 5000,
		stock: 200,
	},
	{
		name: 'Cohete espacial',
		description: 'Te lleva a Japón o a Corea en 90 minutos.',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Pata de conejo',
		description: '20 + de suerte en la quiniela para tu abuela.',
		price: 500,
		stock: 150,
	},
	{
		name: 'Croma en oferta. Ver descripción.',
		description: 'Renderiza solamente en color amarillo.',
		price: 500,
		stock: 2000,
	},

	{
		name: 'Escalera al cielo',
		description: 'Uno de los pocos senderos que te lleva al paraíso (musical).',
		price: 500,
		stock: 150,
	},
	{
		name: 'Excalibur',
		description: 'La espada clavada en la piedra.',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Horrocrux',
		description: 'Para contener fragmentos de un alma y evitar la muerte.',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Poema de Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		price: 1000,
		stock: 20000,
	},
	{
		name: 'La mano de Dios',
		description: 'Golazo contra los ingleses en el 86.',
		price: 100000,
		stock: 1,
	},
	{
		name: 'Mesa redonda estilo medieval',
		description: 'Es como una mesa… pero redonda. Ideal para regalarle a un caballero de Bretaña.',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Guiso de momia',
		description: 'Para chuparse los dedos.',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Necronomicón',
		description: 'Libro de saberes arcanos y magia ritual, cuya lectura provoca la locura y la muerte',
		price: 500,
		stock: 2000,
	},
	{
		name: 'Santo Grial',
		description: 'Copa usada por Jesucristo en la Última Cena. Convierte el agua en vino.',
		price: 500,
		stock: 2000,
	},
];

const prodXCat = [
	{ productId: 1, categoryId: 2 },
	{ productId: 2, categoryId: 3 },
	{ productId: 3, categoryId: 1 },
	{ productId: 4, categoryId: 5 },
	{ productId: 5, categoryId: 4 },
	{ productId: 6, categoryId: 5 },
	{ productId: 7, categoryId: 5 },
	{ productId: 8, categoryId: 5 },
	{ productId: 9, categoryId: 3 },
	{ productId: 9, categoryId: 5 },
	{ productId: 10, categoryId: 2 },
	{ productId: 11, categoryId: 6 },
	{ productId: 12, categoryId: 3 },
	{ productId: 13, categoryId: 5 },
	{ productId: 14, categoryId: 7 },
	{ productId: 15, categoryId: 6 },
	{ productId: 16, categoryId: 5 },
	{ productId: 16, categoryId: 2 },
];

const bruteDataImages = [
	'billetera',
	'boom',
	'botas',
	'buda',
	'cohetemenem',
	'conejo',
	'croma',
	'escaleraalcielo',
	'excalibur',
	'horrocrux',
	'lorem',
	'manodedios',
	'mesa',
	'momia',
	'necronomicon',
	'santogrial',
];

let imageUrls = []; 

bruteDataImages.map((e, i) => {
	imageUrls.push({ url: e, productId: i + 1 });
	imageUrls.push({ url: e + 2, productId: i + 1 });
	imageUrls.push({ url: e + 3, productId: i + 1 });
});

let initialUsers = [
	{
		email: 'nico@darkmarket.com',
		first_name: 'Nicolás',
		last_name: 'Selicki',
		address: 'San Martín 123',
		locality: 'La Plata',
		state: 'Argentina',
		password: 'Marti te amo',
		admin: true,
	},
	{
		email: 'marti@darkmarket.com',
		first_name: 'Martina',
		last_name: 'Lamejor',
		address: 'San José 123',
		locality: 'Villa Gesell',
		state: 'Argentina',
		password: 'Pimpumpam',
		admin: true,
	},
];

let initialOrders = [
	{
		orderStatus: 'procesando',
		shippingAdress: 'San Martin 1234',
		billingAdress: 'San Martín 1234',
		userId: 1,
	},
	{
		orderStatus: 'carrito',
		shippingAdress: 'San Martin 123',
		billingAdress: 'San Martín 123',
		userId: 1,
	},
	{
		orderStatus: 'carrito',
		shippingAdress: 'Sarmiento S/N',
		billingAdress: 'Sarmiento S/N',
		userId: 2,
	},
];

let initialOrderLines = [
  { 
  productId: 3, 
  orderId: 1, 
  quantity: 6, 
  price: 50 
},
{ 
  productId: 2, 
  orderId: 1, 
  quantity: 3, 
  price: 12 
},
{ 
  productId: 5, 
  orderId: 2, 
  quantity: 7, 
  price: 2354 
},
{ 
  productId: 7, 
  orderId: 2, 
  quantity: 5, 
  price: 123 
},
{ 
  productId: 12, 
  orderId: 3, 
  quantity: 3, 
  price: 5022 
},
{ 
  productId: 11, 
  orderId: 3, 
  quantity: 1, 
  price: 43 
},
{ 
  productId: 2, 
  orderId: 3, 
  quantity: 2, 
  price: 2 
},
];

module.exports = { initialCategories, initialProducts, imageUrls, prodXCat, initialUsers, initialOrders, initialOrderLines };
