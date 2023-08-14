import './styles.css';

export default function SearchBar() {
    return (
        <form className="car-search-bar car-card-bottom">
            <input className="car-form-control" type="text" placeholder="Digite sua busca" />
            <button className="car-button car-btn-search" type="submit">Buscar</button>
        </form>
    );
}