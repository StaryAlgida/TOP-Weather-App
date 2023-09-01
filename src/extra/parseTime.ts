function parseTime(time: string, currentTime: Date): Date {
  let [inputHours, inputMinutes] = time.split(":").map(Number);
  const parsedTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    inputHours,
    inputMinutes
  );

  return parsedTime;
}

export default parseTime;
