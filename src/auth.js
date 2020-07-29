class Auth {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  async login(callback) {
    const authorized = await (await fetch('http://localhost:8000/auth/login/success')).json()
    if (authorized.authenticated) {
      this.authenticated = true;
    }
    console.log(authorized)
    console.log(this.authenticated)
    
  }

  logout(callback) {
    this.authenticated = false;
    callback()
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();