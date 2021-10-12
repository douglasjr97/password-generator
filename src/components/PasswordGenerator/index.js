import { useState } from 'react';
import './styles.css';

const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(30)
    const [digitLength, setDigitLength] = useState(64)
    const [symbolsLength, setSymbolsLength] = useState(20)


    return <>
        <div className="slider">
            <label htmlFor="password">Tamanho  </label>
            <input id="password-length" type="range" min={4} max={64} value={passwordLength} onChange={({target}) => setPasswordLength(parseInt(target.value))}/>
            <span>{passwordLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="digit">Tamanho  </label>
            <input id="digit-length" type="range" min={4} max={64} value={digitLength} onChange={({target}) => setDigitLength(parseInt(target.value))}/>
            <span>{digitLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="symbols-Length">Tamanho  </label>
            <input id="symbols-Length" type="range" min={4} max={64} value={symbolsLength} onChange={({target}) => setSymbolsLength(parseInt(target.value))}/>
            <span>{symbolsLength}</span>
        </div>

    </>
};

export default PasswordGenerator;