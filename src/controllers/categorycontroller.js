import {category} from "../models/category.js";
/*Metodo GET */
export const getCategories = async (req, res) => {
    try{
        const categories = await category.findAll();
        res.json(categories)
    }catch (error) {
        return res.status(500).json(message: error.message)

    }

}