import parseTime from "./parseTime";

function checkTimeLower(time: string, currentTime: Date): boolean {
  const parsedTime = parseTime(time, currentTime);
  return parsedTime <= currentTime;
}

export default checkTimeLower;
