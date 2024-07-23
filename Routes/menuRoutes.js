const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');

// POST route to add a menu
router.post('/', async (req, resp) => {
    try {
        const dataMenu = req.body;

        // Create a new menu document using the mongoose model
        const newMenu = new menu(dataMenu);

        // Save the new menu to the database
        const response = await newMenu.save();
        console.log('Menu data saved!');
        resp.status(200).json(response);
    } catch (error) {
        console.log('Error saving menu:', error);
        resp.status(500).json({ error: 'Internal server error!' });
    }
});

// GET method to get menu list
router.get('/', async (req, resp) => {
    try {
        const dataMenu = await menu.find();
        console.log('Data fetched!');
        resp.status(200).json(dataMenu);
    } catch (error) {
        console.log('Error fetching menu:', error);
        resp.status(500).json({ error: 'Internal server error!' });
    }
});


//update method to update menu item 
router.put('/:id',async (req,resp)=>{
    try{
        const id =req.params.id; //get id from url parameter
        const updateMenuitem =req.body;

        // Find the menu item by ID and update it with the new data
        const updateMenu = await menu.findByIdAndUpdate(id, updateMenuitem, {
            new:true
        });
    
        // If no menu item is found with the provided ID, return a 404 status
        if(!updateMenu){
              return resp.status(404).json({error:'Menu item not found'})
        }
        console.log('menu item updated')
        resp.status(200).json(updateMenuitem);
    }catch(err){
        console.log('Error updating menu item :',err);
        resp.status(500).json({error:'Internal server error!'});

    }
});

//delete the menu item from data 
router.delete('/:id', async (req,resp)=>{
    try{
        const id =req.params.id //get id from url parameter
         const deletemenuitem =await menu.findByIdAndDelete(id);

         //if no menu item find in given id return 404 not found error
         if(!deletemenuitem){
            return resp.status(404).json({error:'menu item not found'})
         }

         console.log('menu data item deleted!');
         resp.status(200).json({ message: 'menu data deleted successfully' });
    }catch(err){

        console.log('error deleting the menu items',err)
        resp.status(500).json({err:'Internal server error'})
    }
})
module.exports = router;
