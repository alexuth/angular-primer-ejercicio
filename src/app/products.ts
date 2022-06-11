export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Caguama TKT',
    price: 35,
    description: 'Botella de 1.2 Litros'
  },
  {
    id: 2,
    name: 'Six TKT',
    price: 70,
    description: 'Lata de 355 ml c/hielo'
  },
  {
    id: 3,
    name: '12 Pack TKT',
    price: 130,
    description: 'Lata de 355 s/Hielo'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/