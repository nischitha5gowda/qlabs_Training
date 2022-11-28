
    var b = parseInt(prompt("enter a table value"));
    var n=prompt("enter length");
    var m=(typeof(b));
    console.log(typeof(b));
    if(m == 'number')
    {
        if(b<1)
        {
            alert("enter greater than zero value")
        }
        else{
            var m=0;
            for(i=0;i<=n;i++)
            {
                var m=m+b;
                console.log(m);
                // alert(m);
            }
        }
    }
    
