import React from "react";
import { getDocs, getFirestore , collection} from "firebase/firestore";

export const useCollection = (collectionN) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();
    const dataCollection = collection(db, collectionN);

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {setError(true), console.log(error);})
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};