const express = require('express');
const db = require('../database');
const router = express.Router();

router.get('/', async (req,res,next)=>{
	try{
	let results = await db.all();
	res.json(results);
	} catch(error){
		console.log(error);
		res.sendStatus(500);
	}
});
router.get('/:value', async (req,res,next)=>{
	try{
	let string = req.params.value;
	let num = parseInt(string);
	let results = await db.recent(num);
	res.json(results);
	} catch(error){
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/article/:id', async (req,res,next)=>{
	try{
	let results = await db.one(req.params.id);
	res.json(results);
	} catch(error){
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;


