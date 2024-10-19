const express = require("express")
const router = express();

const { getAllproducts, getAllproductsTesting} = require("../controllers/product.controller.js")

router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductsTesting);


module.exports = router;
