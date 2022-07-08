
function operation(choice)
{
     if(choice==1)
     {
        x=document.getElementById("txtA").value
        y=document.getElementById("txtB").value
           z=parseInt(x)+parseInt(y);
        document.getElementById("txtC").value=z
     }
     else if(choice==2)
     {
        x=document.getElementById("txtA").value
        y=document.getElementById("txtB").value
           z=parseInt(x)-parseInt(y);
        document.getElementById("txtC").value=z
     }
     else if(choice==3)
     {
        x=document.getElementById("txtA").value
        y=document.getElementById("txtB").value
           z=parseInt(x)*parseInt(y);
        document.getElementById("txtC").value=z
     }
     else if(choice==4)
     {
        x=document.getElementById("txtA").value
        y=document.getElementById("txtB").value
           z=parseInt(x)/parseInt(y);
        document.getElementById("txtC").value=z
     }
     
     else if(choice==5)
     {
        x=document.getElementById("txtA").value
        y=document.getElementById("txtB").value
          if(x>y)
            alert("x is greater");
          else  
           alert("y is greater")
         
     }
}
 
function shift()
{
     
      d= document.getElementById("div1");
       collect= d.getElementsByTagName("h1")
       //console.log(collect)
 
       for(i=0;i<collect.length;i=i+1)
       {       
           console.log(collect[i].innerHTML);
       }
}
function copy()
{
    document.getElementById("txtB").value= document.getElementById("txtA").value;
}
function on()
{
    document.getElementById("image1").src="image\\pic_bulbon.gif"
    //document.getElementById("image1").style.transform="translateX(0px)"
    document.getElementById("image1").style.transform="rotate(360deg)"
    setTimeout(off,2000)
}
function off()
{
    document.getElementById("image1").src="image\\pic_bulboff.gif"
    // document.getElementById("image1").style.transform="translateX(200px)"
    document.getElementById("image1").style.transform="rotate(180deg)"
    setTimeout(on,2000)
}
function set1()
{
    document.getElementById("image1").src="image\\tarunSagarJi.jpg"
}

function reset()
{
    document.getElementById("image1").style.display="none"
}

function test()
{
    //x=document.getElementById("ii").innerHTML
    //x=document.getElementById("txt").value


    //alert(x);
}

function test2()
{
    document.getElementById("ii").style.backgroundColor="green"
    //x=document.getElementById("txt").value


    //alert(x);
}
function test3()
{
    document.getElementById("i").style.display="block"
    document.getElementById("ii").style.display="block"
    document.getElementById("iii").style.display="block"
    document.getElementById("iv").style.display="block"
   
}
function test4()
{
    document.getElementById("i").style.display="none"
    document.getElementById("ii").style.display="none"
    document.getElementById("iii").style.display="none"
    document.getElementById("iv").style.display="none"
  
}