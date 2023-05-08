import React, { createContext, useState, useEffect } from "react";
import { openDB } from "idb";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: "note_1659543580219",
      timestamp: 1659543580219,
      text: "Wow, what a cool note. Wow.",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const db = await openDB("myDatabase", 1);
      const tx = db.transaction("myObjectStore", "readonly");
      const store = tx.objectStore("myObjectStore");
      const result = await store.get("key");

      await tx.complete;
      db.close();

      setData(result);
    }

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
