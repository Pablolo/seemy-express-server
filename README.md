# Seemy - API Server

## Description

Seemy is a platform that puts in contact people who has sports & luxury cars with those who want to rent them for a few days. Think about it as a 'Getaround' app, but only focused on high-end cars.

## ROUTES:

### MVP

## Endpoints

| Method | Path           | Description      | Body                            |
| :----: | -------------- | ---------------- | ------------------------------- |
|  GET   | `/cars`        | list all cars    |                                 |
|  POST  | `/cars`        | add a car        |                                 |
|  GET   | `/cars/:id`    | get a car        |                                 |
|  PUT   | `/cars/:id`    | update a car     |                                 |
| DELETE | `/cars/:id`    | delete a car     |                                 |

## Auth

| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | who am i       |                          |
|  POST  | `/signup` | signup a user  | `{ email, password }`    |
|  POST  | `/login`  | login a user   | `{ email, password }`    |
|  GET   | `/logout` | logout session |                          |

### Backlog

| Method | Path              | Description          | Body                     |
| :----: | ----------------  | -------------------  | ------------------------ |
|  GET   | `/cars/:id/book`  | book a car           |                          |
|  POST  | `/cars/:id/book`  | book a car           |                          |
|  GET   | `/driver/:id`     | see driver profile   |                          |
|  POST  | `/driver/:id`     | edit driver profile  |                          |

## Models

User model

```javascript
{
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	profilePhoto: String,
	mobileNumber: Number,
}
```

Car model

```javascript
{
	location: {
		streetAdress: String,
		province: String,
		postalCode: Number,
	}
	carSpecs: {
		year: Number,
		make: String,
		model: String,
		odometer: Number,
	}
	transmission: String;
	availability: {
		advanceNotice: Number,
		maxDuration: Number,
	}
	image: String,
	description: String,
	licensePlate: String,
	dailyPrice: Number,
	userId: ObjectId<User>,
	deleted: DateTime,
	review: {
		content: String,
		rating: Number (1-5),
		userid: ObjectId<User>,
	}
}
```

## Links

### Trello

[Seemy Trello](https://trello.com/b/gNnluUYp/seemy-ironhack)

### Git

The url to your repository and to your deployed project

[Github Repo - Server API](https://github.com/Pablolo/seemy-express-server)

[Github Repo - React Client](https://github.com/Pablolo/seemy-react-client)


[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)
