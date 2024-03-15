class User {
    public email: string
    private name: string
    readonly city: string = "Mumbai"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

class User1 {

    readonly city: string = "Mumbai"
    constructor (
        public email: string,
        public name: string
    ){}
}

const stranger1 = new User("s@s.com", "stranger")

