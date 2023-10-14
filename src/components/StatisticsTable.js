import React, { Component } from 'react';
import { calculateClassWiseFlavanoidsMean, calculateClassWiseFlavanoidsMedian, calculateClassWiseFlavanoidsMode } from './utillityMethods';

class FlavanoidsStatisticsTable extends Component {
  constructor(props) {
    super(props);

    // Calculate class-wise statistics
    this.classWiseMeans = calculateClassWiseFlavanoidsMean(this.props.data,this.props.classType);
    this.classWiseMedians = calculateClassWiseFlavanoidsMedian(this.props.data,this.props.classType);
    this.classWiseModes = calculateClassWiseFlavanoidsMode(this.props.data,this.props.classType);
  }

  // Function to calculate the class-wise mean of Flavanoids
  

  render() {
    const classNames = Object.keys(this.classWiseMeans);

    return (
      <table style={{border:'1px solid black'}}>
        <thead>
          <tr>
            <th>Measure</th>
            {classNames.map((className, index) => (
              <th key={index}>{this.props.classType} {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseMeans[className]?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseMedians[className]?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {classNames.map((className, index) => (
              <td key={index}>{this.classWiseModes[className]?.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default FlavanoidsStatisticsTable;
