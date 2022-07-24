// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

  data.forEach(version => {
    test.describe(version + ': Multiply', () => {
      test('Multiplying 6 and 2 results in 12', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6');
        await page.locator('#number2Field').type('2');
        await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('12');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Divide', () => {
      test('Dividing 6 and 2 results in 3', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6');
        await page.locator('#number2Field').type('2');
        await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('3');
      });
    });
  });

data.forEach(version => {
    test.describe(version + ': Concetenate', () => {
      test('Concatenating 6 and 2 results in 62', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6');
        await page.locator('#number2Field').type('2');
        await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('62');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Subtract', () => {
      test('Subtracting 6 and 2 results in 4', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6');
        await page.locator('#number2Field').type('2');
        await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('4');
      });
    });
  });  

  data.forEach(version => {
    test.describe(version + ': Add non integers', () => {
      test('Adding 6.2 and 2.2 results in 8.4', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6.2');
        await page.locator('#number2Field').type('2.2');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('8.4');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Subtract non integers', () => {
      test('Subtracking 6.7 and 2.2 results in 4.5', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6.7');
        await page.locator('#number2Field').type('2.2');
        await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('4.5');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Multiply non integers', () => {
      test('Multiplying 6.7 and 2.2 results in 14.74', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6.7');
        await page.locator('#number2Field').type('2.2');
        await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('14.74');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Divide non integers', () => {
      test('Dividing 2.2 and 1.1 results in 2', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('2.2');
        await page.locator('#number2Field').type('1.1');
        await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('2');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Concatenate non integers', () => {
      test('Concatenating 2.2 and 1.1 results in 2.21.1', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('2.2');
        await page.locator('#number2Field').type('1.1');
        await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('2.21.1');
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Integer checkbox', () => {
      test('Integer checkbox not visible with non numeric values when concetenating', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('i');
        await page.locator('#number2Field').type('j');
        await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

        await expect(page.locator('#integerSelect')).toBeHidden();        
    
        });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Editable integer checkbox', () => {
      test('Checking ability to edit integer checkbox', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('6.2');
        await page.locator('#number2Field').type('2.2');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click(); 
    
        await expect(page.locator('#integerSelect')).toBeEditable();
      });
    });
  });
 
  data.forEach(version => {
    test.describe(version + ': Calculate button', () => {
      test('Checking if Calculate button is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});

        await expect(page.locator('#calculateButton')).toBeVisible();       
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Build button', () => {
      test('Checking if Build button is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});

        await expect(page.locator('#selectBuild')).toBeVisible();
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': First number input', () => {
      test('Checking if first number input is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
       
        await expect(page.locator('#number1Field')).toBeVisible();
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Second number input', () => {
      test('Checking if second number input is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});

        await expect(page.locator('#number2Field')).toBeVisible();
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Operation dropdown', () => {
      test('Checking if operation dropdown is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
 
        await expect(page.locator('#selectOperationDropdown')).toBeVisible();  
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': Answer input', () => {
      test('Checking if answer input is visible', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});

        await expect(page.locator('#numberAnswerField')).toBeVisible();
      });
    });
  })

  data.forEach(version => {
    test.describe(version + ': 1 Input value not a number', () => {
      test('Checking 1rst input with not numerical value', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('p');
        await page.locator('#number2Field').type('5');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();       
    
        await expect(page.locator('#errorMsgField')).toBeVisible();        
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': 1 Input value error', () => {
      test('1rst input with not numerical value error message', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('p');
        await page.locator('#number2Field').type('5');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();           
      
        await expect(page.locator('#errorMsgField')).toContainText(['Number 1 is not a number']);
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': 2 Input value not a number', () => {
      test('Checking 2nd input with not numerical value', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('1');
        await page.locator('#number2Field').type('h');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();       
    
        await expect(page.locator('#errorMsgField')).toBeVisible();        
      });
    });
  });

  data.forEach(version => {
    test.describe(version + ': 2 Input value error', () => {
      test('2nd input with not numerical value error message', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('1');
        await page.locator('#number2Field').type('h');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();          
       
        await expect(page.locator('#errorMsgField')).toContainText(['Number 2 is not a number']);
      });
    });
  });


  data.forEach(version => {
    test.describe(version + ': Concatenate non numerical values', () => {
      test('Concatenating p and o results in po', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('p');
        await page.locator('#number2Field').type('o');
        await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
        await page.locator('#calculateButton').click();       
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('po');
      });
    });
  }); 