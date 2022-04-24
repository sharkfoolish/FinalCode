const FinalCode = {

    password : Math.floor((Math.random() * 98) + 1),
    Max : 100,
    Min : 0, 
    number : 1,
    record : '',
   
    judge : function(inputAnswer){
        if (this.password == inputAnswer-0) {
            alert("你花了" + this.number + "次，猜對答案" + this.password);
        }
        else if (this.password > inputAnswer-0) {
            this.Min = inputAnswer;
            this.number+=1;
        }
        else if (this.password < inputAnswer-0){
            this.Max = inputAnswer;
            this.number+=1;
        }
    }

};