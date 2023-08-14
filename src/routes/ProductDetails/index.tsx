import './styles.css';
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import SearchBar from "../../components/SearchBar";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main className="car-product-main">
        <section id="car-section" className="car-container">
          <div className="car-search-bar-container">
            <SearchBar />
          </div>
          <div className="car-product-details-container">
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
          </div>
        </section>
      </main>
    </>
  );
}
