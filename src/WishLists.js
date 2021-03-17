import { useEffect, useState } from "react";
import uuid from "react-uuid";
import useLocalStoarge from "./useLocalStorage";
import { GrAdd } from "react-icons/gr";
import { BiError } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
function ShowError({ msg, setError }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <span
        style={{
          fontSize: "1rem",
          color: "#EF4444",
          border: "1px solid #EF4444",
          padding: "0.5rem",
          borderRadius: "0.1rem"
        }}
      >
        <BiError /> {msg}
        <span
          style={{
            position: "absolute",
            bottom: "1.6rem",
            cursor: "pointer"
          }}
          onClick={() =>
            setError((prevError) => {
              return { ...prevError, notext: false };
            })
          }
        >
          <MdCancel />
        </span>
      </span>
    </div>
  );
}

function WishListing({ wishList, handleDeleteWish }) {
  return wishList.map(({ id, text }) => (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#DBEAFE",
        maxWidth: "55%",
        margin: "1px auto",
        padding: "1.5rem",
        borderRadius: "0.3rem",
        color: "#1E3A8A",
        fontWeight: "bolder",
        wordWrap: "break-word"
      }}
    >
      <span style={{ display: "inline" }}>{text}</span>
      <span style={{ cursor: "pointer" }} onClick={(e) => handleDeleteWish(id)}>
        <MdCancel />
      </span>
    </div>
  ));
}
export default function Wishlists({}) {
  const [error, setError] = useState({ notext: false, overflow: false });
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList, getItemsFromLocalStorage] = useLocalStoarge();

  useEffect(() => {
    const wishes = getItemsFromLocalStorage();
    if (wishes) setWishList([...wishes]);
  }, []);
  const handleDeleteWish = (id) => {
    setWishList(wishList.filter((wish) => wish.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter wishlist"
        value={wishText}
        style={{ padding: "0.3rem" }}
        onChange={(e) => setWishText(e.target.value)}
      />
      <button
        style={{
          padding: "0.3rem",
          borderRadius: "0.1rem",
          border: "1px solid",
          margin: "1rem"
        }}
        onClick={() => {
          wishText.length
            ? setWishList(wishList.concat({ id: uuid(), text: wishText }))
            : setError({ ...error, notext: true });
          setWishText("");
        }}
      >
        <GrAdd />
      </button>
      <br />
      {error.notext && (
        <ShowError msg="Text area is empty" setError={setError} />
      )}
      <br />
      <WishListing wishList={wishList} handleDeleteWish={handleDeleteWish} />
    </div>
  );
}
