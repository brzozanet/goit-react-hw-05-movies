import "./Home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Hello Home</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"movies"}>Movies</Link>
    </>
  );
}
