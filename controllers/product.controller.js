const Product = require("../models/products.schema.js");

const getAllproducts = async (req, res) => {
  const { company, name, price, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (price) {
    queryObject.price = price;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  let dataAPI = Product.find(queryObject);
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    dataAPI = dataAPI.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    dataAPI = dataAPI.select(selectFix);
  }

  // For Pagination
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skipData = (page - 1) * limit;
  dataAPI = dataAPI.skip(skipData).limit(limit);

  const myData = await dataAPI;
  res.status(200).json({ data: myData, msg: "getAllProducts data", nbHits: myData.length});
};

module.exports = { getAllproducts };
