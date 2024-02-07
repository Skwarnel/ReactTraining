import React, {useState} from 'react';

function NumberInfo(props) {
    const number = props.number;

    const isPrime = (num) => {
        if (num === 0 | num === 1 | num === 2) return false;
        for (let i = 0; i < num; i++) {
            if (num % 2 === 0) {
                return false
            }
        }
        return true;
    }

    const isPowerOfTwo = (n) => {
        for (let i = 0; i < n; i++) {
            if ( (Math.pow(2, i)) >= n) {
                if ( (Math.pow(2, i)) === n) {
                    return true;
                } else if ( (Math.pow(2, (i-1))) === n){
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <div>
            <ul>
                <li>{number}</li>
                <li>{number % 2 === 0 ? 'Liczba jest parzysta' : 'To jest nieparzysta liczba'}</li>
                {isPrime(number) ? <li>To jest liczba pierwsza</li> : false}
                {isPowerOfTwo(number) && <li>To jest potęga dwójki</li>}
            </ul>
        </div>
    );
}

export default NumberInfo;

// export default NumberInfo;
//
// import React, {useState} from 'react';
//
// const NumberInfo = ({number}) => {
//     const [prime, setPrimeStatus] = useState(false);
//
//     function isPrime(numb) {
//         if (numb <= 1) return false;
//         if (numb === 2) return true;
//         for (let i = 2; i < numb; i++) {
//             if (numb % i === 0) {
//                 console.log("Działam");
//                 return false
//             }
//         }
//         console.log()
//         return true;
//     }
//
//     const isPowerOfTwo = (numb) => {
//         if (numb === 2) return true;
//         for (let i = 2; i < numb; i++) {
//             if ((2**i) > numb){
//                 return false;
//             } else {
//                 if ((2**i) === numb) {
//                     return true;
//                 }
//             }
//         }
//         return false
//     }
//
//     const toRender = (
//         <ul>
//             <li>Liczba: {number}</li>
//             <li>{number % 2 === 0 ? "Liczba parzysta" : "Liczba nieparzysta"}</li>
//             {isPrime(number) && <li>{number} jest liczbą pierwszą</li>}
//             {isPowerOfTwo(number) && <li>{number} jest potęgą dwójki</li>}
//         </ul>
//     )
//
//     return (
//         <div>
//             {toRender}
//         </div>
//     );
// };
