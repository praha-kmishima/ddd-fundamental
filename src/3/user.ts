/*
  ドメイン層
  User：メールアドレスを変更できる
  Company：メールアドレスのドメインが組織内かどうかを判定できる
*/
class User {
    private company: Company
    private email: string
    constructor(company: Company, email: string) {
        this.company = company
        this.email = email
    }

    getEmail(): string {
        return this.email
    }

    ChangeEmail(newEmail: string) {
        if (!this.company.IsEmailCorporate(newEmail)) {
            throw new Error("組織外のメールアドレスです");
        }
    
        this.email = newEmail;
    }
}

class Company {
    private readonly company: string
    constructor(value: string) {
        this.company = value
    }

    IsEmailCorporate(email: string): boolean {
        return email.endsWith(this.company);
    }
}

/*
  アプリケーション層
  DBに登録する（同じメールアドレスは、複数登録できないロジック）
*/
interface UserRepository {
    registerUser(email: string): void
    isRegistered(email: string): boolean
}

class UserController {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    registerUser(user: User) {
        const email = user.getEmail()
        // POINT: ドメイン層でチェックしたいが、DBにアクセスしないと重複チェックが行えない・・・
        if (this.userRepository.isRegistered(email)) {
            throw new Error("既に登録されているメールアドレスです");
        }
        this.userRepository.registerUser(email)
        console.log("ユーザーを登録しました");

        return user
    }
}