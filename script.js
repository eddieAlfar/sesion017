//  const { response } = require("express");

function getUser(){
    fetch('http://localhost:8080/api/users')
    .then(response =>response.json())
    .then(data => console.log(data));
}

getUser()

function getUsersId(id){
    fetch('http://localhost:8080/api/users/639ce05bccd2a08f800febc8')
    .then(response => response.json())
    .then(data =>console.log(data));
}
getUsersId()