import { getLocations } from "../../../controllers/data";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const result = await getLocations();
        res.sendStatusCode = 200;
        res.json(result.rows);
      } catch (e) {
        res.statusCode = 400;
        res.send(e);
      }
      break;
    case "POST":
      res.statusCode = 200;
      res.send("post working");
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
