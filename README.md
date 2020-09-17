## Alfresco ADF automation QA exercise

Do you love automation testing and you know how to solve the following exercise? Contact us! We may have a job for you :)
* https://jobs.smartrecruiters.com/Alfresco/743999676099136-senior-qa-automation-engineer

## Exercise
Fork this GitHub repository and push the produced code in your fork repository. 

Automate the following scenario using protractor:

1. Access to http://qaexercise.envalfresco.com/settings
2. Change Provider to ECM
3. Click Apply
4. Navigate to http://qaexercise.envalfresco.com/login
    - Insert Username and Password
    - Username : guest@example.com
    - Password : Password
    - Click Login
5. Navigate to http://qaexercise.envalfresco.com/files
6. Click on 'create new folder' icon.
7. New folder dialog is displayed.
8. Introduce your Github username (for example in my case) "magemello".
9. Name has been added.
10. Click on 'Create' button.
11. The dialog is closed. Folder with your Github username is created in the current folder.
12. Click on 'create new folder' icon.
13. New folder dialog is displayed.
14. Introduce your Github username (for example in my case) "magemello".
15. Name has been added.
16. Click on 'Create' button.
17. The dialog is not closed.
18. The message "There's already a folder with this name. Try a different name" is displayed.
19. Select the folder with your Github username
20. Open Options window (3 dots)
21. Click delete

In the README file of the repository we want to see also the following sections:

1. ***Description*** 
The follow steps descrive the steps to run the implementation. 

To run the test the following steps should be done:
* Access to GitHub 
* Go to https://github.com/carodrigues/adf-automation-qa
* Download project zip file from GitHub
* Extract project from zip
* Via command line prompt go to the project “adf-automation-qa” directory 
* Execute command “protractor starter\conf.js” 
 
Or
* Access to GitHub 
* Go to https://github.com/carodrigues/adf-automation-qa
* Download project zip file from GitHub
* Extract project from zip 
* Start Vistual Studio Code and open folder “adf-automation-qa”
* Open a new Terminal  and execute the command “protractor starter\conf.js”

Expected results: 

![Alt text](https://github.com/carodrigues/adf-automation-qa/blob/master/testResults.JPG)
 
2. ***Explanation*** 

The implementation of this solution was made by using protractor with jasmine. 
For the implementation to be more clear, the test case was splitted with 4 areas (it):

* Change provide
* Login in QA exercise
* Create new folder – carodrigues
* Delete folder – carodrigues


3. ***Prerequisites***

If not installed, install

*  Execute instructions described on ReadMe.md file in starter directory  

*  Install jasmine: npm install -g jasmine

*  Install jasmine-spec-reporter: npm install jasmine-spec-reporter --save-dev

*  Visual Studio Code must have JavaScript and TypeScript installed. 



You can send the link to your fork at mario.romano@alfresco.com. Feel free to attach also your cv and a link to your linkedin profile.

### Starter
The framework has already been setup in the /starter folder, please add your teest case in the spec.js file. 

### Some info about protractor
* https://github.com/angular/protractor
* https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75

### Some info about ADF
* https://github.com/Alfresco/alfresco-ng2-components
* https://alfresco.github.io/adf-component-catalog/
