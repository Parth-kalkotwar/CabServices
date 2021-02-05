import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dropdown from "../DropDown";
import './index.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {edit:false, firstName:"", lastName:"", vehicleType:"",vehicleCount:0, adultCount:0, chidlrenCount:0,baggageCount:0,pickupLocation:"",dropLocation:"",date:"",time:"" };
    }

    setData = async () => {
        if(this.props.post) {
            await this.setState({
                ...this.state,
                edit:true,
                firstName:this.props.post.firstName,
                lastName:this.props.post.lastName,
                vehicleType:this.props.post.vehicleType,
                vehicleCount:this.props.post.vehicleCount,
                adultCount:this.props.post.adultCount,
                chidlrenCount:this.props.post.chidlrenCount,
                baggageCount:this.props.post.baggageCount,
                pickupLocation:this.props.post.pickupLocation,
                dropLocation:this.props.post.dropLocation,
                date:this.props.post.date,
                time:this.props.post.time,
            })
        }
    }

    clearData = () => {
                this.setState({
                ...this.state,
                edit:false,
                firstName:"",
                lastName:"",
                vehicleType:"",
                vehicleCount:0,
                adultCount:0,
                chidlrenCount:0,
                baggageCount:0,
                pickupLocation:"",
                dropLocation:"",
                date:"",
                time:"",
            })
    }

    async componentDidMount() {
        await this.setData()
    }

    decVC = () => {
        this.setState({
            ...this.state,
            vehicleCount:Math.max(0,this.state.vehicleCount-1)
        })
    }
    decAC = () => {
        this.setState({
            ...this.state,
            adultCount:Math.max(0,this.state.adultCount-1)
        })
    }
    decBC = () => {
        this.setState({
            ...this.state,
            baggageCount:Math.max(0,this.state.baggageCount-1)
        })
    }
    decCC = () => {
        this.setState({
            ...this.state,
            chidlrenCount:Math.max(0,this.state.chidlrenCount-1)
        })
    }
    incVC = () => {
        this.setState({
            ...this.state,
            vehicleCount:Math.max(0,this.state.vehicleCount+1)
        })
    }
    incAC = () => {
        this.setState({
            ...this.state,
            adultCount:Math.max(0,this.state.adultCount+1)
        })
    }
    incBC = () => {
        this.setState({
            ...this.state,
            baggageCount:Math.max(0,this.state.baggageCount+1)
        })
    }
    incCC = () => {
        this.setState({
            ...this.state,
            chidlrenCount:Math.max(0,this.state.chidlrenCount+1)
        })
    }

    handleChange = (e) => {
        const ename = e.target.name
        this.setState({
            ...this.state,
            [ename]: e.target.value
        })
    }

    submitClick = async () => {
        if(this.state.edit) {
            await this.props.deleteTransfer(this.props.post)
        }
        await this.props.addTransfer(this.state)
        this.clearData()
        this.props.toggle()
    }

    optionSelect = (item) => {
        this.setState({
            ...this.state,
            vehicleType:item.type,
        })
    }

    render() {
        return (
            <div className="modalMain">
                <div className="modal-content">
                    <button onClick={this.props.toggle} className="close">&times;</button>
                    <div className="modalHeading">
                        Transfer Services
                    </div>
                    <div className="modalDetails">
                        <div className="first">
                            <div className="firstName">
                                <div className="question">
                                    First Name
                                    
                                </div>
                                <div className="answer">
                                    <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" />
                                </div>
                            </div>
                            <div className="lastName">
                                <div className="question">
                                    Last Name
                                </div>
                                <div className="answer">
                                    <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName"></input>
                                </div>
                            </div>
                        </div>
                        <div className="second">
                            <div className="question">
                                    Vehicle Type
                            </div>
                            <div className="dropD">
                                <Dropdown optionSelect = {this.optionSelect} />
                                <div className="modalButtons">
                                    <button onClick={this.decVC} className="btn-1">-</button>
                                    <div className="vehicleCount">{this.state.vehicleCount}</div>
                                    <button onClick={this.incVC}  className="btn-1">+</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="third">
                            <div className="question" style={{paddingRight:'20px'}}>
                                Passenger Count
                            </div>
                            <div className="pCount">
                                <div className="btn">
                                    <div className="question">
                                        Adults
                                    </div>
                                    <div className="modalButtons">
                                        <button onClick={this.decAC}  className="btn-1">-</button>
                                        <div className="adultCount">{this.state.adultCount}</div>
                                        <button onClick={this.incAC}  className="btn-1">+</button>
                                    </div>
                                </div>
                                <div className="btn">
                                    <div className="question">
                                        Children
                                    </div>
                                    <div className="modalButtons">
                                        <button onClick={this.decCC}  className="btn-1">-</button>
                                        <div className="childrenCount">{this.state.chidlrenCount}</div>
                                        <button onClick={this.incCC}  className="btn-1">+</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="third">
                                <div className="question">
                                    Baggage Count
                                </div>
                                <div className="modalButtons">
                                        <button onClick={this.decBC}  className="btn-1">-</button>
                                        <div className="bagageCount">{this.state.baggageCount}</div>
                                        <button onClick={this.incBC}  className="btn-1">+</button>
                                </div>
                        </div>
                        <div className="first">
                            <div className="firstName">
                                <div className="question">
                                    Pickup Location
                                </div>
                                <div className="answer">
                                    <input  onChange={this.handleChange}  value={this.state.pickupLocation} type="text" name="pickupLocation"></input>
                                </div>
                            </div>
                        </div>
                        <div className="first">
                            <div className="firstName">
                                <div className="question">
                                    Drop Location
                                </div>
                                <div className="answer">
                                    <input onChange={this.handleChange} value={this.state.dropLocation} type="text" name="dropLocation"></input>
                                </div>
                            </div>
                        </div>
                        <div className="dateTime">
                            <div className="modalDate">
                                <div className="question">
                                    Date
                                </div>
                                <div className="answer">
                                    <input onChange={this.handleChange} value={this.state.date} type="date" name="date"></input>
                                </div>
                            </div>
                            <div className="time">
                                <div className="question">
                                    Time
                                </div>
                                <div className="answer">
                                    <input onChange={this.handleChange} value={this.state.time} type="time" name="time"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="createButton">
                        <button onClick={this.submitClick} className="addPost">{!this.state.edit ? 'Create Transfer' : 'Save Changes'}</button>
                    </div>
                </div>
                
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTransfer : (post) => { dispatch({type:'addTransfer',payload:post})},
        deleteTransfer : (post) => { dispatch({type:'deleteTransfer',payload:post})},
    }
}

export default connect(null,mapDispatchToProps)(Modal);