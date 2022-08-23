import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/logoChannel.jpg';
import { connect } from 'react-redux';//HOC

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo') ham nay giup chuyen trang ma ko can reload lai trang
        // }, 3000)
    }

    //HOC: higher order component chinh la withRouter khi boc withRouter vao home thi home nhan dc them prop tu react-router

    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log('>>> check props redux ', this.props.dataRedux)//this.props.dataRedux ko he truyen tu cha xuong ma truyen qua prop cua react thong qua redux
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                    Hello world from Homepage 
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>


                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users//lay users trong rootReducer.js
    }
}

const mapDispatchToProps = (dispatch) => {//redux cung cap mapDispatchToProps goi ten action cua react  
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),//payload chinh la dau vao cua deleteUserRedux, type chinh la action -> rootReducer.js
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),//tao user ko can truyen du lieu nen ko can payload
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));//connect giup react ket noi voi redux va chi bat tay trong component Home
