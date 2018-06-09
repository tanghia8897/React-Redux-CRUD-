import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
        }
    }
    onChange = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    onClick = ()=>{
        this.props.onClickSearch(this.state.keyword)
    }
    
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input name="keyword" onChange={this.onChange} type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.onClick}>
                                <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;