class Human2_3 {
    constructor(public readonly id: string, public readonly bloodtype: string, public readonly birthdate: Date, public readonly name: string) {
        if (!this.validProps({id,bloodtype,birthdate,name})) { throw new Error('invalid prop') }
    }

    private validProps(props: {id: string, bloodtype: string, birthdate: Date, name: string}): boolean {
        return this.validId(props.id) && this.validBloodtype(props.bloodtype) && this.validBirthdate(props.birthdate) && this.validName(props.name)
    }
    private validId(value: string):boolean { /* 有効なIDである事のバリデーションを行う */ return true }
    private validBloodtype(value: string):boolean { /* 有効な血液型である事のバリデーションを行う */ return true }
    private validBirthdate(birthdate: Date):boolean { /* 有効な生年月日である事のバリデーションを行う */ return true }
    private validName(name: string):boolean { /* 有効な名前である事のバリデーションを行う */ return true }
}

const main2_3 = () => {
    const human = new Human2_3("1", "A", new Date("1990-01-01"), "test taro")
    console.log(human)
}

main2_3()

