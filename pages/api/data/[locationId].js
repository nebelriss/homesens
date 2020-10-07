import { getDataByLocation } from '../../../controllers/data';

export default async (req, res) => {
  const {
    method,
    body,
    query: { locationId },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const result = await getDataByLocation(locationId);
        res.sendStatusCode = 200;
        res.json(result);
      } catch (e) {
        res.sendStatusCode = 400;
        res.send(e);
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
