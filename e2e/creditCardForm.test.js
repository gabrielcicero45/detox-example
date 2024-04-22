describe('CreditCardForm', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should fill out the form and increment CPF', async () => {
      await expect(element(by.text('Nome:'))).toBeVisible();

      await element(by.placeholder('Digite seu nome')).typeText('Cicero');

      await expect(element(by.text('Número de caracteres do nome: 6'))).toBeVisible();
  
      await element(by.text('Incrementar CPF')).tap();

      await expect(element(by.text('1'))).toBeVisible();
    });
  
    it('should generate income', async () => {
      await expect(element(by.text('Renda:'))).toBeVisible();
  
      await element(by.text('Gerar Renda')).tap();
  
      await expect(element(by.id('incomeAmount'))).toBeVisible();
    });
  });