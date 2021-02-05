import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './index.css'



class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open:false,carType:null,capacity:null };
  }
  toggle = () => {
    this.setState({
        ...this.state,
        open:!this.state.open
    })
  }

  handleSelect = (item) => {
    this.setState({
      ...this.state,
      open:!this.state.open,
      carType:item.type,
      capacity:item.capacity
    })
    this.props.optionSelect(item)
  }

  render() {
    const items = [
      {type:"Standard", capacity:"2"},
      {type:"Premium", capacity:"4"},
      {type:"Luxury", capacity:"4"},
      {type:"Van", capacity:"8"},
      {type:"Mini Bus", capacity:"16"},
    ]
    const selecComp = (
                  <div className="item">
                      <div className="item-left">
                          <DriveEtaIcon />
                          <div className="item-details">{this.state.carType}</div>
                      </div>
                      <div className="right">
                          <PeopleIcon />
                          <div className="item-details">Upto {this.state.capacity} persons</div>
                      </div>
                  </div>
    )
    // console.log(this.state)
    return (
      <div className="custom-select-wrapper">
        <div className="custom-select">
            <button className="custom-select__trigger " onClick={this.toggle}>
              <span className="custom-select-header">{this.state.cartype !=="" && this.state.capacity ? selecComp : 'Select Vehicle Type'}</span>
              {/* <div className="arrow"></div> */}
              <ExpandLessIcon />
            </button>
            {this.state.open && (
                    <div className="custom-options">
                        {items.map(item => (
                            <button className="custom-option" onClick={() => this.handleSelect(item)}>
                              <div className="item">
                                  <div className="item-left">
                                      <DriveEtaIcon />
                                      <div className="item-details">{item.type}</div>
                                  </div>
                                  <div className="right">
                                      <PeopleIcon />
                                      <div className="item-details">Upto {item.capacity} persons</div>
                                  </div>
                              </div>
                            </button>
                        ))}
                    </div>
            )}
      </div>
    </div>
    );
  }
}

export default Dropdown;