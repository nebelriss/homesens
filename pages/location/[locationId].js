import { useRouter } from "next/router";

const getLocationId = () => {
  const router = useRouter();
  const { locationId } = router.query;
  return locationId;
};

const Location = ({ data }) => {
  const locationId = getLocationId();

  return <div>Location ID: {locationId}</div>;
};

export async function getServerSideProps() {
  const locationId = getLocationId();
  const resData = await fetch(
    `http://localhost:3000/api/location/${locationId}`
  );
  const data = await resData.json();
  return { props: { data } };
}

export default Location;
