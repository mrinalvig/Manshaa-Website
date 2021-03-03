const db = require('./index.js');
const faker = require ('faker');

const createCategories = () => {
    var bridalArray = ['https://i.ibb.co/T0HGrtd/1.jpg', 'https://i.ibb.co/hCLJ51c/2.jpg', 'https://i.ibb.co/3pBd2NJ/3.jpg', /*'https://i.ibb.co/MhJHFM0/4.jpg',*/ 'https://i.ibb.co/NVcDDRN/5.jpg', /*'https://i.ibb.co/FXff6Hy/6.jpg',*/ 'https://i.ibb.co/FXff6Hy/6.jpg', 'https://i.ibb.co/ngFqS2p/8.jpg', /*'https://i.ibb.co/jLBTtjs/9.jpg',*/ 'https://i.ibb.co/mT0Z9wD/10.jpg', 'https://i.ibb.co/s5rbGRW/11.jpg', /*'https://i.ibb.co/TPgCJhy/12.png',*/ 'https://i.ibb.co/pxwc5nd/13.jpg', 'https://i.ibb.co/VMVGPgM/14.jpg', 'https://i.ibb.co/MSyPybz/15.jpg', 'https://i.ibb.co/gz4nkPT/16.jpg', 'https://i.ibb.co/ZVc2YBF/17.jpg', 'https://i.ibb.co/3dQhFn9/18.jpg', 'https://i.ibb.co/tzrmGCG/20.jpg', 'https://i.ibb.co/KmwRV7h/21.jpg', 'https://i.ibb.co/S5mBbpm/22.jpg', 'https://i.ibb.co/BzBCCMW/23.jpg', 'https://i.ibb.co/BGvg7rP/24.jpg', /*'https://i.ibb.co/LPjy44h/25.jpg',*/ 'https://i.ibb.co/VNLBJdB/26.jpg', 'https://i.ibb.co/cXXV7gY/27.jpg', /*'https://i.ibb.co/nwt0HVP/28.jpg',*/ 'https://i.ibb.co/GV2rTMp/29.jpg', 'https://rb.gy/v21dxc', 'https://rb.gy/eqbzkb', 'https://i.ibb.co/KwpMFpx/5919cf99-4aa6-4603-8a35-6faf60ee2ec4.jpg', 'https://i.ibb.co/pjXvGcP/IMG-1479.jpg', 'https://i.ibb.co/2dk3krj/IMG-3882.jpg', 'https://i.ibb.co/Y0PDYxL/IMG-4748.jpg', 'https://i.ibb.co/DgSHVM4/IMG-5035.jpg', 'https://i.ibb.co/6thnyqC/IMG-5278.jpg', 'https://i.ibb.co/CzN9Dtj/IMG-7274.jpg', 'https://i.ibb.co/3mQZG5f/IMG-7568.jpg', 'https://i.ibb.co/PjWFQpq/IMG-7630.jpg'];

    var bridalTitle = ['Zeenat Red Bridal Dress', 'Anaya Lacha Foster Green Bridal Dress', 'Malika Gharara Set', 'Sara Cocktail Lehanga', 'Neelam Lehanga Choli', 'White Bridal Dress', 'White Bridal Dress', 'Pink Bridal Dress', 'Pink Bridal Dress', 'Festive Bridal Dress', 'Twin Bridal Dresses', 'Twin Bridal Dresses', 'Red Bridal Dress', 'Pink Bridal Dress', 'Gray Bridal Dress', 'Silver Bridal Dresses', 'Cream Bridal Dresses', 'Red Bridal Dress', 'Red Bridal Dress', 'Red Bridal Dress', 'Fall Bridal Dress', 'Cream Bridal Dress', 'Red Bridal Dress', 'Cream Bridal Dress', 'Green Bridal Dress', 'Yellow Bridal Dress', 'Yellow Bridal Dress', 'Cream Bridal Dress', 'White Bridal Dress'];

    var bridalDescription = ['An elegant red net with satin silk underlining, hand embroidered in light gold threads with gold sequencing and beads', 'A foster green velvet shirt with silk skirt embroidered with antique gold zardosi and French knots', 'A blue banarsi foil silk skirt with gold silk shirt, paired with a 2-piece red silk dupatta', 'A stylish, light blush cocktail lehanga  made with a net and satin silk under lining. Embroidered with sequencing and beads in silver and blush threads.', 'A bold champagne lehanga choli, made with silk and embroidered with light gold zardisi sequencing', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.', 'This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.', 'This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.', 'This is description 1. Its a description.', 'This is description 2. Its a description.', 'This is description 3. Its a description.', 'This is description 4. Its a description.', 'This is description 5. Its a description.', 'This is description 6. Its a description.', 'This is description 7. Its a description.', 'This is description 8. Its a description.', 'This is description 9. Its a description.', 'This is description 10. Its a description.'];

    var bridalPrices = [4100, 2500, 3200, 2500, 3700, 321, 567, 231, 567, 875, 2341, 553, 890, 908, 785, 2333, 553, 231, 546, 233, 675, 435, 645, 432, 2233, 534, 567, 876, 543, 2344, 150, 3345, 245, 5653, 563, 321, 567, 231, 567, 875, 2341, 553, 890, 908, 785, 2333, 553, 231, 546, 233, 675, 435, 645, 432, 2233, 534, 567, 876, 543, 2344];

    var necklaceArray = ['https://i.ibb.co/fFkpY5t/Necklac234.jpg', 'https://iili.io/FS35G9.md.jpg', 'https://iili.io/FSFSHb.md.jpg', 'https://iili.io/FSKLhl.md.jpg', /*'https://iili.io/FSfNae.md.jpg',*/ 'https://iili.io/FSqHFt.md.jpg', 'https://iili.io/FSB2qB.md.jpg', 'https://iili.io/FSBehx.md.jpg', 'https://iili.io/KKdS0G.md.jpg', 'https://iili.io/KKdUgf.md.jpg', /*'https://iili.io/KKd6e2.md.jpg',*/ 'https://iili.io/KKdLX9.md.jpg', 'https://iili.io/KKdbgj.md.png', /*'https://rb.gy/dvy7nh',*/ 'https://rb.gy/kvk9o2', 'https://rb.gy/fs0m0b', 'https://rb.gy/t0tomd', 'https://i.ibb.co/KFZfjtb/314-E37-C5-A97-B-49-EA-AD22-D52-B049779-DF.jpg', 'https://i.ibb.co/zV7kQCN/IMG-3880.jpg', 'https://i.ibb.co/f0PyYtZ/IMG-3881.jpg', 'https://i.ibb.co/6FkrPnZ/IMG-5056.png', 'https://i.ibb.co/SRXsYbG/IMG-5951.jpg','https://i.ibb.co/7JxNx3Y/IMG-5953.jpg', 'https://i.ibb.co/GTYVSZm/IMG-8130.jpg', 'https://i.ibb.co/122xCJ2/IMG-8586.jpg', 'https://i.ibb.co/Vx5PWkL/IMG-8587.jpg', 'https://i.ibb.co/BGLzXnx/IMG-9705.jpg', 'https://i.ibb.co/zHLyR8R/IMG-6005.jpg'];

    var kurtasPage = ['https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven'];

    var suitPage = ['https://iili.io/KIk8Wx.md.jpg', /*'https://rb.gy/lpsjp1',*/ 'https://rb.gy/1tt2sh', 'https://rb.gy/3x0sho', 'https://rb.gy/4wd1pp', 'https://rb.gy/yjtj2m', 'https://rb.gy/tnetiy', 'https://rb.gy/pgyexl', 'https://rb.gy/zczdrl', 'https://rb.gy/wcytsk', 'https://rb.gy/fph4kx', 'https://rb.gy/cwuipn', 'https://rb.gy/crzwf4', 'https://rb.gy/iwpuge'];

    var earingPage = [/*'https://rb.gy/4qorwu',*/ /*'https://rb.gy/zzigbl',*/ 'https://rb.gy/axza8g', 'https://rb.gy/xdgjy5', 'https://rb.gy/4xgiiy', 'https://i.ibb.co/b3QQjcy/IMG-5073.png', 'https://i.ibb.co/7JxNx3Y/IMG-5953.jpg', 'https://i.ibb.co/jwcKvbK/IMG-7888.png', 'https://i.ibb.co/wc120VX/IMG-9628.jpg', 'https://i.ibb.co/BGLzXnx/IMG-9705.jpg', /*'https://i.ibb.co/KrG7GQN/IMG-9717.jpg',*/ /*'https://i.ibb.co/njV06wm/IMG-9740.jpg',*/ 'https://i.ibb.co/QKF8jqX/IMG-6598.jpg', 'https://i.ibb.co/fkhsdtV/IMG-6010.jpg', 'https://i.ibb.co/yq38yTY/IMG-6603.jpg', 'https://i.ibb.co/tmGm25r/IMG-6608.jpg', 'https://i.ibb.co/GVshzwc/IMG-7674.jpg', 'https://i.ibb.co/gvbcF1t/IMG-7675.jpg', 'https://i.ibb.co/0M9M8CM/IMG-7676.jpg', 'https://i.ibb.co/D7RRKkV/IMG-8590.jpg'];

    var lahengaPage = ['https://rb.gy/vzjri3', 'https://rb.gy/l74rhw', 'https://rb.gy/kjjz3v', 'https://rb.gy/v2xiv3', 'https://rb.gy/ph9jn6', 'https://rb.gy/ywmjmd', 'https://rb.gy/bllvpd', 'https://rb.gy/lmktwl', 'https://rb.gy/pxgn5a', 'https://rb.gy/eeyyfq', 'https://rb.gy/xfmas4', 'https://rb.gy/llk304'];

    var ghararaPage = ['https://rb.gy/ntdook', 'https://rb.gy/rqoenh', 'https://rb.gy/ser2rg', 'https://rb.gy/b9ax6a', 'https://rb.gy/7vc2bb', 'https://rb.gy/oofwte', 'https://rb.gy/3ftvtw', 'https://rb.gy/cwuwe1', 'https://rb.gy/1yea0c'];

    var ringPage = ['https://rb.gy/knxpvj', 'https://rb.gy/suomwf', 'https://rb.gy/jjyvc7', 'https://rb.gy/lyyadx', 'https://rb.gy/j86shf', 'https://i.ibb.co/0tTyVKH/IMG-3879.png', 'https://i.ibb.co/cJgQDQw/IMG-9691.jpg', 'https://i.ibb.co/WfB07P0/IMG-9710.jpg', /*'https://i.ibb.co/r4tQRKM/IMG-9729.jpg',*/ 'https://i.ibb.co/s2jczNQ/IMG-9768.jpg', 'https://rb.gy/tsiitg', 'https://i.ibb.co/D7RRKkV/IMG-8590.jpg'];

    var banglesPage = ['https://rb.gy/bvk9vm', 'https://rb.gy/h5c9if', 'https://rb.gy/yzhtlr', 'https://rb.gy/bk6dmx', 'https://rb.gy/algyvr', 'https://i.ibb.co/VYCfzQ7/IMG-1990.png', 'https://i.ibb.co/B3bp19Y/IMG-1991.png', /*'https://i.ibb.co/z2P7TNc/IMG-9694.jpg',*/ 'https://i.ibb.co/WfB07P0/IMG-9710.jpg', 'https://i.ibb.co/MNdhkfB/IMG-9765.jpg', 'https://i.ibb.co/D7RRKkV/IMG-8590.jpg'];

    var chokerPage = [/*'https://rb.gy/kvk9o2',*/ 'https://i.ibb.co/KFZfjtb/314-E37-C5-A97-B-49-EA-AD22-D52-B049779-DF.jpg', 'https://i.ibb.co/Vx5PWkL/IMG-8587.jpg', 'https://i.ibb.co/18ZKsCR/IMG-8780.jpg', /*'https://i.ibb.co/WfB07P0/IMG-9710.jpg',*/ 'https://i.ibb.co/PcdBH1T/IMG-9713.jpg', 'https://i.ibb.co/yq38yTY/IMG-6603.jpg', 'https://i.ibb.co/0tJJHcv/IMG-6607.jpg'];

    var bridesMaidsPage = ['https://rb.gy/icj72g', 'https://rb.gy/pstgq3', 'https://rb.gy/or0idf', 'https://rb.gy/7ekajh', 'https://i.ibb.co/smPNnDs/IMG-4858.jpg', 'https://i.ibb.co/yNnx2VN/IMG-5028.png', 'https://i.ibb.co/8NZCzt2/IMG-5765.jpg', 'https://i.ibb.co/DfkbvHC/IMG-6357.jpg', 'https://i.ibb.co/Fb4mw74/IMG-6361.jpg', 'https://i.ibb.co/pbqsGQk/IMG-6362.jpg', 'https://i.ibb.co/LJFRMMc/IMG-6364.jpg', 'https://i.ibb.co/PcS2cGw/IMG-6367.jpg', 'https://i.ibb.co/GknYrVq/IMG-6371.jpg', 'https://i.ibb.co/TH8PFv1/IMG-6376.jpg', 'https://i.ibb.co/qJsNGjF/IMG-7748.jpg'];

    var mathaPage = ['https://i.ibb.co/1KJwMMh/IMG-3597.jpg', 'https://i.ibb.co/b3QQjcy/IMG-5073.png', /*'https://i.ibb.co/SRXsYbG/IMG-5951.jpg',*/ 'https://i.ibb.co/wRdb7GN/IMG-5952.jpg', 'https://i.ibb.co/Rh1fQGv/IMG-6601.jpg'];

    //men info

    var mensPage = ['https://i.ibb.co/FzxHj2z/IMG-3812.jpg', 'https://i.ibb.co/SNWF3ph/IMG-4579.png', 'https://i.ibb.co/mSbK7ny/IMG-5029.png', 'https://i.ibb.co/ySNZxX5/IMG-5035.jpg', 'https://i.ibb.co/VjPVMx7/IMG-7876.jpg', /*'https://i.ibb.co/f9FLNHS/IMG-9658.jpg',*/ 'https://i.ibb.co/Wk5wT8H/IMG-9661.jpg', 'https://i.ibb.co/sgndHLJ/IMG-9665.jpg', 'https://i.ibb.co/VjPVMx7/IMG-7876.jpg'];

    var mensTitle = ['Dilip Sherwani', 'Namit Sherwani', 'Vikram Jodhpuri with Trousers', 'Jaden Sherwani', 'Mani Black Vest with Ivory Kurta Pajama', 'Mens Jutti', 'Meet Royal Darbar Sherwani', 'Mani Black Embroidered Kurta Pajama'];

    var mensDescription = ['An exemplary brocade sherwani hand embroidered in zardosi, threads, and beadwork.', 'A sage green sherwani made with raw silk and embroidered in gold zari and threads.', 'A classic ivory jodhpuri with printed silk.', 'Royal soft mint sherwani made with raw silk and embroidered in antique gold threads with gold beads.', 'A silk vest paired with a cotton-silk kurta pajama with white thread machine embroidery', 'Allow us to create your custom made pair of mens jutti made with silk and hand embroidered threads.', 'A raw silk sherwani with a raw silk belt paired with a velvet shawl. \nEmbroidered in pure zardosi with threads and beads. \nSherwani and Pants - $2480 \nBelt - $320 \nShawl - $1100', 'A silk made kurta pajama with white thread machine embroidery'];

    var mensPrice = [950, 650, 350, 1100, 375, 130, 3900, 375];

    //men sale info
    var menSale = ['https://i.ibb.co/6gZ7Sgj/6d5230ce-6dc3-49fa-95aa-7210e396faf0.jpg', 'https://i.ibb.co/YZ2vsDC/c754fcf8-c8a8-429d-9426-9aac6bf5e626.jpg', 'https://i.ibb.co/RjZXxvJ/aaa.jpg', 'https://i.ibb.co/PrW0fYc/000.jpg', 'https://i.ibb.co/zf8jcqX/000.jpg', 'https://i.ibb.co/n3xcCJ4/000.jpg', 'https://i.ibb.co/ZzHhfHL/000.jpg', 'https://i.ibb.co/FzdBR1x/000.jpg', 'https://i.ibb.co/x7wvmG9/000.jpg', 'https://i.ibb.co/SQwqWRy/000.jpg', 'https://i.ibb.co/2PLYmMg/000.jpg'];

    var menSaleTitle = ['Blue Vest and Gold Kurta Pajama', 'Gold Vest and Red Kurta Pajama', 'Red Printed Vest and Gold Kurta Pajama', 'Blue Printed Vest and Gold Kurta Pajama', 'Blue Kurta Pajama and Vest', 'Gold Vest with Black Kurta Pajama', 'Simple Orange Kurta Pajama', 'Pink Kurta Pajama with Embroidered Cuffs', 'Blue Kurta Pajama', 'White Kurta Pajama with Embroidered Collar', 'Purple Kurta Pajama'];

    var menSaleDescription = ['Smart blue and gold, brocade silk kurta pajama', 'Simple gold and red, brocade silk kurta pajama', 'Stylish red printed vest with a gold kurta pajama', 'Stylish blue printed vest with gold kurta pajama', 'A machine printed vest with a comfortable blue kurta pajama', 'A smart, gold printed vest paired with a black kurta pajama', 'A simple orange kurta pajama', 'A stylish kurta pajama with machine embroidered cuffs', 'Simple light blue kurta pajama', 'A clean looking white kurta pajama with a machine embroidered collar', 'Simple purple kurta pajama with an embroidered collar'];

    var menSalePrice = [120, 120, 120, 120, 120, 120, 65, 65, 65, 65, 65];

    //women sale info
    var womenSale = ['https://i.ibb.co/vz3JXn1/000.jpg', 'https://i.ibb.co/Rhcmqx9/000.jpg', 'https://i.ibb.co/T4M6P64/000.jpg', 'https://i.ibb.co/2qZ0G35/000.jpg', 'https://i.ibb.co/z51G67x/000.jpg', 'https://i.ibb.co/GVnctNk/000.jpg', 'https://i.ibb.co/pPGPhWk/000.jpg', 'https://i.ibb.co/hLrLM8L/000.jpg', 'https://i.ibb.co/zrp0gXP/000.jpg', 'https://i.ibb.co/C2y4shW/000.jpg', 'https://i.ibb.co/31ytxZh/000.jpg', 'https://i.ibb.co/8x8RBTp/000.jpg', 'https://i.ibb.co/R7M69mK/000.jpg', 'https://i.ibb.co/kQ5kNFF/000.jpg', 'https://i.ibb.co/3d0jbxQ/000.jpg', 'https://i.ibb.co/X59z7Lk/000.jpg', 'https://i.ibb.co/2PDzVZW/000.jpg', 'https://i.ibb.co/Dt7JfFK/000.jpg'];

    var jewelrySale = ['https://i.ibb.co/GJ9Lg67/000.jpg','https://i.ibb.co/nskc4gm/000.jpg', 'https://i.ibb.co/YLj72TN/000.jpg', 'https://i.ibb.co/1d8G96W/000.jpg', 'https://i.ibb.co/DL0LT7V/000.jpg', 'https://i.ibb.co/B4DNspB/000.jpg', 'https://i.ibb.co/7SZGp88/000.jpg', 'https://i.ibb.co/DR0xrsm/000.jpg', 'https://i.ibb.co/jwzrMBR/000.jpg', 'https://i.ibb.co/x1yFvf4/000.jpg'];

    for(var i = 0; i < jewelrySale.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'jewelrySale', '${jewelrySale[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Jewelry Sale Logged");
            }
        });
    }

    for(var i = 0; i < womenSale.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'womenSale', '${womenSale[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Women Sale Logged");
            }
        });
    }

    for(var i = 0; i < menSale.length; i++) {
        db.query(`INSERT INTO men (title, description, price, category, images) VALUES ('${menSaleTitle[i]}', '${menSaleDescription[i]}', ${menSalePrice[i]}, 'menSale', '${menSale[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Men Sale Logged");
            }
        });
    }

    // Necklace push
    for(var i = 0; i < necklaceArray.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'necklace', '${necklaceArray[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Necklace Logged");
            }
        });
    }

    // Bridal push
    for(var i = 0; i < bridalArray.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'bridal', '${bridalArray[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Suits Logged');
            }
        })
    }

    for(var i = 0; i < suitPage.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'suits', '${suitPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Suits Logged');
            }
        })
    }

    for(var i = 0; i < bridesMaidsPage.length; i++) {
        db.query(`INSERT INTO women (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'bridesmaids', '${bridesMaidsPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Brides Maids Logged');
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

    for(var i = 0; i < ringPage.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'rings', '${ringPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Rings Logged');
            }
        })
    }

    for(var i = 0; i < banglesPage.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'bangles', '${banglesPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Bangles Logged');
            }
        })
    }

    for(var i = 0; i < chokerPage.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'chokers', '${chokerPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Chockers Logged');
            }
        })
    }

    for(var i = 0; i < mathaPage.length; i++) {
        db.query(`INSERT INTO jewelry (title, description, price, category, images) VALUES ('${bridalTitle[i]}', '${bridalDescription[i]}', ${bridalPrices[i]}, 'matha', '${mathaPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Matha Logged');
            }
        })
    }

    for(var i = 0; i < mensPage.length; i++) {
        db.query(`INSERT INTO men (title, description, price, category, images) VALUES ('${mensTitle[i]}', '${mensDescription[i]}', ${mensPrice[i]}, 'men', '${mensPage[i]}')`, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Men Logged');
            }
        })
    }
}

createCategories();
