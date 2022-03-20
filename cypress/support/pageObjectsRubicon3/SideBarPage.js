class SideBarPage{

    clickFastPanel(){
        return cy.get('.menu-list:nth-child(2)')
    }
    getShipmentFastPanel(){
        return cy.get('a[ng-reflect-router-link="shipment_fast_panel/workflow"]')
    }
    getManifestFastPanel(){
        return cy.get('a[ng-reflect-router-link="manifest_fast_panel/workflow"]')
    }
    getReturnFastPanel(){
        return cy.get('a[ng-reflect-router-link="return_fast_panel/workflow"]')
    }
    clickOrderManagement(){
        return cy.get('.menu-list:nth-child(3)')
    }
    getOrderTracking(){
        return cy.get('a[ng-reflect-router-link="tracking"]')
    }
    getShipmentPanel(){
        return cy.get('a[ng-reflect-router-link="shipment/workflow"]')
    }











}
export default SideBarPage