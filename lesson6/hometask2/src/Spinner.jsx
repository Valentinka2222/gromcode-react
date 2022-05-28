import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

// class Spinner extends Commponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       spinner: true,
//     };
//     this.setState({
//       spinner: false,
//     });
//   }
//   render() {
//     return (
//       <span className="spinner">
//         <Loader width={size + 'px'} heigth={size + 'px'} />
//       </span>
//     );
//   }
// }

const Spinner = ({ size }) => {
  return (
    <span
      className="spinner" style={{width:size,height:size}} >
</span>
  );
};
export default Spinner;
