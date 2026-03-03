const input = document.getElementById('input');
const sub_text = document.getElementById('sub-text');
const index_output = document.getElementById('index-output');
const sub_output = document.getElementById('sub_output');
const index_submit = document.getElementById('index_submit');
const sub_submit = document.getElementById('sub-submit');
const index_form = document.getElementById('index_form');
const sub_form = document.getElementById('sub-form');

const params = new URLSearchParams(window.location.search);
const keywordValue = params.get('keyword');

if (keywordValue) {
    if (sub_output) {
        sub_output.textContent = "서브에서 받은 값: " + keywordValue;
    }
    if (index_output) {
        index_output.textContent = "메인에서 받은 값: " + keywordValue;
    }
}

if (index_submit && index_form) {
    index_submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value === "") {
            alert("내용을 입력하세요!");
            return;
        }
        index_form.submit(); 
    });
}

if (sub_submit && sub_form) {
    sub_submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (sub_text.value === "") {
            alert("내용을 입력하세요!");
            return;
        }
        sub_form.submit();
    });
}