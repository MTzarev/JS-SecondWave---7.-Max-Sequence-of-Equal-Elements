function maxSequenceOfEqualElements(arr) {
    let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let curSeq = [num];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (num === nextNum) {
                curSeq.push(nextNum);
            } else {
                break;
            }
        }
        if (curSeq.length > sequence.length) {
            sequence = curSeq;
        }
    }
    console.log(sequence.join(` `));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
