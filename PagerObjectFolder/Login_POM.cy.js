
class Login
{
    getUsername(){
        cy.get("input[name='uid']").type("mngr541404")
    }
    getPassword(){
        cy.get("input[name='password']").type("ujepUbY")
    }
    getLogin(){
        cy.get("input[value='LOGIN']").click()
        
    }
}
export default Login;