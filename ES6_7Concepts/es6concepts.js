//array destructuring in js
values = [10, 20, 30]
[a, , c] = values
console.log(a, c)

//object destructurig
detailsInfo = {
    fname: "raviteja",
    email_id: "raviteja.poosala@outlook.com",
    worklocation: "USA",
    company: ""
}
const { worklocation, fname } = detailsInfo
console.log(worklocation)
