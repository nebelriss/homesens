import React, { useEffect } from 'react';
import Title from '../../components/title.component';

const Location = ({ data, curLocation, locationId }) => {
  return (
    <div>
      <Title>{curLocation.name}</Title>
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
