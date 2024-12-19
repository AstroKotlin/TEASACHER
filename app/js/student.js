function openStudent() {

}

function editHS(id) {
    document.getElementById("student").style.display = 'none';
    document.getElementById("edit-hs").style.display = 'block';
    document.getElementById("maHS").innerText = id;

    eel.getListHS()(function(listHS) {
        let split = listHS[id].split("|");

        document.querySelector("#edit-studentName").value = split[0];
        document.querySelector("#edit-phone").value = split[1];
        document.querySelector("#edit-dob").value = split[2];
    });
}

const showFormButton = document.getElementById('showFormButton');
const formContainer = document.getElementById('form-container');
const cancelButton = document.getElementById('cancelButton');
const cancelButton2 = document.getElementById('cancelButton2');

showFormButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
    document.getElementById("student").style.display = 'none';
});

cancelButton.addEventListener('click', function() {
    formContainer.style.display = 'none';
    document.getElementById("student").style.display = 'block';
});

cancelButton2.addEventListener('click', function() {
    document.getElementById("edit-hs").style.display = 'none';
    document.getElementById("student").style.display = 'block';
});

function removeHS(id) {
    eel.removeHS(id);
    location.reload();
}

eel.getListHS()(function(listHS) {
    let id = 0;
    listHS.forEach(function(a) {
        let split = a.split("|");

        let row = `<tbody><tr>
            <td>${split[0]}</td>
            <td>${split[1]}</td>
            <td>${split[2]}</td>
            <td><button onclick="editHS(${id})" class="btn" style="width: 100px; height: 30px; background: linear-gradient(135deg, #00358b, #0b86c7);">Sửa</button><button onclick="removeHS(${id})" class="btn" style="width: 100px; height: 30px; background-color: red;">Xóa</button></td>
        </tr></tbody>`;

        id += 1;

        document.getElementById("arrayHS").innerHTML += row;
    });
});

document.querySelector('.editGV').addEventListener('click', () => {
    let studentName = document.querySelector("#edit-studentName").value;
    let studentPhone = document.querySelector("#edit-phone").value;
    let studentDob = document.querySelector("#edit-dob").value;

    if (studentName === '' || studentDob === '' || studentPhone === '') {
        let tbao = document.getElementById("tbao");
        tbao.style.display = "block";
        tbao.textContent = "Bạn chưa nhập đủ thông tin!";
        return;
    } else {
        let tbao = document.getElementById("tbao");
        tbao.style.color = "green";
        tbao.textContent = "Bạn đã nhập đủ thông tin✔️";
        eel.setHS(parseInt(document.getElementById("maHS").innerText), studentName, studentPhone, studentDob);
        tbao.style.color = "red";

        return;
    }
});

document.querySelector('.addGV').addEventListener('click', () => {
    let studentName = document.querySelector("#studentName").value;
    let studentPhone = document.querySelector("#phone").value;
    let studentDob = document.querySelector("#dob").value;

    if (studentName === '' || studentDob === '' || studentPhone === '') {
        let tbao = document.getElementById("tbao");
        tbao.style.display = "block";
        tbao.textContent = "Bạn chưa nhập đủ thông tin!";
        return;
    } else {
        let tbao = document.getElementById("tbao");
        tbao.style.color = "green";
        tbao.textContent = "Bạn đã nhập đủ thông tin✔️";
        eel.addHS(studentName, studentPhone, studentDob);
        tbao.style.color = "red";

        return;
    }
});
