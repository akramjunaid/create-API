const connectDB = require("./db/connect");
const Product = require("./models/products.schema");
const dotenv = require("dotenv");
const ProductJson = require('./products.json')

dotenv.config();

const start = async ( ) => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
        
    }
}

start();