# Seemy - API Server

## Description

Seemy is a platform that puts in contact people who has sports & luxury cars with those who want to rent them for a few days. Think about it as a 'Getaround' app, but only focused on high-end cars.

## User Stories

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup

**Sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend

**Login** - As a user I want to be able to log in on the webpage so that I can get back to my account

**Logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

**Events list** - As a user I want to see all the events available so that I can choose which ones I want to attend

**Events create** - As a user I want to create an event so that I can invite others to attend

**Events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend

**Attend event** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile: - see and edit my profile - upload my profile picture.

Homepage: - …

## ROUTES:

### MVP

## Endpoints

| Method | Path           | Description      | Body                            |
| :----: | -------------- | ---------------- | ------------------------------- |
|  GET   | `/`            | show homepage    |                                 |
|  GET   | `/cars`        | list all cars    |                                 |
|  POST  | `/cars`        | add a car        |                                 |
|  GET   | `/cars/:id`    | get a car        |                                 |
|  PUT   | `/cars/:id`    | update a car     |                                 |
| DELETE | `/cars/:id`    | delete a car     |                                 |
|  GET   | `/learn-more`  | how to use it    |                                 |

## Auth

| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | who am i       |                          |
|  POST  | `/signup` | signup a user  | `{ email, password }`    |
|  POST  | `/login`  | login a user   | `{ email, password }`    |
|  GET   | `/logout` | logout session |                          |

### Backlog

| Method | Path              | Description    | Body                     |
| :----: | ----------------  | -------------- | ------------------------ |
|  GET   | `/cars/:id/book`  | book a car     |                          |
|  POST  | `/cars/:id/book`  | book a car     |                          |

## Models

User model

```javascript
{
	email: String;
	password: String;
}
```

Event model

```javascript
{
	owner: ObjectId<User>
	name: String
	description: String
	date: Date
	location: String
}
```

## Links

### Trello

[Seemy Trello](https://trello.com/b/gNnluUYp/ironhack-module3-project)

### Git

The url to your repository and to your deployed project

[Github Repo - Server API](https://github.com/Pablolo/seemy-express-server)

[Github Repo - React Client](https://github.com/Pablolo/seemy-react-client)


[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)
