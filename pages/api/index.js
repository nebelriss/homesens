import { getAllData } from "../../controllers/data";

export default (req, res) => {
  getAllData()
    .then((result) => {
      res.sendStatusCode = 200;
      res.json(result);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send(err);
    });
};
