//создать копию обьекта не меняя исходный обьект
const obj = {
    name: "Sergo",
    age: 25
}

const copyObj = {}; // использовать for in


// убрать дубли
const arrayForSort = [1, 3, 4, 6, 0, 23, 0, 0, 0]

// let newArr =[];
// for (let i = 0; i<arrayForSort.length; i++){ // решить через цикл for;
// if(arrayForSort[i])
// }

//через деструкторизацию вытащить все name -// решить через цикл for;
//изменить в исходном обьекте все ключи sex на "no-name" - // решить через цикл for;
//записать в переменную isFunc вызов второго алёрта // черз переменную

const paramObject = [
    { name: "Tort", sex: "male", func: () => { alert("alert_1") } },
    { name: "Kort", sex: "wooman", func: () => { alert("alert_2") } },
    { name: "Port", sex: "male", func: () => { alert("alert_3") } },
]
