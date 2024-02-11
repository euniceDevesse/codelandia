import './contentPage.css'
import heart from "../../assets/heart.svg"
import heart1 from "../../assets/heart1.svg"
export default function ContentPage() {
    return (

        <div className="container-blocks">
            <div className="box">
                <div className="date">
                    <p>17 de ago, 2024</p>
                    <img src={heart} />
                </div>
                <h3>O que é linguagem de programação? Conheça as principais</h3>
                <p>Uma das mais populares vertentes da tecnologia da informação, a área de programação
                    segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.</p>
            </div>

            <div className="box box1">
                <div className="date">
                    <p>12 de jul, 2024</p>
                    <img src={heart1} />
                </div>
                <h3>GitHub agora permite fazer login sem precisar de senha</h3>
                <p>O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. 
                A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.</p>
            </div>

            <div className="box box1">
                <div className="date">
                    <p>21 de jun, 2024</p>
                    <img src={heart1} />
                </div>
                <h3>Por que os hiperlinks são azuis em sua maioria?</h3>
                <p>Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil.
                    Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.</p>
            </div>
        </div>



    )
}