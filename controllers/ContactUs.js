const { prisma } = require('../prisma-client/index');

async function createContactUs(req, res) {
  try {
    console.log(req.body);
    const newContact = await prisma.ContactUs.create({
      data: { name, email, message },
    });

    res.status(201).json({
      success: true,
      message: 'Data has been recorded :)',
      data: newContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getContactUs(req, res) {
  try {
    const contactList = await prisma.ContactUs.findMany();
    res.status(200).json({
      success: true,
      data: contactList,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error!!!',
    });
  }
}

module.exports = {
  getContactUs,
  createContactUs,
};