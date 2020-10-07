import dayjs from "dayjs";

const formatFromDB = (dbTime) => {
  return dayjs(dbTime).format("DD.MM.YYYY HH:mm");
};

export { formatFromDB };
