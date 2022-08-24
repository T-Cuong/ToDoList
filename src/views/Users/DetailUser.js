import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {//componentDidMount la mot ha trong live circle cua react (vong doi cua react) sau khi chay vao ham render no se chay vao didmount 
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}//giai thich trong gg doc res la response o backend
            })
        }

    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;//check xem bien user  co rong hayy ko 

        return (
            <>
                
                {isEmptyObj === false &&
                    <>
                    <div>hello world from detail user with id: {this.props.match.params.id}</div>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);
