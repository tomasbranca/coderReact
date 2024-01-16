const products = [
  {
    id: "000",
    brand: "adidas",
    name: "Samba",
    model: "OG - White",
    price: 183.999,
    category: "Sneakers",
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F10%2Fthe-jason-dill-x-adidas-samba-white-black-receives-patent-leather-rework-002.jpg?cbr=1&q=90",
  },
  {
    id: "001",
    brand: "Nike",
    name: "Zoom Vomero 5",
    model: "Photon Dust",
    price: 223.999,
    category: "Running",
    img: "https://media.revistagq.com/photos/6384938bcc4d656ec28413cc/master/w_1920%2Cc_limit/1_nike-zoom-vomero-5-photon-dust.jpeg",
  },
  {
    id: "002",
    brand: "New Balance",
    name: "1600",
    model: "Ivory",
    price: 139.999,
    category: "Sneakers",
    img: "https://media.revistagq.com/photos/637605c19749ffe8a917fa87/master/w_1920%2Cc_limit/0new-balance-1600-ivory.jpeg",
  },
  {
    id: "003",
    brand: "Nike",
    name: "Craft General Purpose",
    model: "Dark Sulfur",
    price: 254.999,
    category: "Sneakers",
    img: "https://media.revistagq.com/photos/6313012e22595362b0c1df73/master/w_1920%2Cc_limit/TS_GPS_Sulpher_Pair_original.jpg",
  },
  {
    id: "004",
    brand: "Nike",
    name: "Zoom Cortez X Sacai",
    model: "White And University Red",
    price: 156.999,
    category: "Sneakers",
    img: "https://cdn.havenshop.com/4b6c2bcc99cc593d7981184880343803ac616196-3072x2048.jpg?q=95&fit=max&auto=format",
  },
  {
    id: "005",
    brand: "adidas",
    name: "4DFWD (2022)",
    model: "Dash Gray",
    price: 243.999,
    category: "Running",
    img: "https://static.ftshp.digital/img/p/9/7/5/4/8/7/975487.jpg",
  },

  {
    id: "006",
    brand: "Jordan",
    name: "Luka 1",
    model: "Red",
    price: 174.999,
    category: "Basketball",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/7APZUZ32FBDJZN6UI64KOACKP4.jpg",
  },
  {
    id: "00",
    brand: "Nike",
    name: "Mercurial TN",
    model: "Voltage Purple",
    price: 305.999,
    category: "Futbol",
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

export const getProductbyId = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 1000);
  });
}