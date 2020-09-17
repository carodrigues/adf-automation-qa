describe('Alfresco QA test', function() {

  

  it('Change provide', function() {

    browser.get("http://qaexercise.envalfresco.com/settings");  //1. Access to http://qaexercise.envalfresco.com/settings

    element(by.id('adf-provider-selector')).click(); //2. Click all 

    element(by.id('mat-option-1')).click(); //2. Change Provider to ECM

    element(by.id("host-button")).click() //3. Click Apply

    expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/login"); //4 .Navigate to http://qaexercise.envalfresco.com/login

    });

    it('Login in QA exercise', function() {

    element(by.id('username')).sendKeys('guest@example.com'); // 4. insert username 

    element(by.id('password')).sendKeys('Password');  //4. insert password 

    element(by.id('login-button')).click(); //4. Click Login
  
    expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/home");  // check is logged

    });


    it('Create new folder - carodrigues', function() {

    element(by.xpath('//mat-list-item[@data-automation-id="Content Services"]')).click(); //5. http://qaexercise.envalfresco.com/files

    expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/files"); // check user is in http://qaexercise.envalfresco.com/files
   
    element(by.xpath('//button[@data-automation-id="create-new-folder"]')).click(); //6.. Click on 'create new folder' icon.

    expect(element(by.id('mat-dialog-0')).getAttribute('role')).toEqual('dialog'); //7. New folder dialog is displayed.
 
    element(by.id('adf-folder-name-input')).sendKeys('carodrigues');//8. Introduce your Github username carodrigues".

    expect(element(by.id('adf-folder-name-input')).getAttribute("aria-invalid")).toEqual('false');  //9. Name has been added.

    element(by.id('adf-folder-create-button')).click();  //10. Click on 'Create' button.
    
    var dialogCount = 0; 

    expect(element(by.id('mat-dialog-'+ dialogCount)).isPresent()).toBe(false); //11. The dialog is closed.

    expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/files"); //11. Folder with your Github username is created in the current folder.
  
    expect(element(by.xpath('//div[@data-automation-id="text_carodrigues"]')).getText()).toEqual('carodrigues'); //11. Folder with your Github username is created in the current folder.
  
    element(by.xpath('//button[@data-automation-id="create-new-folder"]')).click(); // 12. Click on 'create new folder' icon.

    dialogCount++;
    expect(element(by.id('mat-dialog-'+ dialogCount)).getAttribute('role')).toEqual('dialog'); //13. New folder dialog is displayed.

    element(by.id('adf-folder-name-input')).sendKeys('carodrigues');  //14. Introduce your Github username carodrigues".

    expect(element(by.id('adf-folder-name-input')).getAttribute("aria-invalid")).toEqual('false');  //15. Name has been added.
    
    element(by.id('adf-folder-create-button')).click(); //16. Click on 'Create' button. 
   
    expect(element(by.id('mat-dialog-'+ dialogCount)).isPresent()).toBe(true); //17. The dialog is not closed.

    expect(element(by.xpath('//simple-snack-bar')).getText()).toEqual("There's already a folder with this name. Try a different name."); //18. The message "There's already a folder with this name. Try a different name" is displayed.

    element(by.id('adf-folder-cancel-button')).click(); //close modal 
  });

    it('Delete folder - carodrigues', function() {

    element.all(by.xpath('//div[@data-automation-id="carodrigues"]')).first().click(); // 19. Select the folder with your Github username

    element(by.id("action_menu_right_0")).click(); //20. Open Options window (3 dots)

    element(by.xpath('//button[@data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]')).click(); //21. Click delete

    expect(element(by.xpath('//div[@data-automation-id="text_carodrigues"]')).isPresent()).toBe(false); //folder deleted

  });
  
});
