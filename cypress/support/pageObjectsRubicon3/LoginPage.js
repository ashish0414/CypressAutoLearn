class LoginPage{


    getLabel()
    {
        return cy.get('label[class="label"]')
    }

    getUserNameEditBox(){
        return cy.get('input[formcontrolname="userName"]')
    }
    getPasswordEditBox(){
        return cy.get(':nth-child(4) > .form-control')
    }
     getLogInButton(){
         return cy.get('.btn')
     }

}
export default LoginPage