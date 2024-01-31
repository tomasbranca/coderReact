const products = [
  {
    id: "000",
    brand: "adidas",
    name: "Samba",
    model: "OG - White",
    price: 183999,
    category: "sneakers",
    sizeStock: {
      8: 3,
      8.5: 8,
      9: 12,
      9.5: 5,
      10: 14,
      10.5: 2,
      11: 7,
      11.5: 10,
      12: 0,
      12.5: 6,
      13: 4,
      13.5: 9,
    },
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F10%2Fthe-jason-dill-x-adidas-samba-white-black-receives-patent-leather-rework-002.jpg?cbr=1&q=90",
  },
  {
    id: "001",
    brand: "Nike",
    name: "Zoom Vomero 5",
    model: "Photon Dust",
    price: 223999,
    category: "running",
    sizeStock: {
      8: 6,
      8.5: 9,
      9: 12,
      9.5: 3,
      10: 14,
      10.5: 2,
      11: 8,
      11.5: 4,
      12: 11,
      12.5: 7,
      13: 1,
      13.5: 10,
    },
    img: "https://media.revistagq.com/photos/6384938bcc4d656ec28413cc/master/w_1920%2Cc_limit/1_nike-zoom-vomero-5-photon-dust.jpeg",
  },
  {
    id: "002",
    brand: "New Balance",
    name: "1600",
    model: "Ivory",
    price: 139999,
    category: "sneakers",
    sizeStock: {
      8: 7,
      8.5: 11,
      9: 3,
      9.5: 15,
      10: 5,
      10.5: 8,
      11: 2,
      11.5: 13,
      12: 6,
      12.5: 4,
      13: 9,
      13.5: 1,
    },
    img: "https://media.revistagq.com/photos/637605c19749ffe8a917fa87/master/w_1920%2Cc_limit/0new-balance-1600-ivory.jpeg",
  },
  {
    id: "003",
    brand: "Nike",
    name: "Craft General Purpose",
    model: "Dark Sulfur",
    price: 254999,
    category: "sneakers",
    sizeStock: {
      8: 3,
      8.5: 12,
      9: 8,
      9.5: 5,
      10: 1,
      10.5: 14,
      11: 7,
      11.5: 2,
      12: 10,
      12.5: 6,
      13: 4,
      13.5: 9,
    },
    img: "https://media.revistagq.com/photos/6313012e22595362b0c1df73/master/w_1920%2Cc_limit/TS_GPS_Sulpher_Pair_original.jpg",
  },
  {
    id: "004",
    brand: "Nike",
    name: "Zoom Cortez X Sacai",
    model: "White And University Red",
    price: 156999,
    category: "sneakers",
    sizeStock: {
      8: 9,
      8.5: 5,
      9: 2,
      9.5: 14,
      10: 8,
      10.5: 1,
      11: 13,
      11.5: 7,
      12: 4,
      12.5: 10,
      13: 6,
      13.5: 0,
    },
    img: "https://cdn.havenshop.com/4b6c2bcc99cc593d7981184880343803ac616196-3072x2048.jpg?q=95&fit=max&auto=format",
  },
  {
    id: "005",
    brand: "adidas",
    name: "4DFWD (2022)",
    model: "Dash Gray",
    price: 243999,
    category: "running",
    sizeStock: {
      8: 5,
      8.5: 12,
      9: 3,
      9.5: 8,
      10: 2,
      10.5: 14,
      11: 6,
      11.5: 10,
      12: 1,
      12.5: 9,
      13: 4,
      13.5: 7,
    },
    img: "https://static.ftshp.digital/img/p/9/7/5/4/8/7/975487.jpg",
  },

  {
    id: "006",
    brand: "Jordan",
    name: "Luka 1",
    model: "Red",
    price: 174999,
    category: "basketball",
    sizeStock: {
      8: 12,
      8.5: 4,
      9: 8,
      9.5: 10,
      10: 2,
      10.5: 14,
      11: 7,
      11.5: 1,
      12: 9,
      12.5: 5,
      13: 11,
      13.5: 3,
    },
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/7APZUZ32FBDJZN6UI64KOACKP4.jpg",
  },
  {
    id: "007",
    brand: "Nike",
    name: "Mercurial TN",
    model: "Voltage Purple",
    price: 305999,
    category: "futbol",
    sizeStock: {
      8: 10,
      8.5: 7,
      9: 5,
      9.5: 15,
      10: 3,
      10.5: 0,
      11: 6,
      11.5: 3,
      12: 3,
      12.5: 4,
      13: 6,
      13.5: 0,
    },
    img: "https://cms-cdn.thesolesupplier.co.uk/2024/01/nikemercurial1_w1160_h672.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 1000);
  });
};
