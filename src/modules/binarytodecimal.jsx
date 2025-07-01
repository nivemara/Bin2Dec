import { useState } from 'react';

export default function BinaryToDecimal() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [error, setError] = useState('');

    function convertlogic(binary) {
        let decimal = 0;
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') {
                decimal += Math.pow(2, binary.length - 1 - i);
            } else if (binary[i] === '0') {
                decimal += 0;
            } else {
                return null;
            }
        }
        return decimal;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[01]+$/.test(binary)) {
            setError('Enter either 0 or 1');
            return;
        }

        setError('');
        const result = convertlogic(binary);
        if (result !== null) {
            setDecimal(result);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Binary Input</p>
                <input
                    type="text"
                    value={binary}
                    placeholder="Enter 0 or 1"
                    onChange={(e) => setBinary(e.target.value)}
                />
                <br />

                <p>Decimal Output</p>
                <input
                    type="text"
                    value={decimal}
                    placeholder="Output"
                    readOnly
                />
                <br />
                <br />
                <button type="submit">Convert</button>
                <br />
                <br />
                <span style={{ color: 'red' }}>{error}</span>
            </form>
        </div>
    );
}
