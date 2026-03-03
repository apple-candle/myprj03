// 요소 가져오기
const input = document.getElementById('input');
const sub_text = document.getElementById('sub-text');
const index_output = document.getElementById('index-output'); // sub.html에 존재
const sub_output = document.getElementById('sub_output');     // index.html에 존재
const index_submit = document.getElementById('index_submit');
const sub_submit = document.getElementById('sub-submit');
const index_form = document.getElementById('index_form');
const sub_form = document.getElementById('sub-form');

// URL 파라미터 읽기 도구
const param = new URLSearchParams(window.location.search);

// ----------------------------------------------------
// [A] 페이지 로드 시 실행 (데이터 출력)
// ----------------------------------------------------

// 1. sub.html이 열렸고, index에서 보낸 'input_name' 값이 있다면?
if (index_output && param.has('text')) {
    index_output.textContent = param.get('text') + " (index에서 넘어옴!)";
}

// 2. index.html이 열렸고, sub에서 보낸 'sub-text' 값이 있다면?
if (sub_output && param.has('text')) {
    sub_output.textContent = param.get('text') + " (sub에서 넘어옴!)";
}

// ----------------------------------------------------
// [B] 버튼 클릭 시 실행 (데이터 전송)
// ----------------------------------------------------

// 1. index 페이지의 버튼을 눌렀을 때
if (index_submit) {
    index_submit.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (input.value === "") {
            alert("index 내용을 입력하세요!");
            return;
        }
        index_form.submit(); // 이상 없으면 sub.html로 이동!
    });
}

// 2. sub 페이지의 버튼을 눌렀을 때
if (sub_submit) {
    sub_submit.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (sub_text.value === "") {
            alert("sub 내용을 입력하세요!");
            return;
        }
        sub_form.submit(); // 이상 없으면 index.html로 이동!
    });
}