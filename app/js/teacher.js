function openTeacher() {
    
}

function editGV(id) {
    document.getElementById("teacher").style.display = 'none';
    document.getElementById("edit-gv").style.display = 'block';
    document.getElementById("maGV").innerText = id;

    eel.getListGV()(function(listGV) {
        let split = listGV[id].split("|");

        document.querySelector("#edit-teacherName").value = split[0];
        document.querySelector("#edit-subject").value = split[1];
        document.querySelector("#edit-dob").value = split[2];
    });
}

const showFormButton = document.getElementById('showFormButton');
const formContainer = document.getElementById('form-container');
const cancelButton = document.getElementById('cancelButton');
const cancelButton2 = document.getElementById('cancelButton2');

showFormButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
    document.getElementById("teacher").style.display = 'none';
});

cancelButton.addEventListener('click', function() {
    formContainer.style.display = 'none';
    document.getElementById("teacher").style.display = 'block';
});

cancelButton2.addEventListener('click', function() {
    document.getElementById("edit-gv").style.display = 'none';
    document.getElementById("teacher").style.display = 'block';
});

function removeGV(id) {
    eel.removeGV(parseInt(id));
    location.reload();
}

eel.getListGV()(function(listGV) {
    let id = 0;
    listGV.forEach(function(a) {
        let split = a.split("|");

        let row = `<tbody><tr>
            <td>${split[0]}</td>
            <td>${split[1]}</td>
            <td>${split[2]}</td>
            <td><button onclick="editGV(${id})" class="btn" style="width: 100px; height: 30px; background: linear-gradient(135deg, #00358b, #0b86c7);">Sửa</button><button onclick="removeGV(${id})" class="btn" style="width: 100px; height: 30px; background-color: red;">Xóa</button></td>
        </tr></tbody>`;

        id += 1;

        document.getElementById("arrayGV").innerHTML += row;
    });
});

document.querySelector('.editGV').addEventListener('click', () => {
    let teacherName = document.querySelector("#edit-teacherName").value;
    let teacherSubject = document.querySelector("#edit-subject").value;
    let teacherDob = document.querySelector("#edit-dob").value;

    if(teacherName == '' || teacherDob == '' || teacherSubject == '') {
        let tbao = document.getElementById("tbao");
        tbao.style.display = "block";
        tbao.textContent = "Bạn chưa nhập đủ thông tin!";
        return;
    }else{
        let tbao = document.getElementById("tbao");
        tbao.style.color = "green";
        tbao.textContent = "Bạn đã nhập đủ thông tin✔️";
        eel.setGV(parseInt(document.getElementById("maGV").getHTML()), teacherName, teacherSubject, teacherDob);
        tbao.style.color = "red";

        return;
    }
});

document.querySelector('.addGV').addEventListener('click', () => {
    let teacherName = document.querySelector("#teacherName").value;
    let teacherSubject = document.querySelector("#subject").value;
    let teacherDob = document.querySelector("#dob").value;

    if(teacherName == '' || teacherDob == '' || teacherSubject == '') {
        let tbao = document.getElementById("tbao");
        tbao.style.display = "block";
        tbao.textContent = "Bạn chưa nhập đủ thông tin!";
        return;
    }else{
        let tbao = document.getElementById("tbao");
        tbao.style.color = "green";
        tbao.textContent = "Bạn đã nhập đủ thông tin✔️";
        eel.addGV(teacherName, teacherSubject, teacherDob);
        tbao.style.color = "red";

        return;
    }
});