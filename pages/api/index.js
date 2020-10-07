import { getAllData } from '../../controllers/data';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      getAllData()
        .then((result) => {
          res.sendStatusCode = 200;
          res.json(result);
        })
        .catch((err) => {
          res.statusCode = 400;
          res.send(err);
        });
      break;
    case 'POST':
      res.statusCode = 200;
      res.send('post working');
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
