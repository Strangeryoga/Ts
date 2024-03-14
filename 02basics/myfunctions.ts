function addTwo(num: number): number {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean=false) => {}


addTwo(54)
getUpper("tejas")

signUpUser("stranger", "stranger@.com", false)
loginUser("s", "abc@com")


//function getValue(myVal: number): boolean {
//    if (myVal > 4) {
//        return true
//    }
//    return "200 OK"
//}

const getHello = (s: string): string => {
    return ""
}

 const heros = ["thor", "black widow", "wanda"]
 // const heros = [1, 2, 3]

 heros.map((hero): string => {
    return `hero is ${hero}`
 })

 //  not returing anything
function consoleError(errmsg: string):void {
    console.log(errmsg);
}

// for handling the error
function handleError(errmsg: string):never {
    throw new Error(errmsg)
}



export {}