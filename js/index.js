const input = document.getElementById('input').value;

if(input === ""){
    alert("내용을 입력하세요!");
    return;
}

console.log(input);
location.href = `sub.html?keyword=${encodeURIComponent(input)}`;