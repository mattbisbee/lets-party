import decode from 'jwt-decode';

//code for jsonwebtoekn authentication
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
