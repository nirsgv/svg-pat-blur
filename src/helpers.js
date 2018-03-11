  const rndArr = (arr) => {
    return Array.isArray(arr) && arr[Math.floor(Math.random() * arr.length)]
};
export default rndArr;