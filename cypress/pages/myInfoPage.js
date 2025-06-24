class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: ".bi-calendar",
            todayButton: ".oxd-date-input-links > .--today",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            maleFemaleButton: ".--label-right",
            comboBoxButtonGeneric: ".oxd-select-text--arrow",
            nationChoice: ':nth-child(69) > span',
            marriedChoice: ":nth-child(3) > span",
            bloodChoice: ":nth-child(6) > span",
            testFieldButton: "[options='']"
        }
        return selectors

    }
    accessMyInfoPage() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    writeFields(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type('NameTest')
        cy.get(this.selectorsList().middleNameField).clear().type('middleTest')
        cy.get(this.selectorsList().lastNameField).clear().type('lastTest')
    }
}
return MyInfoPage; 