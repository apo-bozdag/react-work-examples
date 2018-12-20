/*
const data = {
    name: 'abdullah'
};

const data2 = {
    surname: 'bozdağ',
    age: 20
};

const result = Object.assign(data, data2);

console.log(result);
*/

const data = {
    info: {
        name: 'Abdullah',
        surname: 'Bozdağ'
    }
};
/*const data2 = data;*/
/*const data2 = Object.assign({}, data);*/
const data2 = JSON.parse(JSON.stringify(data));

data2.info.name = 'Mehmet';

console.log(data);
console.log(data2);
