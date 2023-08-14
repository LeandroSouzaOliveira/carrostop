import "./styles.css";
import carImg from "../../assets/car-card.png";
import ProductButton from "../ProductButton";

export default function ProductDetailsCard() {
  return (
    <div className="car-card">
      <img src={carImg} alt="Carros" />
      <h3>Audi Supra TT</h3>
      <p>
        <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.Cupiditate,nisi
        </i>
      </p>
      <ProductButton/>
    </div>
  );
}
