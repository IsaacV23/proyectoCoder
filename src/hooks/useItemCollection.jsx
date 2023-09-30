import React from "react";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export const useItemCollection = (collectionN, itemId) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const db = getFirestore();
    const item = doc(db, collectionN, itemId);

    getDoc(item)
      .then((snapshot) => {
        setData({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [itemId]);

  return { data, loading };
};