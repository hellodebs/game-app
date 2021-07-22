import { useEffect, useState } from "react";

export default function Age({ name }) {
  const [age, setAge] = useState([]);

  useEffect(() => {
    const url = `https://api.agify.io?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.age);
        setAge(data.age);
      });
  }, [name]);
  return <p>{age}</p>;
}
