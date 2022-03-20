class ShipmentFastPanelPage{

    getPageHeading(){
        return cy.get('#main-heading')
    }
    getOrderNoSearchEditBox(){
        return cy.get(':nth-child(1) > .r3-input-section > .ng-untouched')
    }
    getShipmentNoSearchEditBox(){
        return cy.get('input[name="shipment_no"]')
    }
    getAwbNoSearchEditBox(){
        return cy.get('input[name="firstmile_awb_no"]')
    }
    getSearchButton(){
        return cy.get('.search')
    }
    getClearButton(){
        return cy.get('button[type="reset"]')
    }
    getAcceptCookiesButton(){
        return cy.get('.wpcc-btn')
    }
    getAcceptOrderButton(){
        return cy.get('.btn-Accept')
    }
    getStatusChangedMsg(){
        return cy.get('.cdk-visually-hidden')
    }
    getPrintInvoiceBtnOnAcceptSuccess(){
        return cy.get('a[ng-reflect-message="Print Invoice/Shipping Label"]')
    }
    getItemDetailsBtnOnAcceptSuccess(){
        return cy.get('a[style="background: url("/assets/images/invoice.svg");"]')
    }
    getOrderNo(){
        return cy.get('td[mattooltipclass="red-tooltip"]:nth-child(4)')
    }
    getChannelName(){
        return cy.get('td[mattooltipclass="red-tooltip"]:nth-child(5)')
    }









}
export default ShipmentFastPanelPage