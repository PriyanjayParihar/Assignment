import React, { Component } from 'react';

class GammaStatisticsTable extends Component {
  constructor(props) {
    super(props);

    // Calculate Gamma for each data point and group by clss
    this.dataWithGamma = this.calculateGammaForData(this.props.data);
    this.classWiseStatistics = this.calculateClassWiseStatistics(this.dataWithGamma);
  }

  calculateGammaForData(data) {
    return data.map(item => {
      const { Ash, Hue, Magnesium, Alcohol } = item;
      const gamma = (Ash * Hue) / Magnesium;
      return { ...item, Gamma: gamma };
    });
  }

  calculateClassWiseStatistics(data) {
    const classWiseData = {};
    
    for (const item of data) {
      const alcoholClass = item.Alcohol;
      
      if (!classWiseData[alcoholClass]) {
        classWiseData[alcoholClass] = [];
      }

      classWiseData[alcoholClass].push(item.Gamma);
    }

    const classWiseMeans = {};
    const classWiseMedians = {};
    const classWiseModes = {};

    for (const [alcoholClass, gammas] of Object.entries(classWiseData)) {
      gammas.sort((a, b) => a - b);

      // Calculate mean
      const mean = gammas.reduce((acc, value) => acc + value, 0) / gammas.length;
      classWiseMeans[alcoholClass] = mean.toFixed(3);

      // Calculate median
      const middle = Math.floor(gammas.length / 2);
      if (gammas.length % 2 === 0) {
        const median = ((gammas[middle - 1] + gammas[middle]) / 2).toFixed(3);
        classWiseMedians[alcoholClass] = median;
      } else {
        classWiseMedians[alcoholClass] = gammas[middle].toFixed(3);
      }

      // Calculate mode
      const countMap = {};
      let maxCount = 0;
      let mode;
      
      for (const value of gammas) {
        countMap[value] = (countMap[value] || 0) + 1;
        if (countMap[value] > maxCount) {
          maxCount = countMap[value];
          mode = value;
        }
      }

      classWiseModes[alcoholClass] = mode.toFixed(3);
    }

    return { classWiseMeans, classWiseMedians, classWiseModes };
  }

  render() {
    const classNames = Object.keys(this.classWiseStatistics.classWiseMeans);

    return (
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classNames.map((className, index) => (
              <th key={index}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseStatistics.classWiseMeans[className]}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseStatistics.classWiseMedians[className]}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseStatistics.classWiseModes[className]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default GammaStatisticsTable;
