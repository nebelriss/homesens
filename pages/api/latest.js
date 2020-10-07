import { getNewestDataWithLocations } from "../../controllers/data";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default (req, res) => {
  getNewestDataWithLocations()
    .then((result) => {
      res.statusCode = 200;
      res.json(result);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send(err);
    });
};
