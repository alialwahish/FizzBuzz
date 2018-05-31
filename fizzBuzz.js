
    retWord=""
    function fizzBuzz(num){
        for(i=1;i<=num;i++){
            if(i%3==0 && i%5==0){
                retWord+="Fizz Buzz, "
            }
            else if(i%3==0){
                retWord+="Fizz, "
            }
            else if(i%5==0){
                retWord+="Buzz ,"
            }
            else
                retWord+=""+i+", "
        }
        return retWord
    }


    console.log(fizzBuzz(15));
