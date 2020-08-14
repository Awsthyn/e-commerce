const server = require('express').Router();
const { Category } = require('../db.js');

server.post("/", (req, res,next) =>{
	const {name, description} = req.body
	Category.create({
			name,
			description
		
	})
	.then(() =>{
		res.sendStatus(201)
	})
	.catch(next);
})


server.delete('/:id', (req,res, next) =>{
    try {
    const { id } = req.params;    
    Category.destroy({where:{id: id}})
    .then(() => {
        res.sendStatus(200);
    })	
    } catch (error) {
        console.error(error.message)
    }	
    })


    server.put("/:id", (req, res, next)=>{
        try {
        const { id } = req.params;
        const {name, description} = req.body;	
        Category.update({
            name,
            description
        
        }, {where: {id}})
        .then(() => {
            res.sendStatus(200);
        })
        } catch (error) {
            console.error(error.message)
        }	
        })

module.exports = server;