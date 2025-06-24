import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

   const selectorsList = {
   
    
   }

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.verifyDashboardPage()
    menuPage.accessMyInfoPage()
    myInfoPage.fillPersonalDetails(chance.first(), chance.name(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.prime({min: 1, max: 120}), chance.prime(), chance.ssn({ ssnFour: true }), '2026-10-08')
    myInfoPage.fillStatus('2000-10-05', chance.prime())
    myInfoPage.saveForm()
  })

})