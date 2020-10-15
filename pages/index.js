import Location from '../components/location.component';

function Home({ data }) {
  return (
    <div className="pt-2 pb-6 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* <!-- Replace with your content --> */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((location) => (
              <li
                key={location.id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow"
              >
                <Location data={location} />
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- /End replace --> */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const resData = await fetch('http://localhost:3000/api/latest');
  const data = await resData.json();
  return { props: { data } };
}

export default Home;
