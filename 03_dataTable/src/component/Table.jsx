
import React from "react";
import {
  RiSortAsc,
  RiSortDesc,
} from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { sortUsersByField } from "../reduxToolkit/dataReducer/dataSlice";

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const { sortBy, sortDirection } = useSelector((state) => state.data);

  const handleSort = (field) => {
    dispatch(sortUsersByField(field));
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return <RiSortAsc className="inline ml-1" />;
    return sortDirection === "asc" ? (
      <RiSortAsc className="inline ml-1" />
    ) : (
      <RiSortDesc className="inline ml-1" />
    );
  };

  return (
    <div>
      <div className="relative max-w-7xl mx-auto   mt-10">
        <table className="w-full text-sm text-left rounded-2xl rtl:text-right  text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase  bg-gray-700  text-white rounded-2xl">
            <tr>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("id")}>
                ID {getSortIcon("id")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("first_name")}>
                First Name {getSortIcon("first_name")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("last_name")}>
                Last Name {getSortIcon("last_name")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("email")}>
                Email {getSortIcon("email")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("gender")}>
                Gender {getSortIcon("gender")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("city")}>
                City {getSortIcon("city")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr
                key={ele.id}
                className="bg-gray-400 font-bold text-black border-b "
              >
                <th
                  scope="row"
                  className="px-6 py-4  font-bold text-black whitespace-nowrap "
                >
                  {ele.id}
                </th>
                <td className="px-6 py-4">{ele.first_name}</td>
                <td className="px-6 py-4">{ele.last_name}</td>
                <td className="px-6 py-4">{ele.email}</td>
                <td className="px-6 py-4">{ele.gender}</td>
                <td className="px-6 py-4">{ele.city}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
};

export default Table;