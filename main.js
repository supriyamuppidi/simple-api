const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
const studentsList = [{
    id : 1,
    name : 'priya',
    age : 21,
    dept : 'CSE'
},
{
    id : 2,
    name : 'supriya',
    age : 22,
    dept : 'IT'
},
{
    id : 3,
    name : 'sai',
    age : 20,
    dept : 'CSE'
},
{
    id : 4,
    name : 'teja',
    age : 19,
    dept : 'MECH'
},
{
    id : 5,
    name : 'chandu',
    age : 20,
    dept : 'IT'
}];

app.get('/api/index', (req, resp) =>{
    resp.json(studentsList);
});

app.post('/api/create', (req, resp) => {
    const newStudent = {
        ...req.body,
        id : studentsList.length + 1
    };
    studentsList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);
    
});
app.delete('/api/delete/:id', (req, resp) =>{
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentsList.findIndex(student => student.id   === idToBeDeleted);
    studentsList.splice(studentToBeDeleted,1);
    resp.json(idToBeDeleted);
});
app.get('/api/index/:id', (req, resp) =>{
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentsList.findIndex(student => student.id   === idToBeDeleted);
    resp.json(studentsList);
});
app.listen(5000);