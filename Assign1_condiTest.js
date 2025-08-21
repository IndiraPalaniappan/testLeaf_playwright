function launchBrowser(browser)
{
    if(browser="chrome")
    {
console.log("Launching chrome")
    }
else
{
    console.log("other browser")
}
}
function runTests(testType)
{
switch(testType)
{
    case "sanity":
    console.log("sanity Test")
    break;

    case "regression":
    console.log("sanity Test")
    break;

    default :
    console.log("smoke Test")
    break;

}
}
launchBrowser("chrome")
runTests("sanity")
runTests("regression")
runTests("other")
