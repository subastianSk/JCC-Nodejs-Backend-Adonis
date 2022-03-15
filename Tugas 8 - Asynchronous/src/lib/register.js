export default class Register {
    constructor(name, password, role) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }

    get _name() {
        return this.name;
    }
    get _password() {
        return this.password;
    }
    get _role() {
        return this.role;
    }
    get _isLogin() {
        return this.isLogin;
    }
    set _isLogin(x) {
        this.isLogin = x;
    }
}