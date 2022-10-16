
export type ProductModel = {

  id: string,
  name: string,
  price: number,
  image: string
}

const products : ProductModel[] = [
  {
    id: '1',
    name: 'MacBook',
    price: 14000,
    image: 'https://picsum.photos/id/180/2400/1600'
  },

  {
    id: '2',
    name: 'Old Car',
    price: 24000,
    image: 'https://picsum.photos/id/111/4400/2656',
  },
  {
    id: '3',
    name: 'W Shoes',
    price: 1000,
    image: 'https://picsum.photos/id/21/3008/2008',
  },
  {
    id: '4',
    name: 'Product-4',
    price: 14000,
    image: 'https://picsum.photos/id/180/2400/1600',
  },
  {
    id: '5',
    name: 'Product-5',
    price: 24000,
    image: 'https://picsum.photos/id/111/4400/2656',
  },
  {
    id: '6',
    name: 'Product-6',
    price: 1000,
    image: 'https://picsum.photos/id/21/3008/2008',
  },
  {
    id: '7',
    name: 'Product-7',
    price: 14000,
    image: 'https://picsum.photos/id/180/2400/1600',
  },
  {
    id: '8',
    name: 'Product-8',
    price: 24000,
    image: 'https://picsum.photos/id/111/4400/2656',
  },  
]

export {products};
