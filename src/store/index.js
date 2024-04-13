import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {id: 1, name: 'Hamburger', desc: 'Freshly cooked meat with veggies', price: 99},
            {id: 2, name: 'Fries', desc: '', price: 0},
        ]
    },
    getters: {
        productsList: state => state.products
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product)
        },
        deleteProduct(state, id) {
            state.products.splice(id, 1);
        },
        updateProduct(state, product) {
            state.products[product.id] = product;
        }
    }
})