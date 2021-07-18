const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({ access_token: ACCESS_TOKEN });

async function checkout(req, res, next) {
    try {
        const { productsInCart } = req.body;
        const items = productsInCart.map(({ price, name, qty }) => ({
            title: name,
            unit_price: parseInt(price,10),
            quantity: qty
        }));
        const preference = {
            items,
            back_urls: {
                success: 'http://localhost:3000/',
                failure: 'http://localhost:3000/',
                pending: 'http://localhost:3000/',
            },
            auto_return: 'approved',
        }

        const meli = await mercadopago.preferences.create(preference)
        res.send(meli.body)

    } catch (error) {
        next(error);
    }
}

module.exports = {
    checkout,
};