import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

   const selectorsList = {
   
    
   }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.verifyDashboardPage()
    menuPage.accessMyInfoPage()
/*     myInfoPage.accessMyInfoPage()
    myInfoPage.writeFields(firstName, middleName, lastName)
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drive123')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-06-19')
    cy.get(selectorsList.dateCloseButton)
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close') */
    

  })
  it('Login - Fail', () => { 
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})