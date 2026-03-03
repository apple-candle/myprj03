const input = document.getElementById('input');
const sub_text = document.getElementById('sub-text');
const index_output = document.getElementById('index-output');
const sub_output = document.getElementById('sub_output');
let index_submit = document.getElementById('index_submit');
let sub_submit = document.getElementById('sub-submit');
const index_form = document.getElementById('index_form');
const sub_form = document.getElementById('sub-form');


index_submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value === ""){
        alert("내용을 입력하세요!");
        return;
    }
    index_output.textContent = index_form;
    e.submit();
})

sub_submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(sub_text.value === ""){
        alert("내용을 입력하세요!");
        return;
    }
    sub_output.textContent = sub_form;
    e.submit();
})

console.log(input);
console.log(sub_text);
location.href = `sub.html?keyword=${encodeURIComponent(input)}`;