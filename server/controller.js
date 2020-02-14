var getHousesAll = async (req, res) => {
    var db = req.app.get('db');
    var houses = await db.getHousesAll();

    res
    .status(200)
    .send(houses);
}

var addHouse = async (req, res) => {
    var db = req.app.get('db');
    let { name, address, city, state, zipcode, imgURL, monthly_mortgage_rate, desired_rent } = req.body;
    await db.addHouse( name, address, city, state, zipcode, imgURL, monthly_mortgage_rate, desired_rent );

    res
    .status(200)
    .send('Excellent!');
}

var deleteHouse = async (req, res) => {
    var db = req.app.get('db');
    let { id } = req.params;
    var houses = await db.deleteHouse(id);
    
    res
    .status(200)
    .send(houses);
}

module.exports = {
    getHousesAll,
    addHouse,
    deleteHouse
}