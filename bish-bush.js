// bishBosh 1:
// for (let i = 1; i < 100; i++) {

//     if (i % 3 === 0 && i % 4 === 0) {
//         console.log('Bish-bosh');
//     } else if (i % 3 === 0) {
//         console.log('Bish');
//     } else if (i % 4 === 0) {
//         console.log('Bosh');
//     } else {
//         console.log(i);

//     }
// }
let arr = [];
const btn = document.querySelector('#btnCal');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    let bish = bishNumber.value;
    let bosh = boshNumber.value;
    let totalN = totalNumber.value;
    let outPut = document.querySelector('#outPutPar');
    // arr[totalN]; andra sätt o lösa det med en array.
    for (let i = 1; i <= totalN; i++) {

        if (i % bish === 0 && i % bosh === 0) {
            console.log('Bish-bosh');
            // arr[i] = 'Bish-bosh';
            outPut.innerHTML += ', Bish-bosh';
        } else if (i % bish === 0) {
            console.log('Bish');
            arr[i] = 'Bosh';
            outPut.innerHTML += ', Bish';
        } else if (i % bosh === 0) {
            console.log('Bosh');
            outPut.innerHTML += ', Bosh';
        } else {
            console.log(i);
            arr[i] = `${i} `;
            outPut.innerHTML += `, ${i}`;

        }

    }
    // outPut.innerHTML = arr;
})