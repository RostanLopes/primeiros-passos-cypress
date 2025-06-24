class DashboardPage {

    selectorsList () {
        const selectors = {
            dashboardGrip: ".orangehrm-dashboard-grid",
        }

        return selectors
        
    }
        verifyDashboardPage() {
            cy.location('pathname').should('equal','/web/index.php/dashboard/index')
            cy.get(this.selectorsList().dashboardGrip)
        }

}
export default DashboardPage;