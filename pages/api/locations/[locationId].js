export default async (req, res) => {
  const {
    method,
    query: { locationId },
  } = req;

  switch (method) {
    case "GET":
      res.sendStatusCode = 200;
      res.send(`Get by Id: ${locationId}`);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
