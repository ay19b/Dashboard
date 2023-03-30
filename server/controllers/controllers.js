const prodModel = require("../models/products")




const getAll = async (req, res) => {
        const prods =await prodModel.find();
        return res.json(prods)
}

const create = async (req,res) =>{
    const newProd = new prodModel(req.body);
    await newProd.save();  
    res.json(req.body)
}

const updateProd = async (req, res) => {
    try {
      const updatedProd = await prodModel.findByIdAndUpdate(req.params.id, {
        ...req.body
      }, { new: true });
  
      res.status(200).json(updatedProd);
    } catch (error) {
      res.status(500).json(error.message);
    }
}

const deleteProd = async (req, res) => {
    try {
      await prodModel.findByIdAndDelete(req.params.id );
      res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting product.' });
    }
};

module.exports = {getAll,create,updateProd,deleteProd};