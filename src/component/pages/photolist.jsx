import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Comarisontable from "./comarisontable";
import Photolistdetails from "./photolistdetails";

function Photolist() {
  const [loading, setLoading] = useState(true);
  const [photolist, setPhotoList] = useState([]);
  const [listShow, setListshow] = useState(false);
  const [compareTable, setCompareTable] = useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setPhotoList(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const addItemInCompareTable = (id, url, title, thumbnailUrl) => {
    const userInput = {
      id: id,
      url: url,
      title: title,
      thumbnailUrl: thumbnailUrl,
    };
    const list = [...compareTable];
    list.push(userInput);
    setCompareTable(list);
    setListshow(true);
  };

  const removeData = (key) => {
    const list = [...compareTable];
    const updateList = list.filter((item) => item.id !== key);
    setCompareTable(updateList);
  };

  return (
    <Container>
      <h2 className="heading">Photo Listing View</h2>
      {loading ? (
        <Photolistdetails
          photolist={photolist}
          addItemInCompareTable={addItemInCompareTable}
          removeData={removeData}
          compareTable={compareTable}
        />
      ) : (
        ""
      )}
      {listShow ? <Comarisontable compareTable={compareTable} /> : ""}
    </Container>
  );
}

export default Photolist;
