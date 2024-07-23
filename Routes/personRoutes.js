const express = require('express');
const router = express.Router();
const person = require('./../models/person');



// POST route to add a person
router.post('/', async (req, resp) => {
    try {
        const data = req.body; // Assuming the request body contains the person data

        // Create a new person document using the mongoose model
        const newPerson = new person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('Data saved!');
        resp.status(200).json(response);
    } catch (error) {
        console.log('Error saving person:', error);
        resp.status(500).json({ error: 'Internal server error' });
        
    }
});


//GET method to get persons
router.get('/', async (req, resp) => {
    try {
        const data = await person.find();
        console.log('Data fetched');
        resp.status(200).json(data);
    } catch (err) {
        console.log('Error fetching persons:', err);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

//to get some perticuler information from the record, ex: we want person work info 
router.get('/:worktype', async (req,resp)=>
    {
        try{
            const worktype = req.params.worktype ; //extract the work type from urlparameter
            if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){
                
                const response = await person.find({work:worktype})
                console.log('response fetched')
                resp.status(200).json(response)
            }else{
                resp.status(404).json({error:'Invaild  Server  Error'})
            }
        }
        catch(err){
            console.log(err);
            resp.status(500).json({error:'Internal server error'})
    
        }
    });

    
//updated the menu list 
// PUT route to update a menu item
router.put('/:id', async (req, resp) => {
    try {
        const id = req.params.id; // Get the ID from the URL parameters
        const updatePersonData = req.body; // Get the updated data from the request body

        // Find the person data  by ID and update it with the new data
        const updatedPerson = await person.findByIdAndUpdate(id, updatePersonData, {
             new: true //return the update document 
             });

        // If no person data  is found with the provided ID, return a 404 status
        if (!updatedPerson) {
            return resp.status(404).json({ error: 'Menu item not found' });
        }

        console.log('person data updated!');
        resp.status(200).json(updatedPerson);

    } catch (error) {
        console.log('Error updating person data:', error);
        resp.status(500).json({ error: 'Internal server error!' });
    }
});

// DELETE route to remove a menu item by ID
router.delete('/:id', async (req, resp) => {
    try {
        const id = req.params.id; // Get the ID from the URL parameters

        // Find and delete the menu document by ID
        const deletedperson = await person.findByIdAndDelete(id);

        // If no menu item is found with the provided ID, return a 404 status
        if (!deletedperson) {
            return resp.status(404).json({ error: 'person  not found' });
        }

        console.log('Person data item deleted!');
        resp.status(200).json({ message: 'Person data deleted successfully' });

    } catch (error) {
        console.log('Error deleting person:', error);
        resp.status(500).json({ error: 'Internal server error!' });
    }
});


module.exports = router;