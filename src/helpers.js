  const rndArr = (arr) => {
    return Array.isArray(arr) && arr[Math.floor(Math.random() * arr.length)]
};
  export const getObjVal = (chosenId, layers, chosenFilter) => {
      const ObjStl = layers.filter(layer => layer.id === chosenId)[0] && (layers.filter(layer => layer.id === chosenId)[0]).stl;
      const theVal = ObjStl && ObjStl[chosenFilter];
      return theVal;
  };

  export const getStlObj = (chosenId, layers, chosenFilter) => {
      const ObjStl = layers.filter(layer => layer.id === chosenId)[0] && (layers.filter(layer => layer.id === chosenId)[0]).stl;
      return ObjStl;
  };

  export const immutablySwapItems = (items, firstIndex, secondIndex) => {
      const results= items.slice();
      const firstItem = items[firstIndex];
      results[firstIndex] = items[secondIndex];
      results[secondIndex] = firstItem;
      return results;
  };
export default rndArr;