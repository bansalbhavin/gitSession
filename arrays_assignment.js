var grades = [94, 91, 89, 96];

var totalSubject = grades.length;
var totalGrades = 0;

grades.forEach(function(val){
    totalGrades += val;
})

var average = totalGrades / totalSubject;

console.log(average);


var i = 0;
var tempGrade = 0;
for(i = 0; i < grades.length; i++)
{
    tempGrade += grades[i];
}

var tempAverage = tempGrade / totalSubject;
console.log(tempAverage);