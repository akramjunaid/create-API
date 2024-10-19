
const getAllproducts = async (req, res)=>{
    res.status(200).json({msg: "getAllProducts"})
}

const getAllproductsTesting = async (req, res)=>{
    res.status(200).json({msg: "getAllproductsTesting"})
}


module.exports = { getAllproducts, getAllproductsTesting}