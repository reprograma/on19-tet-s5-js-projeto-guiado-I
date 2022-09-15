const veiculos = [
    {
        marca: "Fiat",
        motor: "1.0",
        modelo: "Palio",
        ano: 1997
        
    },
    {
        marca: "Chevrolet",
        motor: "4.0",
        modelo: "opala",
        ano: 1970
    },
    {
        marca: "ferrari",
        motor: "8.0",
        modelo: "red",
        ano: "2015"
    }
]

veiculos.map((value,index) => {console.log(value, index);})

for (let index = 0; index < veiculos.length; index++) {
    const value = veiculos[index];
    console.log(value, index);
}
