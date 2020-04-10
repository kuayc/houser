let getHouses = (req, res) => {
  let dbInstance = req.app.get("db");

  dbInstance
    .getAllHouses()
    .then((houses) => {
      res.status(200).json(houses);
    })
    .catch((err) => {
      res.status(500).send({ errorMessage: "Problem!" });
      console.log(err);
    });
};

let addToHouses = (req, res) => {
  let dbInstance = req.app.get("db");
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;

  dbInstance
    .addToHouses(name, address, city, state, zip, img, mortgage, rent)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).send({ errorMessage: "Problem!" });
      console.log(err);
    });
};

module.exports = {
  getHouses,
  addToHouses,
};
