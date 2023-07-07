# **Brazilian Jiu Jitsu Moves**

## Webpage
[**LINK TO DEPLOYED WEBSITE**](https://move-matrix.onrender.com)

## Description
- User can create, view, edit, and delete list of Brazilian Jiu Jitsu positions, movements, and submissions


## Mock Up of UI
![Desktop View](/wireframe2.png)

## List of Backend Endpoints
|Endpoint|Method|Purpose|
|--------|------|--------|
|/move|GET|List of moves|
|/move|POST|Create new moves|
|/move/:id|GET|JSON of moves with id|
|/move/:id|PUT|Update moves|
|/move/:id|DELETE|Delete moves|

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
    


---
## Wireframe

## List of Technologies
![Example Image](/p2.jpg)
