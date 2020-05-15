const monthandDayFormatter = function (string) {
  return Number(string);
};

const dateFormatter = function (input) {
  let months = [
    "Empty",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedMonth = monthandDayFormatter(input.slice(5, 7));
  const formattedDay = monthandDayFormatter(input.slice(8, 10));
  const selectedMonth = months[formattedMonth];
  const selectedDay = formattedDay;
  const selectedYear = input.slice(0, 4);
  const finalDate = `${selectedMonth} ${selectedDay}, ${selectedYear}`;
  return finalDate;
};

export default dateFormatter;
