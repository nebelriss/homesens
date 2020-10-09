import { formatFromDB, getDateFromDateTime } from './time';

const getLast24h = (data) => {
  const formatedData = formatTemperaturePerDay(data);
  return {
    labels: Object.keys(formatedData),
    data: Object.values(formatedData),
  };
};

const formatTemperaturePerDay = (data) => {
  const result = data.reduce((result, entry) => {
    const date = getDateFromDateTime(entry.created_at);
    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(entry);
    return result;
  }, {});

  // calculate median for day
  const objMap = Object.keys(result).map((key) => [
    key,
    parseInt(
      Math.round(
        result[key].reduce(
          (orig, item) => orig + parseInt(item.temperature),
          0,
        ) / result[key].length,
      ),
    ),
  ]);
  return Object.fromEntries(objMap);
};

export { getLast24h };
