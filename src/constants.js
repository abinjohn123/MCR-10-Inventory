export const LOCAL_STORAGE_KEYS = {
  INVENTORY: 'neog_mcr_10_inventory',
};

export const OVERVIEW_CARDS_LABEL_MAPPING = {
  0: 'Total Stock',
  1: 'Total Delivered',
  2: 'Low Stock Items',
};

export const DEPARTMENT_FILTERS = {
  ALL: {
    label: 'All',
    value: -1,
  },
  KITCHEN: {
    label: 'Kitchen',
    value: 0,
  },
  CLOTHING: {
    label: 'Clothing',
    value: 1,
  },
  TOYS: {
    label: 'Toys',
    value: 2,
  },
};

export const SORT_KEYS = [
  {
    label: 'No Sort',
    value: 0,
  },
  {
    label: 'Name',
    value: 1,
  },
  {
    label: 'Price',
    value: 2,
  },
  {
    label: 'Stock',
    value: 3,
  },
];

export const DEPARTMENTS = [
  {
    label: 'Kitchen',
    param: DEPARTMENT_FILTERS.KITCHEN.value,
  },
  {
    label: 'Clothing',
    param: DEPARTMENT_FILTERS.CLOTHING.value,
  },
  {
    label: 'Toys',
    param: DEPARTMENT_FILTERS.TOYS.value,
  },
];

export const inventoryData = [
  {
    id: 1,
    department: DEPARTMENT_FILTERS.KITCHEN.value,
    name: 'Stainless Steel Cookware Set',
    description:
      'A set of high-quality stainless steel cookware including pots and pans.',
    price: 149.99,
    stock: 15,
    sku: 'KITCH001',
    supplier: 'KitchenWonders Inc.',
    delivered: 15,
    imageUrl: 'https://m.media-amazon.com/images/I/616vJsA33kL.jpg',
  },
  {
    id: 2,
    department: DEPARTMENT_FILTERS.KITCHEN.value,
    name: 'Electric Coffee Maker',
    description:
      'A programmable electric coffee maker for brewing your favorite coffee.',
    price: 39.99,
    stock: 8,
    sku: 'KITCH002',
    supplier: 'BrewMaster Appliances',
    delivered: 2,
    imageUrl:
      'https://4.imimg.com/data4/NF/XX/MY-3554754/electric-coffee-maker-500x500.jpg',
  },
  {
    id: 3,
    department: DEPARTMENT_FILTERS.CLOTHING.value,
    name: "Men's Casual T-Shirt",
    description: 'A comfortable and stylish t-shirt for casual wear.',
    price: 19.99,
    stock: 50,
    sku: 'CLOTH001',
    supplier: 'FashionHub Clothing',
    delivered: 10,
    imageUrl:
      'https://4.imimg.com/data4/KS/HD/MY-718120/mens-casual-t-shirts-500x500.jpg',
  },
  {
    id: 4,
    department: DEPARTMENT_FILTERS.CLOTHING.value,
    name: "Women's Yoga Pants",
    description: 'High-quality yoga pants for maximum comfort during workouts.',
    price: 29.99,
    stock: 30,
    sku: 'CLOTH002',
    supplier: 'ActiveFit Apparel',
    delivered: 10,
    imageUrl:
      'https://images.meesho.com/images/products/7488175/5b8f3_512.webp',
  },
  {
    id: 5,
    department: DEPARTMENT_FILTERS.TOYS.value,
    name: 'Building Blocks Set',
    description:
      'A set of colorful building blocks for creative play and learning.',
    price: 24.95,
    stock: 25,
    sku: 'TOYS001',
    supplier: 'PlayfulMinds Toys',
    delivered: 5,
    imageUrl:
      'https://smalltub.com/products/main/15451427001539408762Building-Blocks-Set1A.jpg',
  },
  {
    id: 6,
    department: DEPARTMENT_FILTERS.TOYS.value,
    name: 'Remote Control Car',
    description:
      'A fun remote control car with realistic features and controls.',
    price: 49.99,
    stock: 12,
    sku: 'TOYS002',
    supplier: 'ZoomZoom Toys',
    delivered: 8,
    imageUrl:
      'https://rukminim2.flixcart.com/image/850/1000/kvfkivk0/remote-control-toy/g/0/3/remote-control-rc-car-4wd-monster-truck-off-road-8-wheels-high-original-imag8c6kexzt9zsa.jpeg?q=90',
  },
  {
    id: 7,
    department: DEPARTMENT_FILTERS.KITCHEN.value,
    name: 'Non-Stick Frying Pan',
    description:
      'A durable non-stick frying pan for easy cooking and cleaning.',
    price: 29.95,
    stock: 20,
    sku: 'KITCH003',
    supplier: 'CookEase Essentials',
    delivered: 10,
    imageUrl:
      'https://www.anko.co.in/cdn/shop/products/71yIQACoAiL.jpg?v=1687520426',
  },
  {
    id: 8,
    department: DEPARTMENT_FILTERS.CLOTHING.value,
    name: "Women's Running Shoes",
    description:
      'High-performance running shoes designed for comfort and speed.',
    price: 79.99,
    stock: 18,
    sku: 'CLOTH003',
    supplier: 'StrideRight Sports',
    delivered: 2,
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2021/7/DU/DV/UN/26489940/kalenji-womens-run-support-running-shoes-500x500.jpg',
  },
  {
    id: 9,
    department: DEPARTMENT_FILTERS.TOYS.value,
    name: 'Educational Puzzle Set',
    description: 'A set of educational puzzles to stimulate young minds.',
    price: 19.95,
    stock: 15,
    sku: 'TOYS003',
    supplier: 'BrainyKids Toys',
    delivered: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/81UK0PkJ6ZL.jpg',
  },
  {
    id: 10,
    department: DEPARTMENT_FILTERS.KITCHEN.value,
    name: 'Blender with Multiple Speeds',
    description:
      'A powerful blender with multiple speed settings for various blending tasks.',
    price: 69.99,
    stock: 10,
    sku: 'KITCH004',
    supplier: 'BlendMaster Appliances',
    delivered: 10,
    imageUrl:
      'https://m.media-amazon.com/images/I/41dMtEjU3IL._AC_UF894,1000_QL80_.jpg',
  },
];
