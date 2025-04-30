"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export const metadata = {
    title: "General Physicians | Book Doctor Consultation Online - Apollo Clone",
    description:
      "Find the best general physicians and internal medicine doctors online. Book appointments, check experience, consultation fees, and availability instantly.",
    keywords: [
      "General Physician",
      "Internal Medicine",
      "Doctor Consultation Online",
      "Apollo Clone",
      "Best doctors near me",
    ],
    openGraph: {
      title: "General Physicians | Apollo Clone",
      description:
        "Book top general physicians and internal medicine specialists online with ease.",
      url: "https://your-clone-url.com/destination",
      siteName: "Apollo Clone",
      images: [
        {
          url: "https://your-clone-url.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Apollo General Physicians",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Consult General Physicians Online - Apollo Clone",
      description:
        "Easily book appointments with top-rated general physicians through our Apollo 24/7 clone.",
      images: ["https://your-clone-url.com/twitter-image.jpg"],
    },
    alternates: {
      canonical: "https://your-clone-url.com/destination",
    },
  };
  

export default function DestinationPage() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
    minExperience: 0,
    modeOfConsult: "",
    minFee: 0,
    maxFee: 0,
    languages: [],
  });

  const fetchDoctors = async () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else if (value !== "") {
        params.append(key, value);
      }
    });

    const res = await fetch(`/api/listdoctorwithfilter?${params.toString()}`);
    const data = await res.json();
    setDoctors(data.data);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value),
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Dummy Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Left Logo + Location */}
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1">
            <span className="text-orange-600 font-bold text-xl">Dcotor</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
              24|7
            </span>
          </div>
          <div className="text-sm text-gray-700 border-l pl-4 border-gray-300">
            <span className="font-medium">Select Location</span>{" "}
            <span className="text-gray-500">| Select Address</span>
          </div>
        </div>

        {/* Center Search */}
        <div className="flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search Doctors, Specialities, Conditions etc."
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Right Navigation & Profile */}
        <div className="flex items-center space-x-6">
          {[
            "Buy Medicines",
            "Find Doctors",
            "Lab Tests",
            "Membership",
            "Health Records",
          ].map((item) => (
            <span
              key={item}
              className="text-sm text-gray-700 cursor-pointer hover:text-blue-600"
            >
              {item}
            </span>
          ))}
          <button className="text-sm text-blue-600 font-medium">Login</button>
          <div className="w-8 h-8 rounded-full bg-gray-300">
            {" "}
            <Image alt="user " src={"/user.jpg"} width={32} height={32} />{" "}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>

          {/* Experience Filter */}
          <div>
            <label className="block text-md font-medium">Min Experience</label>
            <input
              type="number"
              name="minExperience"
              value={filters.minExperience}
              onChange={handleFilterChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter experience"
            />
          </div>

          {/* Mode of Consultation */}
          <div>
            <label className="block text-md font-medium">
              Mode of Consultation
            </label>
            <select
              name="modeOfConsult"
              value={filters.modeOfConsult}
              onChange={handleFilterChange}
              className="w-full mt-2 p-2 border rounded-lg"
            >
              <option value="">Any</option>
              <option value="online">Online</option>
              <option value="hospital visit">Hospital Visit</option>
            </select>
          </div>

          {/* Fee Range */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-md font-medium">Min Fee</label>
              <input
                type="number"
                name="minFee"
                value={filters.minFee}
                onChange={handleFilterChange}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-md font-medium">Max Fee</label>
              <input
                type="number"
                name="maxFee"
                value={filters.maxFee}
                onChange={handleFilterChange}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Language Filter */}
          <div>
            <label className="block text-md font-medium mb-2">Languages</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "English",
                "Hindi",
                "Tamil",
                "Spanish",
                "Gujarati",
                "Malayalam",
              ].map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="languages"
                    value={lang}
                    onChange={handleFilterChange}
                    checked={filters.languages.includes(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Doctor Listing */}
        <main className="flex-1">
          {doctors.length === 0 ? (
            <p className="text-center text-lg text-gray-600 mt-8">
              No doctors found matching the filters.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Name and Availability in One Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {doctor.name}
                    </h3>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                        doctor.availableToday
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {doctor.availableToday
                        ? "Available Today"
                        : "Unavailable"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span>{" "}
                    {doctor.experience} years
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Consultation Mode:</span>{" "}
                    {doctor.modeOfConsult}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Languages:</span>{" "}
                    {doctor.languages.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Rating:</span> {doctor.rating}
                  </p>
                  <p className="text-md font-semibold text-gray-800 mt-2">
                    ₹{doctor.consultationFee}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      per consultation
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={() =>
                setFilters((prev) => ({ ...prev, page: prev.page - 1 }))
              }
              disabled={filters.page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-4 disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-lg font-medium">Page {filters.page}</span>
            <button
              onClick={() =>
                setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-4"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
