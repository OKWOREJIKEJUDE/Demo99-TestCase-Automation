
import Login from "../PagerObjectFolder/Login_POM.cy"

describe("User Login", ()=>{
    it("Validate logging into the application with valid credentials (ie valid userID and valid password)", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const myLoginDetails = new Login();
        myLoginDetails.getUsername();
        myLoginDetails.getPassword()
        myLoginDetails.getLogin()
        cy.get("marquee[class='heading3']").should("contain", "Welcome To Manager's Page of Guru99 Bank")
    })

    it("Validate logging into the application with invalid credentials(ie invalid userID and invalid password)", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("hhsnj3729335345443")
        cy.get("input[name='password']").type("46438457hjsdhdddm")
        cy.get("input[value='LOGIN']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
        //todo---Verify the corect way of handling those POPUPS
    })

    it("Validate logging into the Application using invalid userID and valid Password", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("hhsnj3729335345443")
        cy.get("input[name='password']").type("ujepUbY")
        cy.get("input[value='LOGIN']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
    })

    it("Validate logging into the Application using valid userID and invalid Password", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("mngr541404")
        cy.get("input[name='password']").type("eyjrif85938442")
        cy.get("input[value='LOGIN']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("User or Password is not valid")//verify the texts in the alert window..
        })
    })

    it("Validate logging into the application without providing any credentials", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[value='LOGIN']").click()
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

    //todo........INCOMPLETE
    it("Validate the text into the Password field is toggled to hide its visibility", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const togglePassword = new Login();
        togglePassword.getUsername();
        togglePassword.getPassword()
        cy.get("input[name='password']").should("not.be.visible")
    })

    //todo...This test failed by logging back in when its not supposed to because you have logged out already
    it("Validate Loggingout from the Application and browsing back using Browser back button", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        const myLoggingIn = new Login();
        myLoggingIn.getUsername();
        myLoggingIn.getPassword()
        myLoggingIn.getLogin()
        cy.get("marquee[class='heading3']").should("contain", "Welcome To Manager's Page of Guru99 Bank")
        cy.get("a[href='Logout.php']").click()
        cy.go("back")

    })

    it("Validate the number of unsucessful login attemps ", ()=>{
        for (let x = 0; x < 10; x++) {
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("input[name='uid']").type("hhsnj3729335345443")
        cy.get("input[name='password']").type("46438457hjsdhdddm")
        cy.get("input[value='LOGIN']").click()   
        }
    })

    it("Validate Logging into the Application, closing the Browser without loggingout and opening the application in the Browser again", ()=>{


    })

    //Try navigating to other pages from login to see if its possible
    it.only("Validate user is able to navigate to different pages from Login page", ()=>{
        cy.visit("https://demo.guru99.com/v4/")
        cy.get("img[src='https://demo.guru99.com/images/java-logo.png']").click()
        cy.go("back")
        cy.get("img[src='https://demo.guru99.com/images/live-project-logo.png']").click()
        cy.go("back")
        cy.get("img[src='https://demo.guru99.com/images/selenium-logo.jpg']").click()
        cy.go("back")
    })

    it("Validate that old and new passwords are changed after 20 days as expected thewebsite should behave", ()=>{
       //todo.. Login using the old password after 20 days to verify this


    })





          
          
   
      

   
})