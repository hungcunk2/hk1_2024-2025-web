let currentStep = 1; // Bước hiện tại
let studentData = {}; // Lưu trữ dữ liệu sinh viên

function nextStep() {
    if (currentStep === 1) {
        const studentId = document.getElementById('studentId').value;
        if (studentId) {
            studentData.mssv = studentId;
            document.getElementById('stepMSSV').style.display = 'none';
            document.getElementById('stepName').style.display = 'block';
            currentStep++;
        } else {
            alert('Vui lòng nhập Mã số SV.');
        }
    } else if (currentStep === 2) {
        const fullName = document.getElementById('fullName').value;
        if (fullName) {
            studentData.fullName = fullName;
            document.getElementById('stepName').style.display = 'none';
            document.getElementById('stepClass').style.display = 'block';
            currentStep++;
        } else {
            alert('Vui lòng nhập Họ tên.');
        }
    } else if (currentStep === 3) {
        const className = document.getElementById('class').value;
        if (className) {
            studentData.className = className;
            addStudentToTable();
            resetForm();
        } else {
            alert('Vui lòng nhập Lớp.');
        }
    }
}

function prevStep() {
    if (currentStep === 2) {
        document.getElementById('stepName').style.display = 'none';
        document.getElementById('stepMSSV').style.display = 'block';
        currentStep--;
    } else if (currentStep === 3) {
        document.getElementById('stepClass').style.display = 'none';
        document.getElementById('stepName').style.display = 'block';
        currentStep--;
    }
}

function addStudentToTable() {
    const tableBody = document.getElementById('studentTableBody');
    const newRow = document.createElement('tr');

    const mssvCell = document.createElement('td');
    mssvCell.innerText = studentData.mssv;
    newRow.appendChild(mssvCell);

    const nameCell = document.createElement('td');
    nameCell.innerText = studentData.fullName;
    newRow.appendChild(nameCell);

    const classCell = document.createElement('td');
    classCell.innerText = studentData.className;
    newRow.appendChild(classCell);

    tableBody.appendChild(newRow);
    document.getElementById('outputContainer').style.display = 'block';
}

function resetForm() {
    document.getElementById('studentForm').reset();
    document.getElementById('stepClass').style.display = 'none';
    document.getElementById('stepMSSV').style.display = 'block';
    currentStep = 1;
    studentData = {};
}