const {prisma} = require('../prisma-client/index')

async function createUser(req, res) {
    const { name, email, telp_number, destinations, address, quantity, Price, payment_method, day_date, pickup_time } = req.body;
    try {
        const User = await prisma.User.create({
         data: {
            name,
            email,
            telp_number,
            destinations,
            address: jl.address,
            quantity,
            Price,
            payment_method,
            day_date,
            pickup_time
         },
        })

        res.status(201).json({
            success: true,
            message: 'data has been recorded:)'
        })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function getUser(req, res) {
    try {
        const User = await prisma.User.findMany();
        console.log(Users);
        res.status(200).json({
            success: true,
            data: User
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: 'server error!!!'
        })
    }
}


module.exports = {
    getUser,
    createUser
}