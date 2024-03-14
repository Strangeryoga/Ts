interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail : () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): 
    number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const stranger: Admin = { dbId: 22, email: "s@s.com", 
userId: 2111,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail starte"
},
getCoupon: (name: "abc10", off: 10) => {
    return 19
}
}

stranger.email = "s@s.com"