import React, {useState} from 'react';

const PeselInput = () => {
        const [pesel, setPesel] = useState("");
        const [message, setMessage] = useState("Wpisz poprawny PESEL");
        const peselValidate = (event) => {
            setPesel(event.target.value);
            console.log(pesel);
            if ((pesel.length) >= 11) {
                setMessage("Pesel jest za długi");
            } else if (pesel.length < 11) {
                setMessage("Wpisz cały PESEL")
            }
            // } else if (!pesel.match(/^\d+/)) {
            //     alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)");
            // }
        }

        return (
            <>
                <form>
                    <input type="number" val={pesel} onChange={peselValidate}/>
                    <div>
                        {pesel}
                    </div>
                    <div>
                        {message}
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </>
        );
    }
;

export default PeselInput;