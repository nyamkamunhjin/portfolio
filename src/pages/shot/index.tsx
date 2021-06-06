/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';

const Shot: FC = () => (
  <div className="flex items-center justify-center bg-gray-50 h-screen gap-52 p-80">
    <div className="w-80 flex flex-col items-start gap-4">
      <p className="text-3xl font-bold text-gray-700">
        Designed for the modern developer's worflow
      </p>

      <span className="text-sm text-gray-500">
        Use the languages you already love to prototype ideas and launch a
        production-ready system.
      </span>

      <button className="text-lg font-semibold text-blue-600" type="button">
        Read Docs
      </button>
    </div>

    <div className="flex flex-col items-start gap-32 w-full">
      <div className="font-semibold rounded-lg p-16 shadow-2xl">
        Integration
      </div>
      <div className="font-semibold rounded-lg p-16 shadow-2xl self-end">
        Server Side SDKs
      </div>
      <div className="font-semibold rounded-lg p-16 shadow-2xl">
        Client Side SDKs
      </div>
    </div>
  </div>
);

export default Shot;
