const cds = require("@sap/cds");
const dotenv = require('dotenv')
dotenv.config()

async function createProduct(req) {
    return req.data;
}

async function getProduct(req) {
    return req;
}

async function updateProduct(req) {
    return req.data;
}

async function deleteProduct(req) {
    return req;
}

async function getCalculos(req) {
    const id = req.data.id
    const response = await requestModule.getRequests(id)
    return response;
}

module.exports = cds.service.impl(function () {
    const { product } = this.entities;
    this.on("INSERT", product, createProduct);
    this.on("READ", product, getProduct);
    this.on("UPDATE", product, updateProduct);
    this.on("DELETE", product, deleteProduct);
});