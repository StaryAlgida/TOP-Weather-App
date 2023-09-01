function getCurrentDate(): Date {
  const currentTime = new Date();
  currentTime.setMinutes(0);
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);
  return currentTime;
}

export default getCurrentDate;
