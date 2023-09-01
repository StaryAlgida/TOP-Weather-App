import parseTime from "./parseTime";

function checkEqulaTime(time: string, currentTime: Date): boolean {
  const parsedTime = parseTime(time, currentTime);
  return parsedTime.getHours() === currentTime.getHours();
}

export default checkEqulaTime;
