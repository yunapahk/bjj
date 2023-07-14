# **Jiu Jitsu Moves**

## Webpage
[**Link to Deployed Site**](https://move-matrix.onrender.com)


## Description
- Full CRUD app where user is able to add move name, type, description, points, and image.


## List of Backend Endpoints
|Endpoint|Method|Purpose|
|--------|------|--------|
|/move|GET|List of moves|
|/move|POST|Create new moves|
|/move/:id|GET|JSON of moves with id|
|/move/:id|PUT|Update moves|
|/move/:id|DELETE|Delete moves|
|/user/signup|POST|User signup|
|/user/login|POST|User login|
|/logout|GET|User logout|

## ERD Diagram
``` mermaid
erDiagram
    USER {
        string Login
        string Password
        string ForgotCode
    }

    USER ||--o{ HOME : landingPage

    HOME {
        string moveName
        string moveType
        string moveDescription
        checkbox moveLearned
        string moveImage
    }

    HOME ||--|{ CREATE : createMove
    CREATE {
        string moveName
        string moveType
        string moveDescription
        checkbox moveLearned
        string moveImage
    }

    HOME ||--|{ EDIT : editMove
    EDIT {
        string moveName
        string moveType
        string moveDescription
        checkbox moveLearned
        string moveImage
    }

    HOME ||--|{ DELETE : deleteMove
    DELETE {
        string moveName
        string moveType
        string moveDescription
        checkbox moveLearned
        string moveImage
    }

    HOME ||--o{ LOGOUT : logoutUser
    LOGOUT {
        string LogoutMessage
    }
```

## Daily Schedule
|Day|Task|
|---|----|
|1|Complete ERD and Trello to do list|
|2|Complete routes|
|3|Complete seedData|
|4|Create gif play on hover|
|5/6|Create OAuth|
|7|Remaining CSS Styling|

## Mock Up of UI
![Desktop View](/mockupofUI.jpeg)

## List of Technologies
![Example Image](/p2.jpg)
