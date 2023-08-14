import "./styles.css";
import carImg from "../../assets/car-card.png";

export default function ProductDetailsCard() {
  return (
    <div className="car-product-cards">
      <div className="car-card">
        <div className="car-card-img">
          <img src={carImg} alt="Carros" />
        </div>
        <div className="car-card-items">
          <h2>Audi Supra TT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,
            nisi
          </p>
          <div className="car-button car-btn-blue">Comprar</div>
        </div>
      </div>
    </div>
  );
}
