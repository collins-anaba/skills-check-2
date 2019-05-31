const product = [
    {
        image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyrbWT88Z8O41vmbGgGpt3JZxsau8RfkeIrYtXyQ6FlvmQO3vx0CjlkuPLZXyGJyebkdWRkmgP2VU&usqp=CAc',
        product_name: 'converse',
        price: 100
    }
]

const getProduct = ( req, res) => {
    const dbInstance = req.app.get("db");
}

const postProduct = ( req, res) => {
    const dbInstance = req.app.get('db');
    const {image_url,product_name,price} = req.body
    dbInstance.get_product([image_url,product_name,price])
    .then(() => res.sendStatus(200))
    .catch( error => console.log(err) )
}

const editProduct = ( req, res) => {
    const dbInstance = req.app.get('db');
    const { params, body } = req;
    dbInstance.edit_product([params.id, body.product_name])
    .then(() => res.sendStatus(200))
    .catch(error => console.log(error))
}

const deleteProduct = ( req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance .delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(error => console.log(error))
}

module.exports = {
    getProduct,
    postProduct,
    editProduct,
    deleteProduct
};