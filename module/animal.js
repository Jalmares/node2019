'use strict';

const connection = require('./db.js');

exports.getAll = async () => {
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM animal');
        console.log(results); //results contains rows r
        console.log(fields); // fields contains extra m
        return results;
    } catch (e) {
        console.log(e);
        throw 'db error :(';
    }
};

exports.search = async (name) => {
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM animal WHERE name LIKE ?', [name]);
        console.log(results); //results contains rows r
        console.log(fields); // fields contains extra m
        return results;
    } catch (e) {
        console.log(e);
        throw 'db error :(';
    }
};

exports.insert = async (name) => {
    try {
        const [result] = await connection.query(
            'INSERT INTO animal (name) VALUES (?)', [name]);
        return result;
    } catch (e) {
        console.log(e);
        throw 'db error :(';
    }
};