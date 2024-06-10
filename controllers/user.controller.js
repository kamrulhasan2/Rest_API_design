const {v4: uuidv4} = require('uuid');
const user = require('../models/user.schema');


//Find all user
const userController = async (req,res)=>{
   try {
    const allUsers = await user.find();
    res.status(200).json({
        messege: "show all user here",
        data: allUsers
    });
   } catch (error) {
    res.status(500).send(error.messege);
   }
};

//create a new user
const createUserController = async (req,res)=>{
   try {
    const newUser = user({
        id: uuidv4() ,
        name: req.body.name,
        age: Number(req.body.age) 
 });
  const users = await newUser.save();
    res.status(200).json({
        messege: "create a new user",
        data: users
    });
   } catch (error) {
    res.status(500).send(error.messege);
   }
};

//Update a new user
const updateUserController = async (req,res)=>{
    try {
        const updateData = {
        id: req.body.id,
        name: req.body.name
    }
        const updateUser = await user.findOneAndUpdate({id: updateData.id},{$set:{name: updateData.name}},{ new: true });
        res.status(202).json({
            messege: "Update a new user",
            data: updateUser
        });
    } catch (error) {
        res.status(500).send(error.messege);
    }
};
// Delete an user
const deleteUserController = async (req,res)=>{
    try {
        const id = req.body.id;
        const deletedUser = await user.findByIdAndDelete({id});
        res.status(200).json({
            messege: "Deleted an user",
            data: deletedUser
        });
    } catch (error) {
        res.status(500).send(error.messege);
    }
};

module.exports = {
    userController,
    createUserController,
    updateUserController,
    deleteUserController
};