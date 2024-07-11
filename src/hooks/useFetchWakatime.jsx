import { useEffect, useState } from 'react';

const useFetchWakatime = ( url ) => {
  const [data, setData] = useState(null);

  const getWakatime = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (url) {
      getWakatime(url);
    }
  }, [url]);

  return { data };
};

export default useFetchWakatime;
