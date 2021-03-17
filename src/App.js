import "./styles.css";
import WishLists from "./WishLists";
export default function App() {
  return (
    <div className="App">
      <section
        style={{
          display: "column",
          justifyContent: "center",
          backgroundColor: "#DBEAFE",
          padding: "2.8rem",
          fontSize: "2rem",
          fontWeight: "750",
          marginBottom: "4rem",
          color: "#1E3A8A"
        }}
      >
        <span>Jupyter Wishlister</span>
        <br />
        <span
          style={{
            fontSize: "0.8rem"
          }}
        >
          A place to keep your wishes together
        </span>
      </section>
      <WishLists />
    </div>
  );
}
