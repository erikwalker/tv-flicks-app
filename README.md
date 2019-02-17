# tv-flicks-app
An Angular4 application that allows you to view tv shows by calling an external api

##Summary:
• Created modular angular4 application separating functionality into features.
• Used routing to route to multiple parameters and connected to external api.
• Ported data from external api and customized internally in the application.
• Created custom searching functionality to search for TV shows.
• Send multiple HTTP requests at the same time using Fork Join calls to get full TV show listings of requested TV series



In this application there is a carousel to show the featured shows available.

![image](https://user-images.githubusercontent.com/19658505/52917265-6962d700-32b7-11e9-8cb4-9bc31633d919.png)


Below are the lists of shows with icons that can be clicked on that will call a tv api (TV_Maze) to get a detailed listing a description of the show.

![image](https://user-images.githubusercontent.com/19658505/52917276-88616900-32b7-11e9-99b7-c02f85d51711.png)


When clicking details of one of the tv shows we call an external api to get the information.

![image](https://user-images.githubusercontent.com/19658505/52917286-acbd4580-32b7-11e9-84e9-4bab4ed325ad.png)


Also the searching functionality: We can provide a search string and it will look up the tv shows available:

 eg searching for batman gives the following result
 
![image](https://user-images.githubusercontent.com/19658505/52917309-e5f5b580-32b7-11e9-9a5a-9cdffdedeb3e.png)


Now clicking on the first batman icon gives the following information about the series and the episodes.

![image](https://user-images.githubusercontent.com/19658505/52917322-06be0b00-32b8-11e9-9cfe-395ecaa3f7f2.png)

##Steps to checknout and run the application:
• Either fork, clone or checkout the project into your local system and have nodeJS and npm installed 
• run npm install 
• run npm start

