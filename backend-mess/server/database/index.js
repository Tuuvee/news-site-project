const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: 'NewsSQL72',
	user	: 'NewsUser',
	database: 'ArticleDB',
	host	: 'localhost',
	port	: '3306'	
});

let articledb = {};

articledb.all=()=>{
	return new Promise((resolve, reject)=>{
		pool.query('SELECT * FROM articles', (error, results)=>{
		if (error){
			return reject(error);
		}
		return resolve(results);
		});
	});
};

articledb.recent=(value)=>{
	return new Promise((resolve, reject)=>{
		pool.query('SELECT * FROM articles ORDER BY Date DESC LIMIT ?', [value], (error, results)=>{
		if (error){
			return reject(error);
		}
		return resolve(results);
		});
	});
};

articledb.one=(id)=>{
	return new Promise((resolve, reject)=>{
	pool.query('SELECT * FROM articles WHERE id = ?', [id], (error, results)=>{
		if (error){
			return reject(error);
		}
		return resolve(results[0]);
		});
	});
};

module.exports = articledb;