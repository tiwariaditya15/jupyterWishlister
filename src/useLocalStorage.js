import { useEffect, useState } from "react";

export default function useLocalStoarge() {
  const [wishList, setWishList] = useState([]);

  function getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("wishList"));
  }

  useEffect(() => {
    const wishes = getItemsFromLocalStorage();
    if (wishes) setWishList([...wishes]);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return [wishList, setWishList, getItemsFromLocalStorage];
}
