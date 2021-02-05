import React, { Component } from 'react'
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { connect } from 'react-redux';
import Modal from "../Modal";
import './index.css';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { open : false,edit:false, };
    }
    handleClick = () => {
        this.setState({
            ...this.state,
            open:!this.state.open
        })
    }

    deletePost = () => {
        this.props.deleteTransfer(this.props.transfer)
    }

    editPost = () => {
        // this.props.editTransfer(this.props.transfer)
        this.setState({
            ...this.state,
            edit:!this.state.edit
        })
    }

    toggle = () => {
        this.setState({
            ...this.state,
            edit:!this.state.edit
        })
    }

    render() {
        let date = new Date(this.props.transfer.date)
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if(this.state.edit) {
            return (<Modal toggle={this.toggle} post={this.props.transfer} />)
        }
        return (
            <div className="postMain">
                <div className="postDate">
                    <div className="date">
                        <div>
                            {date.getDate()} {months[date.getMonth()]}
                        </div>
                        <div>
                            {days[date.getDay()]}
                        </div>
                    </div>
                    <div className="day">Day {this.props.id+1}</div>
                </div>
                <div className="details">
                    <div className="toolbar">
                        <div className="left">
                            <DragIndicatorIcon style={{fontSize:'2rem', margin:'0px 4px'}} />
                            <TrainOutlinedIcon style={{fontSize:'3rem', margin:'0px 4px'}} />
                            <div className="postHeading">
                                Transfer Service
                            </div>
                        </div>
                        <div className="right">
                            <button className="editBtn" onClick={this.editPost}><EditIcon style={{color: 'rgb(143, 141, 141)', fontSize:'2rem', margin:'0px 6px'}} /></button>
                            <button className="deleteBtn" onClick={this.deletePost} ><DeleteIcon style={{color: 'rgb(143, 141, 141)', fontSize:'2rem', margin:'0px 6px'}} /></button>
                            <FileCopyIcon style={{color: 'rgb(143, 141, 141)', fontSize:'2rem', margin:'0px 6px'}} />
                            <button className="expandButton" style={{backgroundColor:'inherit', border:'none'}} onClick={this.handleClick}>
                                {this.state.open ? <ExpandLessIcon style={{color: 'rgb(143, 141, 141)', fontSize:'2rem', margin:'0px 32px'}} /> : <ExpandMoreIcon style={{color: 'rgb(143, 141, 141)', fontSize:'2rem', margin:'0px 32px'}} />}
                            </button>
                        </div>
                    </div>
                    {this.state.open ? 
                    <div className="gridContainer">
                                <div className="heading">
                                    PickUp Location
                                </div>
                                <div className="info">
                                    {this.props.transfer.pickupLocation}
                                </div>
                                <div className="heading">
                                    Service Type
                                </div>
                                <div className="info">
                                    Airport Transfer
                                </div>
                                <div className="heading">
                                    Drop Location
                                </div>
                                <div className="info">
                                    {this.props.transfer.dropLocation}
                                </div>
                                <div className="heading">
                                    Vehicle Types
                                </div>
                                <div className="info">
                                    {this.props.transfer.vehicleType} x {this.props.transfer.vehicleCount}
                                </div>
                                <div className="heading">
                                    City
                                </div>
                                <div className="info">
                                    {this.props.transfer.pickupLocation}
                                </div>
                                <div className="heading">
                                    Passenger Count
                                </div>
                                <div className="info">
                                    Adults: {this.props.transfer.adultCount}  Children : {this.props.transfer.chidlrenCount}
                                </div>
                                <div className="heading">
                                    Start Date Time
                                </div>
                                <div className="info">
                                    {this.props.transfer.date}  At {this.props.transfer.time}
                                </div>
                    </div>
                : null
                }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTransfer : (post) => { dispatch({type:'deleteTransfer',payload:post})},
        editTransfer : (post) => { dispatch({type:'editTransfer',payload:post})}
    }
}

export default connect(null,mapDispatchToProps)(Post);