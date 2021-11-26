import React from 'react'

// var -> bisa di tiban di mana saja karna ada hoisting
// var harga = 20000;
// if (true) {
//     var harga = 10000;
// }

// contoh const -> ga bisa di tiban sama sekali
// const harga = 2000;
// if (true) {
//     const harga = 9000;
// }

// contoh let -> bisa ditiban tapi harus didalam scope 
let harga = 5000;
if (true ) {
    harga = 2000;
}

const Variable = () => {
    return (
        <div>
            <h3>Harga : {harga}</h3>
        </div>
    )
}

export default Variable
