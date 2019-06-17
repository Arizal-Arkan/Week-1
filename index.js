let data = ['apple','banana']

let dataObj = {
    nama : "Arizal Arkan",
    umur : 19
}
let tambah = {
    nama : "rizal",
    umur : 20
}

let arrayObj = [
    {
        Nama : "Arizal Arkan",
        Umur : 18
    },
    {
        Nama : "Irfan",
        Umur : 23
    }
]
arrayObj.map(arrayObj => arrayObj)

console.log(arrayObj);
console.log("\n");

arrayObj.push(tambah)
console.log(arrayObj);
console.log("\n");

arrayObj.shift()
console.log(arrayObj);
console.log("\n");

arrayObj[0].Umur= 50
console.log(arrayObj);
