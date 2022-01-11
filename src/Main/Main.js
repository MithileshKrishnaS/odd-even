import React from 'react'

var odd=false;
var number;
var numlist=[];
function generate()
{
    // document.getElementById('hello').innerHTML="button clicked";
    var numb=document.getElementById('no').value;
    for(let i=0;i<numb;i++)
    {
        var division=document.createElement('div');
        division.setAttribute("class", "Div1");
        var num=document.createElement('p');
        number=Math.floor((Math.random() * 10) + 1);
        numlist.push(number);
        num.innerHTML=number;
        division.appendChild(num);
        document.getElementById('hello').appendChild(division)
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
}

function oddfind()
{
    var x = document.getElementById("filter");
        if (x.style.display === "none") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    for(let i=0;i<numlist.length;i++)
    {
        
        if(numlist[i]%2!==0)
        {
            console.log('odd')
            var division=document.createElement('div');
            division.setAttribute("class", "Div1");
            var num=document.createElement('p');
            num.innerHTML=numlist[i];
            division.appendChild(num);
            document.getElementById('oddnum').appendChild(division);
        }
    }
}

function evenfind()
{
    var x = document.getElementById("filter");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    for(let i=0;i<numlist.length;i++)
    {
        
        if(numlist[i]%2==0)
        {
            console.log('odd')
            var division=document.createElement('div');
            division.setAttribute("class", "Div1");
            var num=document.createElement('p');
            num.innerHTML=numlist[i];
            division.appendChild(num);
            document.getElementById('oddnum').appendChild(division);
        }
    }
}

const Main = () => {
    return (
        <div>
            <input type="text" placeholder="Enter the number of inputs" id="no"></input><br></br><br></br>
            <button onClick={generate}>Generate Boxes</button><br></br>
            <div id="hello" className="hello"></div>
            <div className="oddeven" id="myDIV" >    
                <button onClick={oddfind}>odd</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={evenfind}>even</button>
            </div>
            <div className="filter" id="filter">
                <p>Filtered Array</p>
                <div id="oddnum" className="oddnum"></div>
            </div>
        </div>
    )
}

export default Main
