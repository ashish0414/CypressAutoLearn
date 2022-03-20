class DashboardPage
{
    getGlobalSearchEditBox()
    {
        return cy.get('.search-field > .form-control')
    }
    getSideBarToggeleButton(){
        return cy.get('.sidebar-toggle')
    }
    getNewOrderCardCount(){
        return cy.get('.box-body > .circlewrapper > a > .circle > .count')
    }
    getAcceptanceSLAAboutToReach()
    {
        return cy.get(':nth-child(1) > a > .text-primary1')
    }


}
export default DashboardPage