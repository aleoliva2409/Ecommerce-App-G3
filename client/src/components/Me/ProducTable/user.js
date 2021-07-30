const user = {
  id: 2,
  email: "test@gmail.com",
  password: "$2b$10$yaMYBy6txhKM.20JsEMDN.3UZUSIUMLjR0l.1PkOdEEKQrNOsc3vC",
  isadmin: false,
  passwordReset: false,
  blocked: false,
  orders: [
    {
      id: 1,
      orderState: "processing",
      shippingState: "initial",
      shippingCost: "600.99",
      shippingAddres: "juan b justo 400",
      shippingZip: "1508",
      shippingCity: "buenos Aires",
      comments: "marcarme al celular",
      paymentDetails: "debit",
      firstName: "camila",
      lastName: "bonilla",
      cart: [],
      date: "28/02/2020",
      userId: 2,
      products: [
        {
          id: 153,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "80x190",
          sizeMattress: "1 Plaza",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "25600.00",
          stock: 27,
          modelId: 52,
        },
        {
          id: 154,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "100x190",
          sizeMattress: "1 Plaza y Media",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "30300.00",
          stock: 17,
          modelId: 52,
        },
        {
          id: 155,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "130x190",
          sizeMattress: "2 Plazas",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "39100.00",
          stock: 19,
          modelId: 52,
        },
        {
          id: 156,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "140×190",
          sizeMattress: "2 Plazas y Media",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "41300.00",
          stock: 28,
          modelId: 52,
        },
      ],
    },
    {
      id: 4,
      orderState: "completed",
      shippingState: "cancelled",
      shippingCost: "600.99",
      shippingAddres: "curapaligue 1000",
      shippingZip: "1508",
      shippingCity: "buenos Aires",
      comments: "dejar en la puerta lateral",
      paymentDetails: "credit",
      firstName: "jaime",
      lastName: "angulo",
      cart: [],
      date: "28/02/2021",
      userId: 2,
      products: [
        {
          id: 153,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "80x190",
          sizeMattress: "1 Plaza",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "25600.00",
          stock: 27,
          modelId: 52,
        },
        {
          id: 154,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "100x190",
          sizeMattress: "1 Plaza y Media",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "30300.00",
          stock: 17,
          modelId: 52,
        },
        {
          id: 155,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "130x190",
          sizeMattress: "2 Plazas",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "39100.00",
          stock: 19,
          modelId: 52,
        },
        {
          id: 156,
          name: "Colchón Piero Corona",
          color: "Celeste",
          size: "140×190",
          sizeMattress: "2 Plazas y Media",
          image: ["https://www.pillowtop.com.ar/wp-content/uploads/corona.jpg"],
          price: "41300.00",
          stock: 28,
          modelId: 52,
        },
      ],
    },
  ],
};

export { user };