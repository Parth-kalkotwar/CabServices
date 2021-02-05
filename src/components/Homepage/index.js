import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modal from '../Modal';
import Post from '../Post';
import './index.css'

class Homepage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { modalOpen:false };
    }

    toggle = () => {
        this.setState({
            ...this.state,
            modalOpen:!this.state.modalOpen
        })
    }

    render() {
        console.log(this.props.transfers)
        return (
            <div className="container">
                <div className="Appbar">
                    <h1 className="mainHeading">All Transfers</h1>
                    {this.state.modalOpen ? <Modal toggle={this.toggle} /> : <button onClick={this.toggle} className="createTransfer">Create Transfer</button>}
                </div>
                <div className="postList">
                    {this.props.transfers.length > 0 ? 
                        this.props.transfers.map((transfer,index) => {
                            return (
                                <Post toggle={this.toggle} transfer={transfer} id = {index} key={index} />
                            )
                        })
                        : 
                        <h1>There Are No Pending Transfers</h1>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transfers:state.transfers
    }
}

export default connect(mapStateToProps)(Homepage);