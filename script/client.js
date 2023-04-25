const inputId = document.getElementById("inputId")
const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const inputAge = document.getElementById("inputAge")
const tableBody = document.getElementById("tableBody")
const contenerdorId = document.getElementById("contenerdorId")
const btnModal = document.getElementsByClassName("btn-modal")

function obtener(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("http://localhost/api/Client/all", requestOptions)
    .then(response => response.json())
    .then(result => {
        result.forEach(element => {
            tableBody.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.email}</td>
                    <td>
                        <button button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#formModal" onclick="onClickDetails(${element.idClient})">Details</button>
                    </td>
                </tr>
            `
        });
    })
    .catch(error => console.log('error', error));
}

function obtenerPorId(id){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(`http://localhost/api/Client/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            inputId.value = result.idClient
            inputName.value = result.name
            inputEmail.value = result.email
            inputPassword.value = result.password
            inputAge.value = result.age

        })
        .catch(error => console.log('error', error));
}

function onClickAdd(){
    contenerdorId.style.display = 'none'
    btnModal[0].style.display = 'block'
    btnModal[1].style.display = 'none'
    btnModal[2].style.display = 'none'


}

function onClickDetails(id){
    contenerdorId.style.display = 'block'
    btnModal[0].style.display = 'none'
    btnModal[1].style.display = 'block'
    btnModal[2].style.display = 'block'

    obtenerPorId(id)
}

obtener()