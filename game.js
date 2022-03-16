class Millionaire{
    constructor(question,answer1,answer2,answer3,answer4,checkAnswer,point) {
        this.question=question;
        this.answer1=answer1;
        this.answer2=answer2;
        this.answer3=answer3;
        this.answer4=answer4;
        this.poin=point;
this.checkAnswer=checkAnswer
    }
    setQuestion(question){
        this.question=question;
    }
    getQuestion(){
        return this.question;
    }
    setAnswer1(answer1){
        this.answer1=answer1;
    }
    getAnswer1(){
        return this.answer1;
    }
    setAnswer2(answer2){
        this.answer2=answer2;
    }
    getAnswer2(){
        return this.answer2;
    }
    setAnswer3(answer3){
        this.answer3=answer3;
    }
    getAnswer3(){
        return this.answer3;
    }
    setAnswer4(answer4){
        this.answer4=answer4;
    }
    getAnswer4(){
        return this.answer4;
    }
    setcheckAnswer(checkAnswer){
        this.checkAnswer= checkAnswer;
    }
    getcheckAnswer(){
        return this.checkAnswer;
    }
    setPoint(point){
        this.poin=point;
    }
    getPoint(){
        return this.point;
    }
}
// class time {
//     constructor(second) {
//         this.second=second;
//     }
//     setSecond(second){
//         this.second=second;
//     }
//     getSecond(){
//         return this.second
//     }
// }