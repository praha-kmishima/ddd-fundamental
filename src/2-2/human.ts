import { UUID, randomUUID } from "crypto";

class Human2_2 {
    id: UUID
    bloodType: string
    birthday: Date
    name: string

    constructor(bloodType: string, birthday: Date, name: string) {
        this.id = randomUUID()
        this.bloodType = bloodType
        this.birthday = birthday
        this.name = name
    }
    
}


const main2_2 = () => {
    const human = new Human2_2("A", new Date("1990-01-01"), "test taro")
    console.log(human)
}

main2_2()
