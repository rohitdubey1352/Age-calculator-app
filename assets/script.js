

function renderInput() {
    const inputDays = parseInt(document.getElementById("Days").value);
    const inputMonths = parseInt(document.getElementById("Months").value);
    const inputYears = parseInt(document.getElementById("Years").value);

    const currentDate = new Date();
    // document.write(currentDate);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let years = currentYear - inputYears;
    let months = currentMonth - inputMonths;
    let days = currentDate.getDate() - inputDays;

    if (days < 0) {
        months -= 1;
        days += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById("Result_year").innerHTML = years;
    document.getElementById("Result_month").innerHTML = months;
    document.getElementById("Result_day").innerHTML = days;
}
