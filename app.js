var minOperations = function(boxes) {
    const answer = new Array(boxes.length).fill(0);
    
    let moves = 0, count = 0;
    for(let i = 0; i < boxes.length; i++) {
        answer[i] += moves;
        count += +boxes[i];
        moves += count;
    }

    moves = 0, count = 0;
    for(let i = boxes.length - 1; i >= 0; i--) {
        answer[i] += moves;
        count += +boxes[i];
        moves += count;
    }
             
    return answer;
};