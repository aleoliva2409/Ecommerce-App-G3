const mercadopago = require("mercadopago");
const sgMail = require("@sendgrid/mail");
const { Product } = require("../db")
const SENDGRID_API_KEY = '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'
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({ access_token: ACCESS_TOKEN });
sgMail.setApiKey(SENDGRID_API_KEY);

async function checkout(req, res, next) {
    try {
        const { productsInCart } = req.body;
        const items = productsInCart.map(({ price, name, qty, size }) => ({
            title: name + ' ' + size,
            unit_price: parseInt(price, 10),
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

//send mail and set new stock
async function sendMail (req, res, next) {
    try {
        const { prods, user } = req.body
        const html = ` <div>
            <h1>Order</h1>
            <table>
                <tr>
                    <th>Producto</th>
                    <th> | </th>
                    <th>Cantidad</th>
                    <th> | </th>
                    <th>Precio</th>
                </tr>
                ${prods.map(({ name, size, price, qty }) => {
            return (
                `<tr>
                    <td>${name}${' '}${size}</td>
                    <td> | </td>
                    <td>${qty}</td>
                    <td> | </td>
                    <td>${price * qty}</td>
                </tr>`
            )
        })}
            </table>
            <hr />
            <table>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${prods.reduce((acc, crr) => acc + crr.price * crr.qty, 0)}</td>
                </tr>
            </table>
            <br />
            <h3>¡Gracias por su compra!</h3>
        </div>
    `;
        const message = {
            to: user,
            from: 'kevin.queiro@outlook.com',
            subject: 'Ésta es su orden de Pillow Top',
            text: 'Ésta es su orden de Pillow Top',
            html: html
        };
        sgMail.send(message)
        .then(response => res.send(response))
        .catch(err => console.log("ERROR ENVIANDO ORDEN: ", err));
    } catch (error) {
        console.log(error)
    }
}

async function setStock (req,res,next){
const {prods} = req.body

    for (each of prods){
        const prod = await Product.findOne({
            where:{ id:each.id }
        })
        prod.update({stock:each.stock-each.qty})
    }

}

module.exports = {
    checkout,
    sendMail,
    setStock
};