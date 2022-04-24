const FinalCode = {

    password : Math.floor((Math.random() * 98) + 1),
    Max : 100,
    Min : 0, 
    number : 1,
    record : '',
   
    judge : function(inputAnswer){
        if (this.password == inputAnswer-0) {
            alert("你花了" + this.number + "次，猜對答案" + this.password);
            this.rederRecord(inputAnswer, '正確');
        }
        else if (this.password > inputAnswer-0) {
            this.rederRecord(inputAnswer, '錯誤');
            this.Min = inputAnswer;
            this.number+=1;
        }
        else if (this.password < inputAnswer-0){
            this.rederRecord(inputAnswer, '錯誤');
            this.Max = inputAnswer;
            this.number+=1;
        }
    },

    rederRecord : function(inputAnswer, status){
        this.record += '<tr><th scope="row">'+ this.number + '</th><td>' + new Date().toLocaleDateString() + ' ' +new Date().toLocaleTimeString() + '</td><td>'+ inputAnswer +'</td><td>'+ status +'</td></tr>';
    },

};