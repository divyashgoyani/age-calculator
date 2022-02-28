const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){

    let today = new Date();
    let inputDate = new Date (document.getElementById("date-input").value);    
    let birthHour, birthDate, birthMonth, birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();
    
    
    leapChecker(currentYear);


    if(birthDetails.year >  currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear))
    {
        document.getElementById("Wrong").textContent = "*Please enter a valid date.";
        // alert("Not Born Yet");// Change
        displayResult("-", "-", "-", "-");
        return;
    }

    // birthYear = currentYear - birthDetails.year - 1;
    if(currentMonth < birthDetails.month && currentYear > birthDetails.year){
        birthYear = currentYear - birthDetails.year-1;
    }
    else{
        birthYear = currentYear - birthDetails.year;
    }
    

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let Days = months[currentMonth - 2];
        birthDate = Days + currentDate - birthDetails.date;
        if(birthMonth < 0)
        {
            birthMonth = 11;
            birthYear--;
        }
    }

    birthHour = ((birthYear * 365) +(birthMonth * 31))* 24;

    console.log(birthYear, birthMonth, birthDate, birthHour);

    displayResult(birthHour, birthDate, birthMonth, birthYear);
}

function displayResult(bHour, bDate, bMonth, bYear)
{
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
    document.getElementById("hours").textContent = bHour;
}

function reset()
{
    document.getElementById("Wrong").textContent = "";
    displayResult("-", "-", "-", "-");
    return;
}

function leapChecker (year)
{
    if(year%4 == 0 || (year%100 == 0 && year%400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}