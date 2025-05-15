const products = [
  // T-Shirts
  {
    id: 't1',
    name: 'Essentials Tee',
    category: 't-shirts',
    price: 1200,
    description: 'A classic fit 100% cotton tee with a minimalist design. Features our signature "Less Is More" print on the front.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true
  },
  {
    id: 't2',
    name: 'Mindful Tee',
    category: 't-shirts',
    price: 1500,
    description: 'A relaxed fit tee made from organic cotton with "Present" printed across the chest. A reminder to stay in the moment.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  {
    id: 't3',
    name: 'Balance Tee',
    category: 't-shirts',
    price: 1200,
    description: 'A modern fit tee with "Balance" embroidered in small text. Made from premium combed cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/6968343/pexels-photo-6968343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  
  // Sweatshirts
  {
    id: 's1',
    name: 'Comfort Crewneck',
    category: 'sweatshirts',
    price: 2500,
    description: 'A super soft crewneck sweatshirt with "Comfort" embroidered on the chest. Perfect for those chilly evenings.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7691369/pexels-photo-7691369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true
  },
  {
    id: 's2',
    name: 'Flow Sweatshirt',
    category: 'sweatshirts',
    price: 2700,
    description: 'A heavyweight sweatshirt with "Flow" printed in a minimalist font. Made from 100% cotton with a brushed interior.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/5698844/pexels-photo-5698844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  {
    id: 's3',
    name: 'Simplicity Sweatshirt',
    category: 'sweatshirts',
    price: 2500,
    description: 'A relaxed fit sweatshirt with "Simplicity" embroidered on the chest. Perfect for layering in any season.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/5698898/pexels-photo-5698898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5698897/pexels-photo-5698897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  
  // Hoodies
  {
    id: 'h1',
    name: 'Essential Hoodie',
    category: 'hoodies',
    price: 3000,
    description: 'A cotton-blend hoodie with "Essential" printed on the back. Features a front pocket and adjustable drawstrings.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/7691919/pexels-photo-7691919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'h2',
    name: 'Chill Hoodie',
    category: 'hoodies',
    price: 3200,
    description: 'A heavyweight hoodie with "Chill" embroidered on the chest. Perfect for those lazy Sundays.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'h3',
    name: 'Calm Hoodie',
    category: 'hoodies',
    price: 3000,
    description: 'A relaxed fit hoodie with "Calm" printed in a minimalist font. Made from 100% cotton with a soft brushed interior.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5716986/pexels-photo-5716986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  
  // Caps
  {
    id: 'c1',
    name: 'Classic Cap',
    category: 'caps',
    price: 1500,
    description: 'A classic 6-panel cap with "B" embroidered on the front. Features an adjustable strap at the back.',
    sizes: ['One Size'],
    images: [
      'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'c2',
    name: 'Minimalist Cap',
    category: 'caps',
    price: 1700,
    description: 'A streamlined cap with "Less" embroidered in small text. Made from cotton twill with an adjustable strap.',
    sizes: ['One Size'],
    images: [
      'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  
  // Phone Cases
  {
    id: 'p1',
    name: 'Essential Phone Case',
    category: 'phone-cases',
    price: 1200,
    description: 'A sleek phone case with "Essentials" printed in a minimalist font. Available for iPhone models.',
    sizes: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://images.pexels.com/photos/4841572/pexels-photo-4841572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4195499/pexels-photo-4195499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'p2',
    name: 'Minimalist Phone Case',
    category: 'phone-cases',
    price: 1400,
    description: 'A minimalist phone case with a small "B" logo. Made from eco-friendly materials.',
    sizes: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://images.pexels.com/photos/5085335/pexels-photo-5085335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5085364/pexels-photo-5085364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  },
  
  // Tote Bags
  {
    id: 'b1',
    name: 'Classic Tote',
    category: 'tote-bags',
    price: 1000,
    description: 'A durable canvas tote with "Basics" printed on one side. Perfect for grocery shopping or daily use.',
    sizes: ['One Size'],
    images: [
      'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5704723/pexels-photo-5704723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'b2',
    name: 'Every Day Tote',
    category: 'tote-bags',
    price: 1200,
    description: 'A premium organic cotton tote with "Every Day" printed in a minimalist font. Features an inner pocket.',
    sizes: ['One Size'],
    images: [
      'https://images.pexels.com/photos/4226866/pexels-photo-4226866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4226867/pexels-photo-4226867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: false,
    inStock: true
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return category ? products.filter(product => product.category === category) : products;
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export default products;