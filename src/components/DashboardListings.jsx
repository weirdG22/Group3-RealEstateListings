import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

export default function DashboardListings() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    const res = fetch("/api/units", { cache: "no-store" })
      .then((res) => res.json())
      .then(({ units }) => {
        setUnits(units);
        setLoading(false);
      });
  }, []);

  if (loading || !isLoaded) return <p>Loading...</p>

  let myUnits = [];
  units.forEach(unit => {
    if (unit.ownerId === userId) myUnits.push(unit);
  });

  if (!myUnits) return <p>No units to display.</p>

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
        <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Type of Unit
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Address
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Bedrooms
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Bathrooms
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Sqft
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Posted
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {myUnits.map((unit, index) => (
          <tr key={index}>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.type === "sale" ? "For Sale" : "For Rent"}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {unit.address}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {formatPrice(unit.price)}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.beds}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.baths}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.sqft}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.status}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {unit.posted ? "Yes" : "No"}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a
                href={"/dashboard/" + unit._id}
                className="text-blue-500 hover:text-blue-900 transition"
              >
                Edit
                <span className="sr-only">
                  , 123 Address Rd, Indianapolis, IN, 46227
                </span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
