import React from "react";
import viteLogo from "/vite.svg";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-gray-50 shadow-md px-1 md:px-8 py-1 md:py-4">
      <div className="flex gap-1 md:gap-4">
        <Link to="/">
          <img className="min-w-10" src={viteLogo} alt="logo" />
        </Link>
        <Link to="" className="text-lg md:text-3xl text-indigo-400">
          <h1>Custom Dashboard</h1>
        </Link>
      </div>
      <div className="flex gap-2 text-sm md:text-base">
        <Link
          to=""
          className="bg-sky-200 hover:bg-sky-300 px-1 md:px-2 py-1 rounded-sm cursor-pointer"
        >
          AccountsList
        </Link>
        <Link
          to="entryform"
          className="bg-sky-200 hover:bg-sky-300 px-1 md:px-2 py-1 rounded-sm cursor-pointer"
        >
          EntryForm
        </Link>
        <Link
          to="login"
          className="bg-sky-200 hover:bg-sky-300 px-1 md:px-2 py-1 rounded-sm cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
