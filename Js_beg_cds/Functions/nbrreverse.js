function reverseNumber(num) {
    var numStr = num.toString();
    var reversedStr = numStr.split('').reverse().join()
    var reversedNum = parseInt(reversedStr, 10);
    return reversedNum;
}


console.log(reverseNumber(12345)); 
