import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private data = [
    {
      category: 'Brownies',
      expanded: true,
      products: [
        { id: 0, name: 'Tradicional', price: '8' },
        { id: 1, name: 'Brigadeiro', price: '5' },
        { id: 2, name: 'Oreo', price: '9' },
        { id: 3, name: 'Doce de Leite', price: '7' }
      ]
    },
    {
      category: 'Brownies Gourmet',
      expanded: true,
      products: [
        { id: 4, name: 'Paçoca', price: '8' },
        { id: 5, name: 'Classico', price: '5' },
        { id: 6, name: 'Beijinho', price: '9' },
        { id: 7, name: '2 Leites', price: '7' }
      ]
    },
    {
      category: 'Bolo Brownie',
      products: [
        { id: 8, name: 'Bolo Tradicional Brownie', price: '8' },
        { id: 9, name: 'Bolo 2 Sabores', price: '6' },
        { id: 10, name: 'Bolo Festa', price: '9' },
      ]
    },
    {
      category: 'Brownie Pote',
      products: [
        { id: 11, name: '2 Chocolates', price: '8' },
        { id: 12, name: 'Doce de leite', price: '5' },
        { id: 13, name: 'Break Brownie', price: '9' },
        { id: 14, name: 'Oreo', price: '9' },
      ]
    },
    {
      category: 'Linha Fitness',
      expanded: true,
      products: [
        { id: 15, name: 'Gym', price: '8' },
        { id: 16, name: 'Pouca Caloria', price: '5' },
        { id: 17, name: 'Running', price: '9' }
      ]
    },
    {
      category: 'Linha Bar',
      expanded: true,
      products: [
        { id: 18, name: 'Cerveja', price: '8' },
        { id: 19, name: 'Cerveja Stoul', price: '5' },
        { id: 20, name: 'Noite', price: '9' }
      ]
    },
    {
      category: 'Linha Temática',
      expanded: true,
      products: [
        { id: 21, name: 'Bolo Brownie de Pokemon', price: '8' },
        { id: 22, name: 'Ovo Brownie de Páscoa', price: '5' },
        { id: 23, name: 'Brownie Sob Ecomenda', price: '9' }
      ]
    },
    {
      category: 'Combos',
      expanded: true,
      products: [
        { id: 24, name: '3 Unidades de Brownies', price: '25' },
        { id: 25, name: '4 Unidades de Brownies Temáticos', price: '50' },
        { id: 26, name: '7 dias com a Break Brownie', price: '85' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
