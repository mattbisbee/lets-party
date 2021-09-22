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

    console.log('categories seeded');

    await Product.deleteMany();
    
    const products = await Product.insertMany([
        {
            name: "Reese's Peanut Butter Cup",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[0]._id,
            price: 1.99,
            quantity: 200
        },
        {
            name: 'Symphony Bar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[0]._id,
            price: 1.99,
            quantity: 200
        },
        {
            name: "Hershey's",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[0]._id,
            price: 1.98,
            quantity: 300
        },
        {
            name: 'Rose',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[1]._id,
            price: 2.99,
            quantity: 500
        },
        {
            name: 'Tulip',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
        },
        {
            name: 'Sunflower',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
        },
        {
            name: 'Chocolate Chip',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[2]._id,
            price: 1.99,
            quantity: 300
        },
        {
            name: 'Macadamia Nut',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[2]._id,
            price: 1.99,
            quantity: 300
        },
        {
            name: 'Cookie Dough Cookie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[2]._id,
            price: 14.99,
            quantity: 5
        },
        {
            name: 'HTML and CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[3]._id,
            price: 19.99,
            quantity: 50
        },
        {
            name: 'Javascript and JQuery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[3]._id,
            price: 19.99,
            quantity: 50
        },
        {
            name: 'Teddy Bear',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[4]._id,
            price: 12.99,
            quantity: 50
        },
        {
            name: 'Action figure',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[4]._id,
            price: 6.99,
            quantity: 70
        },
        {
            name: 'Blue Blanket',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[5]._id,
            price: 22.95,
            quantity: 60
        },
        {
            name: 'Red Blanket',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit nec ullamcorper fringilla.',
            image: '',
            category: categories[5]._id,
            price: 22.95,
            quantity: 60
        }
    ]);

    console.log('products seeded');

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
        password: 'password123'
    });

    console.log('users seeded');

    process.exit();
});