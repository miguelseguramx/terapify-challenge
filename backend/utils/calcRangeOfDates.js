// TODO: calcRangeOfDates with change of Year
// TODO: calcRangeOfDates with leap years
function calcRangeOfDates(){
  const lenghtOfMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]

  const today = new Date() 
  let actualDay = today.getDay()
  const todayDate = today.getDate()
  const actualMonth = today.getMonth()
  const actualYear = today.getFullYear()
  let startMonth = actualMonth
  let endMonth = actualMonth
  let startDay = todayDate - 7
  let endDay = todayDate + 7
  let actualMonthLenght = lenghtOfMonth[actualMonth]

  if(startDay < 0){
    startMonth = actualMonth - 1
    startDay = lenghtOfMonth[startMonth] - Math.abs(startDay)
  }

  while(actualDay > 0){
    startDay -= 1
    actualDay -= 1
  }
  actualDay = today.getDay()

  if(endDay > actualMonthLenght){
    endDay -= actualMonthLenght
    endMonth += 1
  }

  while(actualDay < 6){
    endDay += 1
    actualDay += 1
  }

  const formatTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  startMonth += 1
  endMonth += 1

  return {
    startDate: `${actualYear}-${formatTime(startMonth)}-${formatTime(startDay)}`,
    endDate: `${actualYear}-${formatTime(endMonth)}-${formatTime(endDay)}`
  }
}

module.exports = calcRangeOfDates