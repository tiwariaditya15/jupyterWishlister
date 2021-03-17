import { useState } from "react";

function getItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("wishList"));
}
export default function useLocalStoarge() {
  const [wishList, setWishList] = useState([]);

  if (wishList.length) {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }

  return [wishList, setWishList, getItemsFromLocalStorage];
}
