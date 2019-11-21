import React, { Component } from 'react'
import './StickyHeader.css'
class StickyHeaderTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fixedHeaders : this.props.headers
        }
    }
    componentDidMount(){
        
    }
    addTd = (arr) =>{
        return arr.map((e,index) => (
            <td key={index}>{e}</td>
        ))
    }
    renderFloatingTd = (arr) =>{
        const sliceArr = arr.slice(0,this.state.fixedHeaders.length)
        return sliceArr.map((e,index) => (
            <td key={index}>{e}</td>
        ))
    }
    renderFloating = (arr) =>{
        return arr.map((e,index) => {
            return <tr key={index}>{this.renderFloatingTd(e)}</tr>
        })
    }
    render() {
        return (
            <>
                <div className="stickyHeader">
                    <table>
                        <thead>
                            <tr>
                                {this.addTd(this.state.fixedHeaders)}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="container">
                    <table className="scrollable">
                        <tbody>
                        {this.renderFloating(this.props.data)}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default StickyHeaderTable
