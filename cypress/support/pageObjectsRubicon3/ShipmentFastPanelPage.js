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
        //return cy.get('a[ng-reflect-message="Print Invoice/Shipping Label"]')
        return cy.get('app-workflow-layout.ng-star-inserted:nth-child(3) div.wf-content-wrapper.Process.Orders div.ng-star-inserted div.container-wrapper:nth-child(3) div.tableData.ng-star-inserted div.table-container table.wrkflw-fixed-table tbody:nth-child(2) tr.ng-star-inserted td.show.ng-star-inserted:nth-child(1) span.ng-star-inserted:nth-child(5) > a.action-links.ng-star-inserted')
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