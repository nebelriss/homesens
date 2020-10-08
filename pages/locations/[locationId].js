import React from 'react';
import Title from '../../components/title.component';

const Location = ({ data, curLocation, locationId }) => {
  const data2 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <div>
      <Title>{curLocation.name}</Title>
      <div className="max-w-screen-md"></div>
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
