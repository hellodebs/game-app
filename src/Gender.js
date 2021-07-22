import { useEffect, useState } from "react";

export default function Gender({ name }) {
  const [gender, setGender] = useState([]);
  useEffect(() => {
    const url = `https://api.genderize.io/?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGender(data.gender);
        //console.log(data.gender);
      });
  }, [name]);
  return <p>{gender}</p>;
}
