import herokuappPageObjects from "../../pages/herokuappPageObjects.cy.js";
const app=new herokuappPageObjects();
it("Should herokuapp to dynamic-table page", () =>{

    app.url();
    app.tableData().click()
    app.jsonData().clear();
    app.jsonData().click();
    const expectedJsonString = '[{"name" : "Bob", "age" : 20, "gender": "male"}, {"name": "George", "age" : 42, "gender": "male"}, {"name":"Sara", "age" : 42, "gender": "female"}, {"name": "Conor", "age" : 40, "gender": "male"}, {"name":"Jennifer", "age" : 42, "gender": "female"}]';
    app.jsonData()
     .invoke('val', expectedJsonString)
     .should('have.value', expectedJsonString);
     app.dynamicrefreshTable().click();
 })
