
describe("iframe", ()=>{

    it("Validate logging into the application with invalid credentials(ie invalid userID and invalid password)", ()=>{
        cy.visit("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert")
       
        const iframe = cy.get("#iframeResult")//get the frame
        .its("0.contentDocument.body")//check the document that contains the element
        .should("be.visible")//check if the element is visible
       

        cy.wait(1000)
        iframe.get("button[onclick='myFunction()']").click()
        
    })
    it.skip("Using iFrames directly", function(){
        cy.visit("https://the-internet.herokuapp.com/iframe")
        //The below operation will access is used to access elements inside iframe in cypress
        const iframe = cy.get("#mce_0_ifr")//get the frame
        .its("0.contentDocument.body")//check the document that contains the element
        .should("be.visible")//check if the element is visible
        .then(cy.wrap)

        cy.wait(2000)
        iframe.clear()//clear text element that was initially inside iframe
        .type("Welcome Ejyke De Programmer {ctrl+A}")//Then type in new words after clearing

        cy.get("button[title='Bold']").click()//to click on the button B
    })
})