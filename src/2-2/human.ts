import { UUID, randomUUID } from "crypto";

class Human {
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
    const human = new Human("A", new Date("1990-01-01"), "test taro")
    console.log(human)
}

main2_2()
