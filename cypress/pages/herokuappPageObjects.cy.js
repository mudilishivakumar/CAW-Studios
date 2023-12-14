export default class herokuappPageObjects {
    url = () => cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    tableData=()=>cy.get('summary');
    jsonData=()=>cy.get('#jsondata');
    dynamicrefreshTable=()=>cy.get('#refreshtable');




}
