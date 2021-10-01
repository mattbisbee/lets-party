const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Chocolates' },
        { name: 'Flowers' },
        { name: 'Cookies' },
        { name: 'Books' },
        { name: 'Toys' },
        { name: 'Blankets'}
    ]);

    console.log('category seeding complete');

    await Product.deleteMany();
    
    const products = await Product.insertMany([
        {
            name: "Cake Pops",
            description: 'Wonderful, portable cup cake on a stick! Set of 4.',
            image: 'cake-pops.webp',
            price: 1.99,
            quantity: 200,
            category: categories[0]._id
        },
        {
            name: 'Truffle',
            description: 'Amazing chocolate truffles! Pack of 4.',
            image: 'truffle.webp',
            price: 1.99,
            quantity: 200,
            category: categories[0]._id
        },
        {
            name: "Easter Bunny",
            description: 'Because why wait for Easter? Comes with 2.',
            image: 'easter-bunny.webp',
            price: 4.99,
            quantity: 300,
            category: categories[0]._id
        },
        {
            name: "Fudge",
            description: 'Fudge is always a welcome gift! Pack of 10.',
            image: 'fudge.webp',
            price: 5.99,
            quantity: 300,
            category: categories[0]._id
        },
        {
            name: 'Rose',
            description: 'Add a classic red rose to your basket! Price is for 1.',
            image: 'rose.webp',
            price: 2.99,
            quantity: 500,
            category: categories[1]._id
        },
        {
            name: 'Tulip',
            description: 'Tulips add old world charm to your basket! Price is fopr 1.',
            image: 'tulip.webp',
            price: 1.99,
            quantity: 500,
            category: categories[1]._id
        },
        {
            name: 'Sunflower',
            description: 'Nothing will brighten up a day like a sunflower. Favorite of Van Gogh! Price is for 1.',
            image: 'sunflower.webp',
            price: 1.99,
            quantity: 500,
            category: categories[1]._id
        },
        {
            name: 'Lily',
            description: 'Gild your gift basket with a lily! Price is for 1.',
            image: 'lily.webp',
            price: 1.99,
            quantity: 500,
            category: categories[1]._id
        },
        {
            name: 'Chocolate Chip',
            description: 'Classic cookie for a classy gift basket! Price is for 4.',
            image: 'chocochip.webp',
            price: 3.99,
            quantity: 300,
            category: categories[2]._id
        },
        {
            name: 'Oatmeal Raisin',
            description: 'A hearty cookie that is sure to delight! Price is for 4.',
            image: 'oatmeal.webp',
            price: 3.99,
            quantity: 300,
            category: categories[2]._id
        },
        {
            name: 'Macaroons',
            description: 'A french masterpiece! Price is for 2 Vanilla.',
            image: 'macaroons.webp',
            price: 5.99,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: 'Double Chocolate Chip',
            description: 'Double the chocolate, double the deliciousness! Price is for 4.',
            image: 'doublechoc.webp',
            price: 3.99,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: 'Blank with brown cover',
            description: 'A great gift for an artist or future author!',
            image: 'blankbrown.webp',
            price: 19.99,
            quantity: 50,
            category: categories[3]._id
        },
        {
            name: 'Blank with black cover',
            description: 'A great gift for an artist or future author!',
            image: 'blankblack.webp',
            price: 19.99,
            quantity: 50,
            category: categories[3]._id
        },
        {
            name: 'Lined with black cover',
            description: 'Keep track of all your notes with this lined notebook.',
            image: 'linedblack.webp',
            price: 19.99,
            quantity: 50,
            category: categories[3]._id
        },
        {
            name: 'Decorative Journal',
            description: 'A nice decorative journal for that special something in your gift basket!',
            image: 'decojournal.webp',
            price: 29.99,
            quantity: 50,
            category: categories[3]._id
        },
        {
            name: 'Teddy Bear 1',
            description: 'A nice fluffy teddy bear!',
            image: 'teddy1.webp',
            price: 12.99,
            quantity: 50,
            category: categories[4]._id
        },
        {
            name: 'Teddy Bear 2',
            description: 'A nice fluffy teddy bear!',
            image: 'teddy2.webp',
            price: 6.99,
            quantity: 70,
            category: categories[4]._id
        },
        {
            name: 'Teddy Bear 3',
            description: 'A nice fluffy teddy bear!',
            image: 'teddy3.webp',
            price: 6.99,
            quantity: 70,
            category: categories[4]._id
        },
        {
            name: 'Teddy Bear 4',
            description: 'A nice fluffy teddy bear!',
            image: 'teddy4.webp',
            price: 6.99,
            quantity: 70,
            category: categories[4]._id
        },
        {
            name: 'Plaid Blanket',
            description: 'A fun decorative blanket.',
            image: 'plaid.webp',
            price: 22.95,
            quantity: 60,
            category: categories[5]._id
        },
        {
            name: 'Quilt',
            description: 'Nothing says quality like a quilt!',
            image: 'quilt.webp',
            price: 22.95,
            quantity: 60,
            category: categories[5]._id
        },
        {
            name: 'White Baby Blanket',
            description: 'A nice soft white baby blanket.',
            image: 'white.webp',
            price: 22.95,
            quantity: 60,
            category: categories[5]._id
        },
        {
            name: 'Pink Baby Blanket',
            description: 'A nice soft pink baby blanket.',
            image: 'pink.webp',
            price: 22.95,
            quantity: 60,
            category: categories[5]._id
        }
    ]);

    console.log('product seeding complete');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamelaw@testmail.com',
        password: 'password123',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elmo',
        lastName: 'Elmorrison',
        email: 'elmorrison@testmail.com',
        password: 'password123',
    });

    console.log('user seeding complete');

    process.exit();
});