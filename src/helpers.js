  const rndArr = (arr) => {
    return Array.isArray(arr) && arr[Math.floor(Math.random() * arr.length)]
};
  export const getObjVal = (chosenId, layers, chosenFilter) => {
      const ObjStl = (layers.filter(layer => layer.id === chosenId)[0]).stl;
      const theVal = ObjStl[chosenFilter];
      return theVal;
  };

export default rndArr;