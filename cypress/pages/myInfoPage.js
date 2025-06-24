class MyInfoPage {

    selectorsList() {
        const selectors = {
           
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            todayButton: ".oxd-date-input-links > .--today",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            maleFemaleButton: ".--label-right",
            comboBoxButtonGeneric: ".oxd-select-text--arrow",
            nationChoice: ':nth-child(69) > span',
            marriedChoice: ":nth-child(3) > span",
            bloodChoice: ":nth-child(6) > span",
            testFieldButton: "[options='']",
        }
        return selectors

    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherId, driveLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driveLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
    }
    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }

    fillStatus(birthDate, testField){
        cy.get(this.selectorsList().comboBoxButtonGeneric).eq(0).click({force: true})
        cy.get(this.selectorsList().nationChoice).click({force: true})
        cy.get(this.selectorsList().comboBoxButtonGeneric).eq(1).click({force: true})
        cy.get(this.selectorsList().marriedChoice).click({force: true})
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().maleFemaleButton).eq(0).click({force: true})
        cy.get(this.selectorsList().comboBoxButtonGeneric).eq(2).click({force: true})
        cy.get(this.selectorsList().bloodChoice).click({force: true})
        cy.get(this.selectorsList().testFieldButton).clear().type(testField)
    }
}
export default MyInfoPage