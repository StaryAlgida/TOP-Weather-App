import parseTime from "./parseTime";

function checkTime(time: string, currentTime: Date): boolean {
  const parsedTime = parseTime(time, currentTime);

  return parsedTime >= currentTime;
}

export default checkTime;
