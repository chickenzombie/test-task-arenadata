describe('Форма обратной связи', () => {
  it('Успешная отправка формы с корректно заполненными данными и отображение сообщения об успешной отправке', () => {
    cy.visit('https://kontaktnaya-forma.testograf.ru/');

    cy.get('.question_107 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('Test');
    cy.get('.question_108 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('test@example.com');
    cy.get('.question_109 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('88005553535');
    cy.get('#downshift-0-toggle-button').click();
    cy.get('.scroll > .content > :nth-child(1)').click();
    cy.get('.multiline___cc6bb61529c652f37050').type('Test message');

    cy.get('.action___d45ea1f1799f107d8ccf > .button').click();

    cy.contains('Благодарим за обращение!').should('be.visible');
  });
});
