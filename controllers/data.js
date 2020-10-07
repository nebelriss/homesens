import { Client } from "pg";

const getAllData = () => {
  const client = new Client();
  client.connect();

  return new Promise((resolve, reject) => {
    client.query(
      `SELECT
        d.id,
        d.location AS location_id,
        l.name AS LOCATION,
        l.in_or_out,
        s.id AS sensor_id,
        s.type AS sensor_type,
        d.temperature,
        d.humidity,
        d.barometric_pressure,
        d.created_at
      FROM
        DATA d
        INNER JOIN locations l ON l.id = d.location
        INNER JOIN sensors s ON s.id = d.sensor
      ORDER BY
        created_at DESC;`,
      (err, result) => {
        if (err) reject(err);
        client.end();
        resolve(result.rows);
      }
    );
  });
};

const getLocationByID = (id) => {
  const client = new Client();
  client.connect();

  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.query(
        `SELECT * FROM locations WHERE id = ${id}`
      );
      client.end();
      resolve(res);
    } catch (e) {
      client.end();
      reject(e);
    }
  });
};

const getLocations = () => {
  const client = new Client();
  client.connect();

  return new Promise(async (resolve, reject) => {
    try {
      const resLocation = await client.query(
        `SELECT id, name, in_or_out, created_at FROM locations;`
      );
      client.end();
      resolve(resLocation);
    } catch (e) {
      client.end();
      reject(e);
    }
  });
};

const getDataByLocation = async (location) => {
  const locations = await getLocations();

  const client = new Client();
  client.connect();

  const result = {};

  const newRes = await Promise.all(
    locations.rows.map((location) => {
      return client.query(`SELECT * FROM data WHERE location = ${location.id}`);
    })
  );

  console.log(result);
  //console.log(newRes);
  return Promise.resolve(newRes);
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

const getNewestDataWithLocations = () => {
  const client = new Client();
  client.connect();

  return new Promise(async (resolve, reject) => {
    try {
      const data = await client.query(
        `WITH summary AS (
          SELECT
          d.id,
          d.location,
          d.sensor,
          d.temperature,
          d.humidity,
          d.created_at,
          ROW_NUMBER() OVER (
            PARTITION BY d.location
            ORDER BY
              d.created_at DESC
          ) AS rk
        FROM
          DATA d
        )
        SELECT
          s.id,
          l.id AS location_id,
          l.name AS location_name,
          l.in_or_out,
          s.sensor AS sensor_id,
          s.temperature,
          s.humidity,
          s.created_at
        FROM
          summary s
          INNER JOIN locations l ON l.id = s.location
        WHERE
          s.rk = 1`
      );
      client.end();
      resolve(data.rows);
    } catch (e) {
      client.end();
      reject(e);
    }
  });
};

export {
  getAllData,
  getDataByLocation,
  getLocations,
  getNewestData,
  getNewestDataWithLocations,
};
