//This is a way to use a function for testing in the console
function greeting(){
    //execute a statement
    console.log('Hello my name is Tom');
}

//Prompt the user to input his/her name
//Text Fields on the user screen <--

function greet(firstName,lastName){
    //execute a statement
    return firstName + " " + lastName;
}

var labelDisplay = greet(firstName, lastName);

//Function around math
function doSomeTypeOfMath(firstGrade, secondGrade){
    //Do some type of math
    return firstGrade + secondGrade;
}

//Function to get the average grade based on the two grades
function doSomeTypeOfMath(firstGrade, secondGrade){
    //Do some type of math
    // Add the two together
    // Divide the total / 2
    return (firstGrade + secondGrade) / 2;

}