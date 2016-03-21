import React from 'react';

export default class HomePageRenderer extends React.Component {
  static propTypes = {
  }
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-4'>
          left
        </div>
        <div className='col-xs-8'>
          right
        </div>
      </div>
    );
  };
};
