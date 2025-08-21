function grade(score)
{
switch (score)
{
case "90":
console.log("A+")
break;

case "80":
console.log("B")
break;

case "70":
console.log("c")
break;

default:
    console.log("average")
    break;
}
}

let mark="80"
grade(mark)