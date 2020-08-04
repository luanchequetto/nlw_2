import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                        <header>
                            <img src="https://instagram.fbnu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/52717597_771297459894434_3570103925992325120_n.jpg?_nc_ht=instagram.fbnu1-1.fna.fbcdn.net&_nc_ohc=saAZkbiilboAX-l2j8D&oh=d85bf33ff213b957c125765e7ef75293&oe=5F5177BD" alt="Luan Gaertner"/>
                            <div>
                                <strong>Luan Gaertner</strong>
                                <span>React</span>
                            </div>
                        </header>

                        <p>
                        Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos ainda
                         não demonstrou convincentemente que vai participar na mudança das novas proposições.
                        </p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$30,00</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entrar em contato
                            </button>

                        </footer>
                    </article>
    );
}

export default TeacherItem;