import {category} from "../models/categories.js";
/*Metodo GET */
export const getCategories = async (req, res) => {
    try{
        const categories = await category.findAll();
        res.json(categories)
    }catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

/*Modulo pos */
export const postCategory = async (req, res) => {
    const { name,descripcion } = req.body;
    try {

     const newCategory = await category .create({
        name: 
        descripcion
     });
     res.json(newCategory);

    } catch (error) {
         return res.status(500).json({message: error.message});
    }
}
