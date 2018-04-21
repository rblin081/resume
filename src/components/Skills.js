import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import skills_data from '../data/skills';

export default class Skills extends Component{

  constructor(props){
    super(props);

    this.state = {
      data_index: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(index_offset){
    const { data_index } = this.state;
    const data_length = skills_data.length;
    let nextIndex = 0;
    if(data_index === 0 && index_offset < 0){
      nextIndex = data_length - 1;
    }else if(data_index === (data_length - 1) && index_offset > 0){
      nextIndex = 0
    }else{
      nextIndex = data_index + index_offset;
    }

    //Need to update data for chart instance 
    const { chartInstance } = this.refs.chart;
    chartInstance.data = skills_data[nextIndex].data;
    chartInstance.update();

    this.setState({
      data_index: nextIndex
    });
  }

  getChartData(){
    return skills_data[0].data;
  }

  render() {
     return (
       <section className="skills">
         <div className="icon_ctn" onClick={ () => this.clickHandler(-1)}>
           <i className="fas fa-arrow-left fa-2x"/>
         </div>
         <div className="container">
             <HorizontalBar
               data={ skills_data[this.state.data_index].data }
               width={ 100 }
               ref='chart'
               options={{
                 maintainAspectRatio: false,
                 legend: {
                      display: false
                  },
                  title: {
                      display: true,
                      text: skills_data[this.state.data_index].title,
                      fontSize: 24,
                      fontColor: 'black'
                  },
                 scales: {
                    xAxes: [{
                      ticks: {
                        stepSize: 10,
                        suggestedMin: 0,
                        suggestedMax: 100
                      }
                    }],
                  }
               }}
             />
         </div>
         <div className="icon_ctn" onClick={() => this.clickHandler(1)}>
           <i className="fas fa-arrow-right fa-2x"/>
         </div>
       </section>
     );
   }
}
