/**
 * Gets duration in seconds.
 * @param start time value in milliseconds 
 * @param end time value in milliseconds
 * @returns elapsed time in seconds 
 */

function getDuration (start: number, end: number) {
  return Math.floor((end - start) / 1000);
};


export default getDuration;