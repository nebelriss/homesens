import moment from 'moment';

const formatFromDB = (dbTime) => {
  return moment(dbTime).format('DD.MM.YYYY HH:mm');
};

const getDateFromDateTime = (dateTime) => {
  return moment(dateTime).format('DD.MM.YYYY');
};

const getArrLast24h = () => {};
const getArrLastMonth = () => {};
const getArrLastYear = () => {};

export {
  formatFromDB,
  getDateFromDateTime,
  getArrLast24h,
  getArrLastMonth,
  getArrLastYear,
};
