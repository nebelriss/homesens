import { Client } from "pg";

const getAllData = () => {
  const client = new Client();
  client.connect();

  return new Promise((resolve, reject) => {
    client.query(
      "SELECT * FROM data ORDER BY created_at DESC",
      (err, result) => {
        if (err) reject(err);
        client.end();
        resolve(result);
      }
    );
  });
};

const getNewestData = () => {
  const client = new Client();
  client.connect();

  return new Promise((resolve, reject) => {
    client.query(
      "SELECT * FROM data ORDER BY created_at DESC LIMIT 1",
      (err, result) => {
        if (err) reject(err);
        client.end();
        resolve(result);
      }
    );
  });
};

export { getAllData, getNewestData };
