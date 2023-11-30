
describe("Generate Toke(ID & password)", ()=>{

    it("Validate generating user ID and password for logging in to the application (with a valid email)", ()=>{
        cy.visit("https://demo.guru99.com")
        cy.get("input[name='emailid']").type("okworejyke03@gmail.com")
        cy.get("input[value='Submit']").click();
        cy.wait(2000)
        cy.get("table[border='1']>tbody>tr:nth-child(4)>td:nth-child(2)").contains("mngr541404")
    })

    it("Validate generating user ID and password for logging in to the application (with an invalid email)", ()=>{
        cy.visit("https://demo.guru99.com")
        cy.get("input[name='emailid']").type("dsdszds@cmail.com")
        cy.get("input[value='Submit']").click();
        cy.wait(2000)
        cy.get("table[border='1']>tbody>tr:nth-child(4)>td:nth-child(2)").contains("mngr541404")
    })
})