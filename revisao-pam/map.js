// objeto -> junção de informações
// array -> junção de informações 'repetidas'
console.clear()
const veiculos = [
    {
        marca: "Fiat",
        motor: "1.0",
        modelo: "Palio",
        ano: "1997"
    },
    {
        marca: "Chevrolet",
        motor: "4.0",
        modelo: "Opala",
        ano: "1970"
    },
    {
        marca: "Ferrari",
        motor: "8.0",
        modelo: "Red",
        ano: "2022"
    }
];

veiculos.map((value, index) => {console.log(value, index);}) // map é exclusivo da array, puxa o callback. Map é um for que recebe uma função.


/* exemplo com FOR
for (let index = 0; index < veiculos.length; index = index + 1) {
    const value = veiculos[index];
    console.log(value, index)
}
*/