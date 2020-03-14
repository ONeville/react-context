import React from "react";

export const TetePage = () => (
  <nav className="bg-gray-800 text-white shadow">
    <div className="md:px-8">
      <nav className="relative flex flex-wrap items-center justify-between md:py-4">
        <div className="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
          <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" />
        </div>
        <div className="flex-shrink-0 pr-4 md:hidden">
          <button
            type="button"
            className="block text-gray-600 focus:outline-none focus:text-gray-200"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
              <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
              <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent">
          <div className="lg:absolute inset-0 flex items-center justify-center">
            <a
              href="/"
              className="text-sm font-medium text-gray-200 hover:text-gray-700"
            >
              Products
            </a>
            <a
              href="/"
              className="ml-10 text-sm font-medium text-gray-200 hover:text-gray-700"
            >
              Marketplace
            </a>
            <a
              href="/"
              className="ml-10 text-sm font-medium text-gray-200 hover:text-gray-700"
            >
              Partners
            </a>
            <a
              href="/"
              className="ml-10 text-sm font-medium text-gray-200 hover:text-gray-700"
            >
              About
            </a>
          </div>
          <div className="ml-10 relative flex items-baseline">
            <a
              href="/"
              className="text-sm font-medium text-gray-200 hover:text-gray-700"
            >
              Log in
            </a>
            <a
              href="/"
              className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-200 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Create Account
            </a>
          </div>
        </div>
      </nav>
    </div>
  </nav>
);
