import React from "react";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import './style.css';

export default function Sabores () {
    return (
        <div>
            <Topo/>

            <main>
                <section className="secao-banner-sabores">
                    <div className="texto-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className="limita-secao secao-sabores-sorvetes">
                    <h2>SABORES DE SORVETE</h2>

                    <div className="container-cards-sorvetes">
                        <div className="card-sorvetes">
                            <img src="./assets/sabor-oreo.png" alt="sorvete-de-oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className="card-sorvetes">
                            <img src="./assets/sabor-pistache.png" alt="sorvete-de-pistache"/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className="card-sorvetes">
                            <img src="./assets/sabor-cookies-avela.png" alt="sorvete-de-cokkies-e-avela"/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className="card-sorvetes">
                            <img src="./assets/sorbet-kiwi.png" alt="sorvete-de-kiwi"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className="card-sorvetes">
                            <img src="./assets/sorbet-morango.png" alt="sorvete-de-morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                        <div className="card-sorvetes">
                            <img src="./assets/sorbet-limao.png"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>

            </main>

            <Rodape/>
        </div>
    );
}