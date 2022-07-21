export function makeRandomNumber(prevNumber = 0) {
  let updateBy = Math.ceil(Math.random() * 10);
  // console.log(updateBy)
  if (Math.random() < 0.5) {
    return prevNumber + updateBy;
  } else {
    return prevNumber - updateBy;
  }
}
