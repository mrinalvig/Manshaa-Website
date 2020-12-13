const db = require('./index.js');
const faker = require ('faker');

const createCategories = () => {
    var bridalArray = ['https://i.ibb.co/T0HGrtd/1.jpg', 'https://i.ibb.co/hCLJ51c/2.jpg', 'https://i.ibb.co/3pBd2NJ/3.jpg', 'https://i.ibb.co/MhJHFM0/4.jpg', 'https://i.ibb.co/NVcDDRN/5.jpg', 'https://i.ibb.co/FXff6Hy/6.jpg', 'https://i.ibb.co/FXff6Hy/6.jpg', 'https://i.ibb.co/ngFqS2p/8.jpg', 'https://i.ibb.co/jLBTtjs/9.jpg', 'https://i.ibb.co/mT0Z9wD/10.jpg', 'https://i.ibb.co/s5rbGRW/11.jpg', 'https://i.ibb.co/TPgCJhy/12.png', 'https://i.ibb.co/pxwc5nd/13.jpg', 'https://i.ibb.co/VMVGPgM/14.jpg', 'https://i.ibb.co/MSyPybz/15.jpg', 'https://i.ibb.co/gz4nkPT/16.jpg', 'https://i.ibb.co/ZVc2YBF/17.jpg', 'https://i.ibb.co/3dQhFn9/18.jpg', 'https://i.ibb.co/tzrmGCG/20.jpg', 'https://i.ibb.co/KmwRV7h/21.jpg', 'https://i.ibb.co/S5mBbpm/22.jpg', 'https://i.ibb.co/BzBCCMW/23.jpg', 'https://i.ibb.co/BGvg7rP/24.jpg', 'https://i.ibb.co/LPjy44h/25.jpg', 'https://i.ibb.co/VNLBJdB/26.jpg', 'https://i.ibb.co/cXXV7gY/27.jpg', 'https://i.ibb.co/nwt0HVP/28.jpg', 'https://i.ibb.co/GV2rTMp/29.jpg', 'https://rb.gy/v21dxc', 'https://rb.gy/eqbzkb'];

    var necklaceArray = ['https://i.ibb.co/fFkpY5t/Necklac234.jpg', 'https://iili.io/FS35G9.md.jpg', 'https://iili.io/FSFSHb.md.jpg', 'https://iili.io/FSKLhl.md.jpg', 'https://iili.io/FSfNae.md.jpg', 'https://iili.io/FSqHFt.md.jpg', 'https://iili.io/FSB2qB.md.jpg', 'https://iili.io/FSBehx.md.jpg', 'https://iili.io/KKdS0G.md.jpg', 'https://iili.io/KKdUgf.md.jpg', 'https://iili.io/KKd6e2.md.jpg', 'https://iili.io/KKdLX9.md.jpg', 'https://iili.io/KKdbgj.md.png'];

    var bridalTitle = ['Red Bridal Dress', 'Green Bridal Dress', 'Cream Bridal Dress', 'Crop Top Dress', 'Crop Top Dress', 'White Bridal Dress', 'White Bridal Dress', 'Pink Bridal Dress', 'Pink Bridal Dress', 'Festive Bridal Dress', 'Twin Bridal Dresses', 'Twin Bridal Dresses', 'Red Bridal Dress', 'Pink Bridal Dress', 'Gray Bridal Dress', 'Silver Bridal Dresses', 'Cream Bridal Dresses', 'Red Bridal Dress', 'Red Bridal Dress', 'Red Bridal Dress', 'Fall Bridal Dress', 'Cream Bridal Dress', 'Red Bridal Dress', 'Cream Bridal Dress', 'Green Bridal Dress', 'Yellow Bridal Dress', 'Yellow Bridal Dress', 'Cream Bridal Dress', 'White Bridal Dress'];

    var bridalDescription = ['This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.', 'This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.', 'This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.'];

    var bridalPrices = [150, 3345, 245, 5653, 563, 321, 567, 231, 567, 875, 2341, 553, 890, 908, 785, 2333, 553, 231, 546, 233, 675, 435, 645, 432, 2233, 534, 567, 876, 543, 2344];

    var kurtasPage = ['https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven'];

    var suitPage = ['https://iili.io/KIk8Wx.md.jpg', 'https://rb.gy/lpsjp1', 'https://rb.gy/1tt2sh', 'https://rb.gy/3x0sho', 'https://rb.gy/4wd1pp', 'https://rb.gy/yjtj2m', 'https://rb.gy/tnetiy'];

    var earingPage = ['https://rb.gy/4qorwu'];

    var lahengaPage = ['https://rb.gy/j6fpmg'];

    var ghararaPage = ['https://rb.gy/ntdook'];

    // Bridal push
    // for(var i = 0; i < bridalArray.length; i++) {
    //     db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'bridal', '${bridalArray[i]}')`, (err, result) => {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("Women Logged");
    //         }
    //     });
    // }

    // Necklace push
    // for(var i = 0; i < necklaceArray.length; i++) {
    //     db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'necklace', '${necklaceArray[i]}')`, (err, result) => {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("Necklace Logged");
    //         }
    //     });
    // }

    for(var i = 0; i < suitPage.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'suits', '${suitPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Suits Logged');
            }
        })
    }

    for(var i = 0; i < earingPage.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'earings', '${earingPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Earings Logged');
            }
        })
    }

    for(var i = 0; i < lahengaPage.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'lahenga', '${lahengaPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Lahengas Logged');
            }
        })
    }

    for(var i = 0; i < ghararaPage.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'ghararas', '${ghararaPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Ghararas Logged');
            }
        })
    }
}

createCategories();
