import {useState} from 'react';
import './App.css'
// import useCounter from './hooks/useCounter';
import Input from "./components/Input.jsx";

// Regra 1: Onde usar os hooks? 
// Dentro de uma função React! Tem que está associado a um componente React

// Regra 2: Ordem dos hooks?
// Tem que ser declarado no Top level da função React e a ordem 
// que foi declarado é a ordem que o React vai executar

const games = [
    {
        "id": 1,
        "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
        "title": "Super Mario Bros",
        "releaseYear": 1985,
        "description": "A classic platformer game."
    },
    {
        "id": 2,
        "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
        "title": "The Legend of Zelda",
        "releaseYear": 1986,
        "description": "A top-down adventure game."
    },
    {
        "id": 3,
        "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
        "title": "Final Fantasy",
        "releaseYear": 1987,
        "description": "A classic role-playing game."
    },
    {
        "id": 4,
        "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
        "title": "Doom",
        "releaseYear": 1993,
        "description": "A first-person shooter game."
    },
    {
        "id": 5,
        "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
        "title": "Warcraft",
        "releaseYear": 1994,
        "description": "A real-time strategy game."
    },
    {
        "id": 6,
        "coverImage": "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
        "title": "Starcraft",
        "releaseYear": 1998,
        "description": "A military science fiction game."
    },
    {
        "id": 7,
        "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
        "title": "Half-Life",
        "releaseYear": 1998,
        "description": "A first-person shooter game."
    },
    {
        "id": 8,
        "coverImage": "http://media.ign.com/games/image/object/002/002226/Gran-Turismo-1_PS1_US_BOX.jpg",
        "title": "Gran Turismo",
        "releaseYear": 1998,
        "description": "A driving/racing simulator game."
    },
    {
        "id": 9,
        "coverImage": "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
        "title": "Halo",
        "releaseYear": 2001,
        "description": "A military science fiction shooter game."
    },
    {
        "id": 10,
        "coverImage": "http://s.emuparadise.org/fup/up/150757-Kingdom_Hearts_(USA)-1.jpg",
        "title": "Kingdom Hearts",
        "releaseYear": 2002,
        "description": "An action-based role-playing game with Disney and Final Fantasy characters."
    }
]

function App() {

    // const counter = useCounter();
    const [password, setPassword] = useState('');
    const [labelCopy, setLabelCopy] = useState('Copiar senha');
    const [customSize, setCustomSize] = useState(10);
    const [showInput, setShowInput] = useState(true);

    const passwordSize = showInput ? customSize : 10;

    function handleCopy() {
        window.navigator.clipboard.writeText(password);
        setLabelCopy('Senha copiada');
    }

    function generatePassword() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';

        for (let i = 0; i < passwordSize; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            password += caracteres.charAt(indiceAleatorio);
        }

        setLabelCopy('Copiar senha');
        return setPassword(password);
    }


    return (
        <>
            <h1>Gerador de senhas</h1>
            <div className="card">
                <div>
                    <label htmlFor="customSize">Customizar Tamanho: </label>
                    <input
                        type="checkbox"
                        id="customSize"
                        value={showInput}
                        onChange={() => setShowInput(!showInput)}
                    />
                </div>

                {showInput && (
                    <div className="marginInput">
                        <label htmlFor="passwordSize">Tamanho:</label>
                        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
                    </div>
                )}

                <button onClick={generatePassword}>
                    Gerar senha de {passwordSize} caracteres
                </button>
                <button onClick={handleCopy}>
                    {labelCopy}
                </button>
                <p>
                    {password}
                </p>
            </div>

            <br/>

            <h1>Meus Jogos:</h1>
            <div style={{ padding: "0 4rem 4rem"}}>
                {games.map(game => (
                        <div key={game.id}>
                            <img
                                src={game.coverImage}
                                alt={game.title}
                                style={{width: "20rem", height: "20rem", objectFit: "cover"}}
                            />
                            <h2>Titulo: {game.title}</h2>
                            <p>{game.description}</p>
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default App
