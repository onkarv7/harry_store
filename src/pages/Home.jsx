import Carousel from "react-bootstrap/Carousel";
import { half, halloes, haryy, prisoner, hary, phenix, stone } from "../assets";

const books = [
  {
    title: "Philosopher's Stone",
    img: stone,
  },
  {
    title: "Chamber of Secrets",
    img: halloes,
  },
  {
    title: "Prisoner of Azkaban",
    img: prisoner,
  },
  {
    title: "Goblet of Fire",
    img: haryy,
  },
  {
    title: "Order of Phoenix",
    img: phenix,
  },
  {
    title: "Half-Blood Prince",
    img: half,
  },
];

const Home = () => (
  <div className="container">
    <Carousel controls indicators interval={3000}>
      {books.map((book, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 img-fluid"
            src={book.img}
            alt={book.title}
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default Home;
