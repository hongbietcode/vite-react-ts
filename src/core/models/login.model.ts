import { IsNotEmpty } from 'class-validator';

class LoginModel {
    @IsNotEmpty()
    public username: string;

    @IsNotEmpty()
    public password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export default LoginModel;
