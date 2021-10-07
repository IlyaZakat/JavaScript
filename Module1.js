let a,b,result,bd2;
        function setValues()
        {
            a=Number(document.getElementById("a").value);
            b=Number(document.getElementById("b").value);
        }
        function sum()
        {
            setValues();
            result= a+b;
            alert("Ответ равен = "+result);
        }
        function ReverseCase()
        {
            let new_str = "";
            rev = String(document.getElementById("c").value);
            var len = rev.length;
            for(var i = 0;i < len;i++)
            {
                if(rev[i] === rev[i].toLowerCase())
                {
                    new_str += rev[i].toUpperCase();
                }
                else
                {
                    new_str += rev[i].toLowerCase();
                }
            }
            alert(new_str);
        }
        function ReverseArray()
        {
            text = String(document.getElementById("d").value);
            bd = text.split(" ");
            bd.reverse();
            alert(bd);
        }
    