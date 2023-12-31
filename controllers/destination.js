const {prisma} = require('../prisma-client/index')

async function createDestinations(req, res) {
    try {
        const { title, itemSrc, name, idkota, price } = req.body;
        console.log(req.body)
        const destination = await prisma.Destinations.create({
         data: {
            title: title,
            itemSrc: itemSrc,
            name: name,
            idkota: idkota,
            price: price
         },
        })

        res.status(201).json({
            success: true,
            message: 'data has been recorded:)'
        })
    } catch (error) {
        console.log (error)
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function getDestinations(req, res) {
    try {
        const destination = await prisma.Destinations.findMany();
        console.log(destination);
        res.status(200).json({
            success: true,
            data: destination
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: 'server error!!!'
        })
    }
}

async function getDestinationsbyid(req, res) {
    try{
        const {id} = req.params;
        user.findOne({where: { id: id }}).then((user) => {
            res.json({message: "User found", data: user});
        }).catch((err) => {
            res.status(400).json({status: "Failed Show Data", msg: err});
        })
        } catch (err) {
            res.status(500).json({status: "Failed Show Data", msg: err});
        }
    }

module.exports = {
    getDestinations,
    createDestinations,
    getDestinationsbyid

}