import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Item({category, filename, list}) {
  return (
    <>
      <div className="p-4 m-4 border border-gray-300 rounded-md shadow-md bg-[white]">
        <div className="font-bold mb-2">Kind: {category}</div>
        <div className="italic text-gray-600 mb-4">Filename: {filename}</div>
        {list.map((item, index) => (
          <div className="bg-gray-100 rounded-md p-2 mb-2 bg-stone-100" key={index}>
            {/* {item} */}

            <Link
                    to={{
                      pathname: '/detail-document',
                      state: {
                        filename: item.filename,
                      }
                    }}
                    style={{cursor: 'pointer' }}
                  >
                    <span>
                      {item}
                    </span>
                  </Link>
          </div>
        ))}
      </div>
    </>
  );
}