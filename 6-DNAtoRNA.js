// 6 / 366
// link challenge : https://codewars.com/kata/5556282156230d0e5e000089

// cara 1
// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++){
//         if (dna[i] === 'T') {
//             rna += 'U';
//         } else {
//             rna += dna[i];
//         }
//     }
//     return rna;
// }

// cara 2
// function DNAtoRNA(dna) {
//     let rna= '';
//     for (let i = 0; i < dna.length; i++){
//         rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return rna;
// }

// cara 3
// function DNAtoRNA(dna) {
//     return dna.split('').map((el) => el === 'T' ? 'U' : el).join('')
// }

// cara 4 
// const DNAtoRNA = (dna) => dna.replace(/T/g,'U');

// cara 5
const DNAtoRNA = (dna) => dna.replaceAll('T','U');

console.log(DNAtoRNA('TTTT'));