const User = {
    name: "stranger",
    email: "abc@com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "stranger", isPaid: false, email: "abc@com"}

createUser(newUser)

// fnc returing obj
function createCourse() : {name: string, price: number} {
    return {name: "reactjs", price: 999}
}


// type alias
type User1 = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser1(user: User1): User1 {
    return {name: "", email: "", isActive: true}
}

createUser1({name: "", email: "", isActive: true})


type User2 = {
    readonly id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number
}

let myUser: User2 = {
    id: "23",
    name: "s",
    email: 's@s.com',
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "stranger@gmail.com"
// myUser.id = "df" // we can't change the id


export {}