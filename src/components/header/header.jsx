import './header.css'
import Codelândia from "../../assets/Codelândia.svg"
import search from "../../assets/search.svg"
export default function Header() {
    return (
        <div className="container-header">
            <div className="logo">
                <img src={Codelândia} />
                <div className="nav">
                    <img src={search} />
                    <p>Pesquisar no blog</p>
                </div>

            </div>
        </div>
    )
}