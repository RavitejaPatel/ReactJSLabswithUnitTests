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


//=================================
//Rest Operator javascript

/**
 * DEV NOTE :
 * here arr keyword is fixed and if you try keppig it without name, you get error 
 * Rest param(...arr) always has to define at last ad can mentio other params at beginig , ex2
 * **/
const restOperatorFun = (...arr) => {
    console.log(arr)
}
restOperatorFun(10, 100, "hello")


const restOperatorFunwithMultiParams = (name, message, ...arr) => {
    console.log(arr)
    console.log(name, message)
}
restOperatorFunwithMultiParams("Raviteja", "hello dev", 10, 100)


