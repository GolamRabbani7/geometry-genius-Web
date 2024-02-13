function reactangleCalculate(){
    const reactWigth=document.getElementById('width').value;
    const wigth=parseFloat(reactWigth);
    
    const reactHeight=document.getElementById('length').value;
    const height=parseFloat(reactHeight);

    const area=wigth*height;

    const areaDisply=document.getElementById('rectangle-disply');
    areaDisply.innerText=area

}