class Human {
    public readonly id: ID
    public bloodType: BloodType
    public birthDay: BirthDay
    public name: Name

    constructor(id: ID, bloodType: BloodType, birthDay: BirthDay, name: Name) {
        this.id = id
        this.bloodType = bloodType
        this.birthDay = birthDay
        this.name = name
    }
}

class ID {
    public readonly id: string
    constructor(value: string) {
        if (!this.validId(value)) {
            throw new Error("無効なID形式です。英数字のみ使用できます");
        }
        this.id = value
    }

    private validId(value: string): boolean {
        return /^[a-zA-Z0-9]+$/.test(value);
    }

}

class BloodType {
    public readonly bloodType: string
    constructor(value: string) {
        if (!this.validBloodType(value)) {
            throw new Error("無効な血液型です。A, B, O, ABのいずれかを指定してください");
        }
        this.bloodType = value
    }

    private validBloodType(value: string): boolean {
        if(["A", "B", "O", "AB"].includes(value)) {
            return true
        }
        return false
    }
    
}

class BirthDay {
    public readonly birthDay: Date
    constructor(value: Date) {
        if (!this.validBirthDay(value)) {
            throw new Error("無効な生年月日です。２０歳未満の方は登録できません");
        }
        this.birthDay = value
    }

    private validBirthDay(value: Date): boolean {
        const today = new Date()
        const age = today.getFullYear() - value.getFullYear()
        return age >= 20
    }
    
}

class Name {
    public readonly name: string
    constructor(value: string) {
        if (!this.validName(value)) {
            throw new Error("無効な名前です。名前は20文字以内で指定してください");
        }
        this.name = value
    }

    private validName(value: string): boolean {
        return value.length <= 20
    }
}

const main2_4 = () => {
    const human = new Human(new ID("1"), new BloodType("A"), new BirthDay(new Date("1990-01-01")), new Name("test taro"))
    console.log(human)
}

main2_4()

