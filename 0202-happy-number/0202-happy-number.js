/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let set = new Set();
    
    //get next number
    const getNext = num =>{
        let res = [], op =0;
        while(num!==0){
            let temp = num%10;
            res.push(temp);
            num = (num-temp)/10;
        }
        
        for(let no of res){
            op+= no*no;
        }
        
        return op;
    }
    
    
    while(n !== 1 && !set.has(n)){
        //add number to set. exit while loop if number exists in set to avoid infinite loop
        set.add(n);
        n = getNext(n);
    }
    
    return n===1
//     let hnum = 0
    
//     function square(n){
//         n = parseInt(n)
//        return  Math.pow(n, 2)
//     }
    
//     function sumofsquares(n){
//         let splt = n.toString().split('')
//         let tot = 0
//         console.log(splt)
//         for(i in splt){
//            tot += square(splt[i])
//         }
//         return tot
//     }
    
//     let flag = true
    
//     while(flag){
        
//       hnum =  sumofsquares(n)
//       n = hnum
//         if(hnum == 1){
//             return true
//         }
//       console.log(hnum)
        
//     }
//     return false
    
};