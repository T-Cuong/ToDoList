import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from 'react-router-dom';//withRouter ho tro lay cac tham so tren duong link url ta boc no ngoai ListUser export default withRouter(ListUser);

class ListUser extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {//componentDidMount la livecircle cua react dung async await vi hinh dong lay  data ton nhieu thoi gian (bat dong bo)
        let res = await axios.get('https://reqres.in/api/users?page=1');//giai thich duong link trong gg doc
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []//neu co cac tham so res, res.data, res.data.data thi set listUsers = res.data.data neu ko co thi bang rong giai thich res.data.data trong gg doc
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {//han che toi da viet logic vao ham render , chung ta xu ly phia tren va dung render de hien thi du lieu , thu tu chay dau tien no chay vao ham render goi la render lan mot sau do chay vao componentDidMount
        let { listUsers } = this.state;//lay list user trong state cua react
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&//check xem listUser co ton tai hay ko va check xem no co data hay ko
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}{/**de hien thi id , ten, index+1 vi ban dau index = 0 */}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default withRouter(ListUser);
