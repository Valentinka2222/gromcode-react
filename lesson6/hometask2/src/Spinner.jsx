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

const Spinner = ({ size, hidden }) => {
  return (
    <span>
      <ClipLoader className="spinner" size={size} hidden={hidden} />
    </span>
  );
};
export default Spinner;
