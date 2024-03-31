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

    private _courseCount = 1

    protected _courseCount1 = 1

    readonly city: string = "Mumbai"
    constructor(
        public email: string,
        public name: string,

        // private properties
        // private userId: string
    ) { }


    // private methods
    private deleteToken() {
        console.log("Token deleted");
    }


    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}


class SubUser extends User1 {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount1 = 4
    }
}



const stranger1 = new User1("s@s.com", "stranger")
// stranger1.name

// stranger1.deleteToken()



export { }