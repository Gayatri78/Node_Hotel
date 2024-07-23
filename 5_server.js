const express = require('express');
const app = express();

// Import database connection
const db = require('./5_db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body 

// Heading route
app.get('/heading', function (req, resp) {
    resp.send('Welcome to my hotel :)');
});

// Import the router files
const menuRouters =require('./Routes/menuRoutes');
const personRoutes =require('./Routes/personRoutes');

//use  the routers
app.use('/person',personRoutes);
app.use('/menu/',menuRouters);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

//comment add  for testing purpose for github 


    // const express =require ('express');
    // const app =express();

    // const bodyParser = require('body-parser');
    // app.use(bodyParser.json()); //req.body 

    // //************heading of hotel
    // const db=require('./5_db');
    //  app.get('/heading',function (req,resp)
    //  {
    //     resp.send('Welcome to my hotel...How i can help you?, we have list of menus!')
    //  });

    // //**************** */ person data 
    // const person=require('./models/person')
    //  //post route to add a person 
    //  app.post('/person', async(req, resp)=>{
    //     try{
    //     const data = req.body //assuming the  request body  contains the person data 

    //     //create the  new person document using the  mongoose model
    //     const  newPerson= new person(data);

    //     //save the  new person  to the database
    //     const response = await newPerson.save();
    //     console.log('data saved!');
    //         resp.status(200).json(response);
    //     }
    //     catch(err){
    //         console.log(err);
    //         resp.status(500).json({error: 'Internal server error'})
    //     }
    // }); 

    // //GET  method to get  person
    // app.get('/person',async(req,resp)=>{
    //     try{
    //         const data =await person.find();
    //         console.log('data fetched');
    //         resp.status(200).json(data);
    //     }
    //     catch(err){
    //         console.log(err)
    //         resp.status(500).json({error:'internal server error'});

    //     }
    // })
    // //*************************menu data 
    // // POST route to add a menu in the list
    // const menu=require('./models/menu')
    // app.post('/menu', async (req, resp) => {
    //     try {
    //         const dataMenu = req.body;

    //         const newMenu = new Menu(dataMenu); // Create the new menu document using the mongoose model

    //         // Save the new menu to the database
    //         const response = await newMenu.save();
    //         console.log('Menu data saved!');
    //         resp.status(200).json(response);
    //     } catch (error) {
    //         console.log('Error saving menu:', error);
    //         resp.status(500).json({ error: 'Internal server error!' });
    //     }
    // });

    // // GET method to get menu list
    // app.get('/menu', async (req, resp) => {
    //     try {
    //         const dataMenu = await menu.find();
    //         console.log('Data fetched!');
    //         resp.status(200).json(dataMenu);
    //     } catch (error) {
    //         console.log(error);
    //         resp.status(500).json({ error: 'Internal server error!' });
    //     }
    // });



    // app.listen(3000,()=>
    //     {
    //         console.log('listening on port 3000');
    //     })
        

        
        // const newPerson = new person();
        // newPerson.name = data.name;
        // newPerson.age = data.age;      //this is very complicated method to create documents so we direct pass value in (data)
        // newPerson.mobile = data.mobile;
        // newPerson.address= data.address;

            //create the  new person document using the  mongoose model
            // const newPerson = new Person(data);

        // //save the  new person  to the database
        // newPerson.save((error, savedPerson)=>{
        //     if(error){
        //         console.log('error saving person: ',error);
        //         resp.status(500).json({error:'Internal server error'})
        //     }
        //     else{
        //         console.log('Data saved Scuccessfully');
        //         resp.status(200).json(savedPerson)
        //     }
        // })aslo we not write this call function metod beacuse this is very time consuming so 
        //we used await and async method insted of call back funaction


       