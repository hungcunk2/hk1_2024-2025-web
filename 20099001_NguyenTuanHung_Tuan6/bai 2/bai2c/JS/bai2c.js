function showSelected() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var selected = [];
    checkboxes.forEach((checkbox) => {
        selected.push(checkbox.value);
    });
    document.getElementById('result').innerText = "Bạn chọn cafe: " + selected.join(', ') + ",";
}

document.addEventListener('DOMContentLoaded', (event) => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', showSelected);
    });
});