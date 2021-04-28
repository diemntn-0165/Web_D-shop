const express = require("express");
const { sequelize,Op } = require('../databases/database');

const router = express.Router();
const item = require('../models/item');
router.post('/', async(req, res)=> {
    console.log('req', req.body);
    const search_item = req.body.item_name;
    item.findAll({ 
        where: {
            item_name: {
                [Op.like]: `%${search_item}%`
            }
        }}).then((data, message) =>{
            console.log(data);        
            res.json({data:data, message: "Ok"})
           
        }).catch((err)=>{
            console.log('err',err);
            res.status(401).send({
                message: 'Not found item.',
    
            });
        });
});
module.exports = router;