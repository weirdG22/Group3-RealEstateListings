"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div>
      <Header />

      <section className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">Units</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the units in your account including their address, beds, baths, and sqft.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="transition block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add unit
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
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
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        123 Address Rd, Indianapolis, IN, 46227
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        5
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        4
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2564
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Active
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        True
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-blue-500 hover:text-blue-900 transition"
                        >
                          Edit<span className="sr-only">, 123 Address Rd, Indianapolis, IN, 46227</span>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        123 Address Rd, Indianapolis, IN, 46227
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        5
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        4
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2564
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Active
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        True
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-blue-500 hover:text-blue-900 transition"
                        >
                          Edit<span className="sr-only">, 123 Address Rd, Indianapolis, IN, 46227</span>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        123 Address Rd, Indianapolis, IN, 46227
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        5
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        4
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2564
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Active
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        True
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-blue-500 hover:text-blue-900 transition"
                        >
                          Edit<span className="sr-only">, 123 Address Rd, Indianapolis, IN, 46227</span>
                        </a>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
