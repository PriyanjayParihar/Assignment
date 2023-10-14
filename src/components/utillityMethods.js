
  // Function to calculate the class-wise mean of Flavanoids
  export const calculateClassWiseFlavanoidsMean=(data,classType)=> {
    const classWiseFlavanoids = {};
  
    for (const item of data) {
      const alcoholClass = item[classType];
  console.log(alcoholClass)
      if (!classWiseFlavanoids[alcoholClass]) {
        classWiseFlavanoids[alcoholClass] = [];
      }
  
      classWiseFlavanoids[alcoholClass].push(parseFloat(item["Flavanoids"]));
    }
  console.log(classWiseFlavanoids)
    const classMeans = {};
    for (const [alcoholClass, flavanoids] of Object.entries(classWiseFlavanoids)) {
      const sum = flavanoids.reduce((acc, value) => acc + value, 0);
      classMeans[alcoholClass] = sum / flavanoids.length;
    }
  
    return classMeans;
  }
  
  // Function to calculate the class-wise median of Flavanoids
  export const calculateClassWiseFlavanoidsMedian=(data,classType)=> {
    const classWiseFlavanoids = {};
  
    for (const item of data) {
      const alcoholClass = item[classType];
  
      if (!classWiseFlavanoids[alcoholClass]) {
        classWiseFlavanoids[alcoholClass] = [];
      }
  
      classWiseFlavanoids[alcoholClass].push(parseFloat(item["Flavanoids"]));
    }
  
    const classMedians = {};
    for (const [alcoholClass, flavanoids] of Object.entries(classWiseFlavanoids)) {
      flavanoids.sort((a, b) => a - b);
      const middle = Math.floor(flavanoids.length / 2);
      if (flavanoids.length % 2 === 0) {
        classMedians[alcoholClass] = (flavanoids[middle - 1] + flavanoids[middle]) / 2;
      } else {
        classMedians[alcoholClass] = flavanoids[middle];
      }
    }
  
    return classMedians;
  }
  
  // Function to calculate the class-wise mode of Flavanoids
  export const  calculateClassWiseFlavanoidsMode=(data,classType)=> {
    const classWiseFlavanoids = {};
  
    for (const item of data) {
      const alcoholClass = item[classType];
  
      if (!classWiseFlavanoids[alcoholClass]) {
        classWiseFlavanoids[alcoholClass] = [];
      }
  
      classWiseFlavanoids[alcoholClass].push(item["Flavanoids"]);
    }
  
    const classModes = {};
    for (const [alcoholClass, flavanoids] of Object.entries(classWiseFlavanoids)) {
      const countMap = {};
      let maxCount = 0;
      let mode;
  
      for (const value of flavanoids) {
        countMap[value] = (countMap[value] || 0) + 1;
        if (countMap[value] > maxCount) {
          maxCount = countMap[value];
          mode = value;
        }
      }
  
      classModes[alcoholClass] = mode;
    }
  
    return classModes;
  }
  

  