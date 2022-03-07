import { IsNotEmpty } from 'class-validator';

class LoginModel {
    @IsNotEmpty({
        groups: ['edit'],
    })
    public username: string;

    @IsNotEmpty({
        groups: ['edit'],
    })
    public password: string;

    constructor(props: Partial<LoginModel>) {
        Object.assign(this, props);
    }
}

export default LoginModel;
