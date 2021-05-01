let users = [
    {
        id: _id(), 
        fullName:"Perry Campos",
        email: "fivycoxi@mailinator.com",
        poster: "https://picsum.photos/id/100/500/300"
    },
    {
        id: _id(), 
        fullName:"Perry Campoasas",
        email: "fiv22222222i@mailinator.com",
        poster: "https://picsum.photos/id/102/500/300"
    },
    {
        id: _id(), 
        fullName:"lela Campoasas",
        email: "fiv22222222i@mailinator.com",
        poster: "https://picsum.photos/id/103/500/300"
    }
]

const layout = {
    card : (e) => {
        return `<div class="col-xl-4 col-md-6 mb-4">
                    <div class="card">
                        <img src="${e.poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-user"></i> ${e.fullName}</h5>
                        <ul class="list-group">
                            <li class="list-group-item"><i class="fas fa-envelope"></i> ${e.email}</li>
                            <li class="list-group-item d-flex justify-content-between">
                                <button type="button" class="btn btn-info" onclick="editUser('${e.id}')">
                                    <i class="fas fa-user-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" onclick="deleteUser('${e.id}')">
                                    <i class="fas fa-user-minus"></i>
                                </button>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>`
    }
}

function _id () { return Math.random().toString(36).substr(2, 9); }

function render(el, data, template) {
    el.innerHTML = data.map( (item) => layout[template](item) ).join('')
}

const editUser = (id) => {
    console.log(`EDIT: ${id}`)
}

const deleteUser = (id) => {
    if (confirm('ნამდვილად გინდათ \n მომხმარებლის წაშლა?')) {
        users = users.filter( (user) => id != user.id) 
        // userList.innerHTML = users.map( (user) => layout.card(user) ).join('')
        render(userList, users, 'card')
    }
}