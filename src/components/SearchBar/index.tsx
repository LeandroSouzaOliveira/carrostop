import './styles.css';

export default function SearchBar() {
    return (
        <form className="dsc-search-bar car-card-bottom">
            <input type="text" placeholder="Digite sua busca" />
            <button className="car-button car-btn-search" type="submit">Buscar</button>
        </form>
    );
}