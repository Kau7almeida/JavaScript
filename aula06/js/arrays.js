function array1(){
    let num = [10,7,17,11,77]
    // exibir a quantidade de elementos de um array
    console.log(num.length)
    // exibir o primeiro elemento do array
    console.log(num[0])
}

function array2(){
    let num = [10,7,17,11,77]
    for(let i = 0; i <= num.length-1; i++){
        if(num[i] % 2==0){
            console.log(num[i]);
        }
    }
}

function array3(){
    let num = [10,7,17,11,77,88,56,22,24,18,16,33,777,58]
    let m = num[0];
    for(let i = 1 ; i < num.length ; i++){
        if( num[i] > m){
            m = num[i];
        }
    }
    console.log(m);
}

function array4(){
    let n1 = [1,6,17,2,0,7];
    let n2 =[65,0,7,20,49,1];

    for(let p = 0 ; p < n1.length ; p++){
        for(let s = 0 ; s < n2.length ; s++){
            if(n1[p]==n2[s]){
                console.log(n1[p]);
            }
        }
    }

}

function array5(array){
    // vamos realizar a soma dos valores do array
    let soma = 0;
    for(let i = 0 ; i < array.length ; i++){
        soma += array[i];
    }

    return soma;
}

document.body.onload = function(){
    let n = [4,5,7,1];
    let rs = array5(n);
    alert(rs);
    console.log(rs);
    window.document.title = rs
}