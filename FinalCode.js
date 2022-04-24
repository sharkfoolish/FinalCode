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
            this.setRangeAndProgress();
        }
        else if (this.password < inputAnswer-0){
            this.rederRecord(inputAnswer, '錯誤');
            this.Max = inputAnswer;
            this.number+=1;
            this.setRangeAndProgress();
        }
    },

    rederRecord : function(inputAnswer, status){
        this.record += '<tr><th scope="row">'+ this.number + '</th><td>' + new Date().toLocaleDateString() + ' ' +new Date().toLocaleTimeString() + '</td><td>'+ inputAnswer +'</td><td>'+ status +'</td></tr>';
    },

    setRangeAndProgress : function() {
        inputAnswerLabel.textContent = "請輸入"+ this.Min + "至" + this.Max + "之間的正整數";
        progress.innerHTML = '<div class="progress-bar bg-white" role="progressbar" style="width:'+ (this.Min) +'%" aria-valuemin="0" aria-valuemax="100">'+ (this.Min) + '</div><div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+ (this.Max-this.Min) + '%" aria-valuemin="0" aria-valuemax="100">'+ (this.Max-this.Min-1) + '</div><div class="progress-bar bg-white" role="progressbar" style="width: '+ (100-this.Max) + '%" aria-valuemin="0" aria-valuemax="100">'+ (100-this.Max-1) +'</div>';
    }

};