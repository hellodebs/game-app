import { useEffect, useState } from "react";
export default function Nation({ name }) {
  const [nation, setNation] = useState([]);

  useEffect(() => {
    const url = `https://api.nationalize.io?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNation(data.country[0].country_id);
      });
  }, [name]);
  return <p>{nation}</p>;
}
