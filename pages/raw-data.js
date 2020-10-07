import React from 'react';
import Title from '../components/title.component';
import { formatFromDB } from '../utils/time';

function Row({ row }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap text-center">{row.id}</td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">
        {`${Math.round(row.temperature)}°C`}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">
        {`${Math.round(row.humidity)}%`}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">
        {formatFromDB(row.created_at)}
      </td>
    </tr>
  );
}

function RawData({ data }) {
  return (
    <div>
      <Title>Raw Data</Title>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Temperature
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Humidity
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                      <Row row={row} key={row.id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
  return { props: { data } };
}

export default RawData;
