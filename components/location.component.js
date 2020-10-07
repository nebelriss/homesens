const { default: Link } = require('next/link');

const Room = ({ data }) => {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        <Link href={`/locations/${data.location_id}`}>
          <a>{data.location_name}</a>
        </Link>
      </h3>
      <div>Temerature: {Math.round(data.temperature)}°C</div>
      <div>Humidity: {Math.round(data.humidity)}%</div>
    </div>
  );
};

export default Room;
