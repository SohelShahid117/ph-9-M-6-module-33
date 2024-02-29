// 33-2 Intro To JSON, JSON Structure, Parse, Stringify

const user = {
    id: 1,
    name: 'sohel',
    job: 'business'
};
console.log(user);

const stringyfied = JSON.stringify(user);
console.log(stringyfied);

const shop = {
    owner: 'Alia',
    address: {
        road: 'meyor goli',
        city: 'ctg',
        country: 'BD'
    },
    products: ['mice', 'mouse', 'keynoard', 'laptop'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

console.log(typeof shop)
console.log(typeof shopStringified)

const shopObj = JSON.parse(shopStringified);
console.log(shopObj);
console.log(typeof shopObj);
