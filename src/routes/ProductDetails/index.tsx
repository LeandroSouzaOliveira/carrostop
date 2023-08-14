import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import SearchBar from "../../components/SearchBar";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="car-section" className="car-container">
          <div>
            <SearchBar />
          </div>
          <div>
            <ProductDetailsCard />
            <ProductDetailsCard />
            <ProductDetailsCard />
          </div>
        </section>
      </main>
    </>
  );
}
