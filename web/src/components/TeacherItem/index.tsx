import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem()
{
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="" 
                    alt="Growlithe"
                />
                <div>
                    <strong>Growlithe</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;