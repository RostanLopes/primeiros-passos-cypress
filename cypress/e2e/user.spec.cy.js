import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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
    myInfoPage.fillPersonalDetails('FirstName', 'MiddleName', 'LastName')
    myInfoPage.fillEmployeeDetails('777', '777', 'DL777', '2025-06-24')
    myInfoPage.fillStatus('2000-08-30', '777')
    myInfoPage.saveForm()
  })

})