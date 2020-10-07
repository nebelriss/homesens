import moment from 'moment';

const formatFromDB = (dbTime) => {
  return moment(dbTime).format('DD.MM.YYYY HH:mm');
};

export { formatFromDB };
