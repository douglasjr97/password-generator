import { useState, useEffect } from 'react';
import CopyPasswordButton from '../CopyPassword';
import PasswordBox from '../PasswordBox';
import './styles.css';

const PasswordGenerator = () => {
    const [password, setPassword] = useState("test")
    const [passwordLength, setPasswordLength] = useState(30)
    const [digitLength, setDigitLength] = useState(2)
    const [symbolsLength, setSymbolsLength] = useState(2)

    useEffect(() => {
        const draftPassword = [];

        let lettersLength = passwordLength - digitLength - symbolsLength;
        if (lettersLength < 0) lettersLength = 0;

        draftPassword.push(...Array.from({ length: digitLength }, randomDigit))
        draftPassword.push(...Array.from({ length: symbolsLength }, randomSymbol))
        draftPassword.push(...Array.from({ length: lettersLength }, randomLetter))


        setPassword(draftPassword.slice(0, passwordLength).sort(() => Math.random() - 0.5).join(""))

    }, [passwordLength, digitLength, symbolsLength]);

    const randomDigit = () => {
        const digits = "0123456789"

        return digits[Math.floor(Math.random() * digits.length)];
    }

    const randomSymbol = () => {
        const symbols = "!@#$%&*({}^~.,/+[]"

        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const randomLetter = () => {
        const letters = "abcdefghijklmnopqrstuvwxyz"

        const letter = letters[Math.floor(Math.random() * letters.length)];


        return Math.random() >= 0.5 ? letter : letter.toUpperCase();
    }

    return <>
        <div className="slider">
            <label htmlFor="password">Tamanho  </label>
            <input id="password-length" type="range" min={4} max={64} value={passwordLength} onChange={({ target }) => setPasswordLength(parseInt(target.value))} />
            <span>{passwordLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="digit">Dígitos  </label>
            <input id="digit-length" type="range" min={0} max={10} value={digitLength} onChange={({ target }) => setDigitLength(parseInt(target.value))} />
            <span>{digitLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="symbols-Length">Símbolos  </label>
            <input id="symbols-Length" type="range" min={0} max={10} value={symbolsLength} onChange={({ target }) => setSymbolsLength(parseInt(target.value))} />
            <span>{symbolsLength}</span>
        </div>

        <PasswordBox password={password} />

        <CopyPasswordButton password={password} />
    </>
};

export default PasswordGenerator;