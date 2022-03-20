///<reference types = "cypress"/>

import LoginPage from '../../support/pageObjectsRubicon3/LoginPage'
import DashboardPage from '../../support/pageObjectsRubicon3/DashboardPage'
import SideBarPage from '../../support/pageObjectsRubicon3/SideBarPage'
import ShipmentFastPanelPage from '../../support/pageObjectsRubicon3/ShipmentFastPanelPage'

describe('Ajio Forward Order Flow test with Rubicon Fast Panel',()=>{

   // let loginPage = new LoginPage()
    let dashboardPage = new DashboardPage()
    let sidebarPage = new SideBarPage()
    let shipmentFastPanelPage = new ShipmentFastPanelPage()

    let order_no;
    let shipment_no;
    before(function(){
        //cy.visit(Cypress.env('MB_stg_url'))
        cy.fixture('AjioPayloads').then((ajioData)=>{
            this.ajioData=ajioData
            this.ajioData.orderPayload.orderId = `${Math.floor(Math.random() * 100000000000)}`
            order_no = this.ajioData.orderPayload.orderId
            this.ajioData.orderPayload.shipment_number = `${Math.floor(Math.random() * 100000)}`
            shipment_no=this.ajioData.orderPayload.shipment_number
            this.ajioData.orderPayload.po_number = `${Math.floor(Math.random() * 1000000)}`
            this.ajioData.orderPayload.orderDate = new Date()
        })

    })

    beforeEach(function(){

        cy.fixture('example').then(function(testData){

            this.testData=testData
            
        })
       
       



    })

    it('Create Ajio Orders',function(){

        

        //cy.log(JSON.stringify(this.ajioData.orderPayload))
        cy.log('ashish singh')
        cy.log(this.testData.name)
        cy.log(this.testData.MB_staging_login.username)
        cy.request({
            method: 'POST',
            url: 'https://in.data.aceturtle.in/staging/ajio/create_shipment', // baseUrl is prepend to URL
            headers: {
                "x-api-key" :"GZfbkFLnil29isBFPfxTr3mLANMQy9Lx18ITiima"
            },
            form: false, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: this.ajioData.orderPayload,
          }).then((res)=>{
              expect(res.status).to.eql(200)
              
          })
          cy.wait(10000)
    })

    it('Login to R3 and processing the Ajio Order till its delivered',function(){
        
        
       //using custom commands from support/command.js passing username , password(from fixtures/example) and url from cypress.json in the params

        cy.login(this.testData.MB_staging_login.username,this.testData.MB_staging_login.password,Cypress.env('MB_stg_url'))

       



        //clicking on the side bar page
        
        dashboardPage.getSideBarToggeleButton({force: true}).click()
        sidebarPage.clickFastPanel().click({force: true})
       
    

        //Navigating to shipment Fast panel
        

        sidebarPage.getShipmentFastPanel().click({force: true})
       
        

        //checking the order_no
            shipmentFastPanelPage.getPageHeading().should('have.text',"Process Orders")
            shipmentFastPanelPage.getOrderNoSearchEditBox().type(order_no)

            shipmentFastPanelPage.getSearchButton().click()

            //shipmentFastPanelPage.getAcceptCookiesButton().click()

            shipmentFastPanelPage.getAcceptOrderButton().click()

            shipmentFastPanelPage.getStatusChangedMsg().should('have.text',"Order status changed successfully")

            shipmentFastPanelPage.getOrderNo().should('have.attr', 'title', order_no)

            shipmentFastPanelPage.getChannelName().should('have.attr', 'title', 'Ajio')

            //Printing the Invoice
            cy.wait(10000)
            cy.pause()
            shipmentFastPanelPage.getPrintInvoiceBtnOnAcceptSuccess().invoke('show')
            cy.contains('Print Invoice/Shipping Label').click()

        




    })

    

































































})