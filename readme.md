# Seal Project 2

- **Your Name: Rachel Yang** 
- **App Name: CareerCanvas**
- **Description: An app to help users to document their job searching process. Users will be able to create, update, and delete the positions they applied for**
- **Github URL: https://github.com/LilyX2023/project2**
- **Deployed Website: https://project2-rachely.onrender.com/**
- **Trello Board:**

## List of Dependencies


##### Node Dependencies (package.json)
- bcrypt (Maybe)
- connect-mongo
- dotenv
- ejs
- express
- express-session (Maybe)
- method-override
- mongoose
- morgan
- alpinejs 

##### Frontend (if used, ex. jquery, alpine, bootstrap, htmx, etc.)
- htmx
- alpine
- jquery

## Route Map

Below should be a table listing the different routes in your app and their purposes.

| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Index | /job | GET | Renders all the job positions user has applied for on a page|
| New job form | /job/new | GET | Renders a form for the user to enter newly applied job position|
| Create job | /job | POST | Displays the newly added job position on the main page|
| Edit job | /job/:id/edit | GET | Renders a form for editing the existing job positions|
| Update job | /job/:id | PUT | Updates the existing job positions|
| Delete job | /job/:id | DELETE | Deletes the specific job position|
| Show job | /job/:id | GET | Displays more details of the selected job position|


## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Design Mockup](https://i.imgur.com/jW4w6CM.png)()

##### Desktop Design

![Desktop Design Mockup](./url-to-picture.jpg)

## ERD (Entity Relationship Diagram)

This should be a diagram showing your models and any relationships between them.

![Entity Relationship Diagram](./url-to-picture.jpg)
