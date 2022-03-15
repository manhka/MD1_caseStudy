function addQuiz(q){
    let quizs = loadQuiz();

    quizs.push(q);
    let convertQuizs = JSON.stringify(quizs);//  chuyển mảng thành chuỗi
    localStorage.setItem('altp',convertQuizs);// cho phần tử vào trong local storage
}
function loadQuiz(){
    //xét điều kiện để lấy phần tử từ local storage ra để chơi
    if (localStorage.hasOwnProperty('altp')){
        let quizs =localStorage.getItem('altp');//string
        return JSON.parse(quizs);// dung JSON.parse để chuyền chuỗi thành mảng
    }else{
        return [];
    }
}