import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";

export default function ProductDetails() {
    return (
        <>
        <HeaderClient />
        <main>
            <section id="car-section" className="car-container">
                <div><SearchBar /></div>
            </section>
        </main>
        </>
    );
}