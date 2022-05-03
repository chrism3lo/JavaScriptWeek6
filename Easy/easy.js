// function run(x){
//     return `Today's exercise: ${x}`;
// }

// console.log(run('Running'))

// function swim(x){
//     return `Today's exercise: ${x}`;
// }

// console.log(swim('Swimming'))


function exercise(x) {
    function exercising() {
    return `Today's exercise : ${x}`
    }
    return exercising;
    }

    var run = exercise('running');
    console.log(run());
    var swim = exercise('swimming');
    console.log(swim()); 
