const healthController = (req,res)=>{
    res.status(200).send(`Health is ok`);
};

module.exports = healthController;