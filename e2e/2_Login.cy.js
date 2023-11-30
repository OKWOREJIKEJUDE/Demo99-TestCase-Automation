
import Login from "../PagerObjectFolder/Login_POM.cy"

describe("User Login", ()=>{
    it.skip("Validate logging into the application with valid credentials (ie valid userID and valid password)", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const myLoginDetails = new Login();
        myLoginDetails.getUsername();
        myLoginDetails.getPassword()
        myLoginDetails.getLogin()
        cy.get("marquee[class='heading3']").should("contain", "Welcome To Manager's Page of Guru99 Bank")
    })

    it.skip("Validate logging into the application with invalid credentials(ie invalid userID and invalid password)", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("hhsnj3729335345443")
        cy.get("input[name='password']").type("46438457hjsdhdddm")
        cy.get("button[onclick='myFunction()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
        //todo---Verify the corect way of handling those POPUPS
    })

    it("Validate logging into the Application using invalid userID and valid Password", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("hhsnj3729335345443")
        cy.get("input[name='password']").type("ujepUbY")
        cy.get("button[onclick='myFunction()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
    })

    it("Validate logging into the Application using valid userID and invalid Password", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("mngr541404")
        cy.get("input[name='password']").type("eyjrif85938442")
        cy.get("button[onclick='myFunction()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
    })

    it("Validate logging into the application without providing any credentials", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("button[onclick='myFunction()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
    })

    it("Validate that the reset credentials is available and is working", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("mngr541404")
        cy.get("input[name='password']").type("eyjrif85938442")
        cy.get("input[value='RESET']").click()
        cy.get("input[name='uid']").type("mngr541404")
        cy.get("input[name='password']").type("eyjrif85938442")
        cy.get("input[name='uid']").should("have.value", "")
        cy.get("input[name='password']").should("have.value", "")
    })

        it("Validate logging into the Application using Keyboardkeys (Tab and Enter)", () => {
        cy.visit("https://demo.guru99.com/v4/");
        cy.get("input[name='uid']").focus().type("mngr541404").tab();//Focus on username field & type
        cy.get("input[name='password']").focus().type("ujepUbY").tab();//Focus on password field & type
        cy.get("input[name='password']").type("{enter}");//Press Enter to submit the form
        cy.get("marquee[class='heading3']").should("contain", "Welcome To Manager's Page of Guru99 Bank");
    });

    it("Validate Logging into the Application and browsing back using Browser back button ", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const myLoggingIn = new Login();
        myLoggingIn.getUsername();
        myLoggingIn.getPassword()
        myLoggingIn.getLogin()
        cy.get("marquee[class='heading3']").should("contain", "Welcome To Manager's Page of Guru99 Bank")
        cy.go("back")
    })

    it.only("Validate the text into the Password field is toggled to hide its visibility", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const togglePassword = new Login();
        togglePassword.getUsername();
        togglePassword.getPassword()
        cy.get("input[name='password']").should("not.be.visible")
    })

          
          
   
      

   
})