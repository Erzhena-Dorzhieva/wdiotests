import LoginPage from  '../pageobjects/login.page';
import  ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
       browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('cekak37968@990ys.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent',() => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided', () => {
       LoginPage.setLogin('example@example.com');
       LoginPage.setPassword('1234567');
       LoginPage.clickSubmitButton();
       LoginPage.errorToastAppeared();
    });

    // it('fails if invalid password is provided', () => {
    //     LoginPage.setLogin('cekak37968@990ys.com');
    //     LoginPage.setPassword('123456');
    //     LoginPage.clickSubmitButton();
    //     LoginPage.errorToastAppeared();
    // });
    //
    // it('fails if invalid email is provided', () => {
    //     LoginPage.setLogin('example@example.com');
    //     LoginPage.setPassword('1234567');
    //     LoginPage.clickSubmitButton();
    //     LoginPage.errorToastAppeared();
    // });
    it.only('login input is required', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.deleteLogin();
        LoginPage.loginRequiredError();
    });

    // it('password input is required', () => {
    //     LoginPage.setPassword('1234567');
    //     LoginPage.deletePassword();
    //     LoginPage.errorToastAppeared();
    // });
});
