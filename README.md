# HOSTEL MANAGEMENT API
The hostel management API is a technical assessment for Hosty.


## FEATURES
* Creating a hostel
* Viewing all hostels
* Updating information of a hostel
* Deleting a hostel  by id
* Creating a user
* User login


## INSTALLATION GUIDE
* Clone the repository using link below
```bash
$ git clone https://github.com/Nakazibwe/hosty_assessment.git
```
* Install dependencies using npm package manager.
```bash
$ npm install 
```
* Create a dotenv file and add the following variables;
DATABASE_URL  PORT JWT_SECRET


## USAGE
* Run the API in watch mode by running the code below in your terminal
```bash
$ npm run dev
```


## API 

### Summary of Endpoint Actions
| REQUEST | Endpoint               | Summary of Action                |
| ------- | ---------------------- | -------------------------------- |
| POST    | /api/hostels           |  To create a new hostel          |
| GET     | /api/hostels           |  To view all hostels             |           
| PATCH   | /api/hostels/{id}      |  To update hostel details        |            
| DELETE  | /api/hostels/{id}      |  To delete a hostel by id        |
| POST    | /api/users             |  To create a user                |  
| POST    | /api/users/auth/login  |  To login a user                 |
