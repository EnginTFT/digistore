export const appState = {
  'digistore-app': {
    'product-list': {
      productsTableData: [
        {
          id: '2348R7-R3423',
          product: 'Sportschuh',
          manufacturer: 'Nike',
          category: ['Sport', 'Schuhe', 'Running'],
          price: '80,00',
          sale: 'not in Sale',
          image: './assets/sneakers.jpg',
        },
        {
          id: '8PP432-DD342',
          product: 'Kopfhörer',
          manufacturer: 'NewComp',
          category: ['Kopfhörer', 'Bluetooth'],
          price: '40,00',
          sale: 'Sale',
          image: './assets/headphone.jpg',
        },
        {
          id: '67PT5W-E12TT',
          product: 'Uhr',
          manufacturer: 'SportsInc',
          category: ['Uhr', 'Sport'],
          price: '110,00',
          sale: 'not in Sale',
          image: './assets/watch.jpg',
        },
      ],
      currentProduct: {
        id: '2348R7-R3423',
        product: 'Sportschuh',
        manufacturer: 'Nike',
        description:
          'Laufschuh\n\nObermaterial: Kunststoff/Textil\nInnenmaterial: Synthetik\nSohle: Abriebfester Gummi\nSportart: Laufen\nVerschluss: Schnürung\nFarbe: Rot\nAußensohle: Flexibel\nInnensohle: Gepolstert\n',
        category: ['Sport', 'Schuhe', 'Running'],
        price: '80,00',
        sale: false,
        image: './assets/sneakers.jpg',
      },
      status: {
        productTableData: {
          loading: false,
          loaded: true,
          success: true,
        },
        currentProduct: {
          loading: false,
          loaded: true,
          success: true,
        },
        putProduct: {
          loading: false,
          loaded: false,
        },
      },
    },
  },
};

export const appMockState = {
  'digistore-app': {
    'product-list': {
      productsTableData: [
        {
          id: '1',
          product: 'test',
          manufacturer: 'test',
          category: ['test'],
          price: '1',
          sale: 'not in Sale',
          image: 'test',
        },
        {
          id: '2',
          product: 'test2',
          manufacturer: 'test2',
          category: ['test2'],
          price: '2',
          sale: 'Sale',
          image: 'test2',
        },
      ],
      currentProduct: {
        id: '1',
        product: 'test',
        manufacturer: 'test',
        description: 'test',
        category: ['test'],
        price: '1',
        sale: false,
        image: 'test',
      },
      status: {
        productTableData: {
          loading: false,
          loaded: false,
        },
        currentProduct: {
          loading: false,
          loaded: false,
        },
        putProduct: {
          loading: false,
          loaded: false,
        },
      },
    },
  },
};
