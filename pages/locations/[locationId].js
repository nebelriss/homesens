import React from 'react';
import Title from '../../components/title.component';
import LineChart from '../../components/linechart.component';
import { getLast24h } from '../../utils/chartData';
import { lightBlue, lightGreen } from '../../utils/chartColors';

const Location = ({ data, curLocation, locationId }) => {
  const formatedTempData = getLast24h(data, { type: 'temperature' });
  const formatedHumData = getLast24h(data, { type: 'humidity' });
  formatedTempData['name'] = 'Temperature';
  formatedTempData['color'] = lightGreen;
  formatedHumData['name'] = 'Humidity';
  formatedHumData['color'] = lightBlue;
  return (
    <div>
      <Title>{curLocation.name}</Title>
      <div className="max-w-screen-md">
        <LineChart data={formatedTempData} />
        <LineChart data={formatedHumData} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const locationId = context.query.locationId;
  const resLoc = await fetch(
    `http://localhost:3000/api/locations/${locationId}`,
  );
  const curLocation = await resLoc.json();
  const resData = await fetch(`http://localhost:3000/api/data/${locationId}`);
  const data = await resData.json();
  return { props: { data, curLocation, locationId } };
}

export default Location;
