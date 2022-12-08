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

/* Metodo PUT */

export const putCategory = async (req, res) =>{
    try {
        const{ id } =req.params;
        const { name, descripcion } = req.body;

        const updateCategory = await category.findByPK(id);
        updateCategory.name = name;
        updateCategory.descripcion = descripcion;

        await updateCategory.save();
        res.json(updateCategory)
    }catch (error) {
      return res.status(500).json({message: error.message})  
    }
}

/*Metodo delete */
export const delCategory = async (req, res) => {
    try{
        const{ id } =req.params;
        await category.destroy({
            where: { id }
        })
        res.senstatus(204);
    }catch (error) {
        return res.status(500).json({ massage: error.massage })

    } 
    
}