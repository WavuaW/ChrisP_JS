//instead of using chained else if statements you can use switch.

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = 'alpha';
            break; //if you don't use break it will skip over right to the next case.
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }

    return answer;
}

caseInSwitch(1);