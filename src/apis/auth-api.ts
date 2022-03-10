class AuthApi {
    login = (isSuccess = true) => {
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                isSuccess ? reslove({ token: 'fake-token' }) : reject('Login failed');
            }, 1000);
        });
    };
}

const AUTH_API = new AuthApi();
export default AUTH_API;
