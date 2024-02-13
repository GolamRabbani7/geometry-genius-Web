
// Tringle claculet
function tringleCalculate() {
    // baseCalculet
    const baseValue = document.getElementById('base').value;
    //convart baseValue from string to number
    const base = parseFloat(baseValue);

    // heightCalculet
    const heightValue = document.getElementById('height').value;
    //convart heightValue from string to number
    const height = parseFloat(heightValue);


    // area claculet
    const area = 0.5 * base * height;

    // area transform disply
    const tringleAreaResult = document.getElementById('triangle-disply');
    tringleAreaResult.innerText = area;




}

