const db = require('./index.js');
const faker = require ('faker');

const createCategories = () => {
    var menArray = ['Sherwani', 'Shoes', 'Kurtas'];
    var womenArray = ['Bridal', 'Semi Formals', 'Formals', 'Bridesmaids', 'Tunics'];
    var jewelryArray = ['Chokers', 'Necklace', 'Earings', 'Anklet', 'Bangles', 'Rings', 'Matha Patti & Mangtikka', 'Jhumar'];
    var menImgs = ['https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven'];

    for(var i = 0; i < 90; i++) {
        var three = Math.floor(Math.random() * 3);

        db.query(`INSERT INTO men (title, description, price, category) VALUES ('${menArray[three]}', 'This is a description boi!', 45, 'men')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Men Logged");
            }
        });
    }

    for(var i = 0; i < 150; i++) {
        var five = Math.floor(Math.random() * 5);

        db.query(`INSERT INTO women (title, description, price, category) VALUES ('${womenArray[five]}', 'This is a description gal', 150, 'women')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Women Logged");
            }
        });
    }

    for(var i = 0; i < 240; i++) {
        var eight = Math.floor(Math.random() * 8);

        db.query(`INSERT INTO jewelry (title, description, price, category) VALUES ('${jewelryArray[eight]}', 'This is description glow', 300, 'jewelry')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Jewelry Logged");
            }
        });
    }
}

createCategories();
