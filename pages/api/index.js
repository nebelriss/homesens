import { getAllData, addData } from '../../controllers/data';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      getAllData()
        .then((result) => {
          res.sendStatusCode = 200;
          res.json(result);
        })
        .catch((e) => {
          res.statusCode = 400;
          res.send(e);
        });
      break;
    case 'POST':
      try {
        const result = await addData(body);
        res.statusCode = 200;
        res.send(result);
      } catch (e) {
        res.statusCode = 400;
        res.send(e);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
