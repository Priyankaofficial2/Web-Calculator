
function display(x){
    document.getElementById('calc').value += x
    return x
}

function clearScreen(){
    document.getElementById('calc').value = ''
}

function solve(){
    let x = document.getElementById('calc').value
    try{
        eval(x);
        let y = eval(x);
        document.getElementById('calc').value = y
        return y
    }catch{
        y = alert('ERROR');
        document.getElementById('calc').value = ''
        return y
    }
}
