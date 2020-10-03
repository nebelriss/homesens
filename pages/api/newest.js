import { getNewestData } from "../../controllers/data";

export default (req, res) => {
  getNewestData()
    .then((result) => {
      res.statusCode = 200;
      res.json(result.rows[0]);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send(err);
    });
};
