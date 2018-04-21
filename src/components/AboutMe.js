import React, { Component } from 'react';
import position_data from '../data/employment';

export default class AboutMe extends Component{

  constructor(props){
    super(props);

    this.state = {
      data_index: 0,
      modal_open: false
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  renderPosition(){
    const data = position_data[this.state.data_index];
    let responsibilityArr = [];
    for( const [ index, responsibility] of data.responsibilities.entries() ){
      responsibilityArr.push(
          <div
            className="description_entry"
            key={ index }
          >
            <div className="title">
              { responsibility.title }
            </div>
            <div className="description">
              { responsibility.description }
            </div>
          </div>
      )
    }
    return responsibilityArr;
  }

  clickHandler(index_offset){
    const { data_index } = this.state;
    const data_length = position_data.length;
    let nextIndex = 0;
    if(data_index === 0 && index_offset < 0){
      nextIndex = data_length - 1;
    }else if(data_index === (data_length - 1) && index_offset > 0){
      nextIndex = 0
    }else{
      nextIndex = data_index + index_offset;
    }
    this.setState({
      data_index: nextIndex
    });
  }

  onCloseModal = () => {
    this.setState({ modal_open: false });
  };

  render(){
    const data = position_data[this.state.data_index];
    return (
      <section className="about_me">
        <div className="icon_ctn" onClick={ () => this.clickHandler(-1)}>
          <i className="fas fa-arrow-left fa-2x"/>
        </div>
        <div className="container">
          <div className="title_ctn">
            <span className="title">
              { data.title } - { data.company }
            </span>
            <span className="duration">
              { data.duration }
            </span>
          </div>
          <div className="about_me_description_ctn">
            { this.renderPosition() }
          </div>
        </div>
        <div className="icon_ctn" onClick={() => this.clickHandler(1)}>
          <i className="fas fa-arrow-right fa-2x"/>
        </div>
      </section>
    )
  }
}
