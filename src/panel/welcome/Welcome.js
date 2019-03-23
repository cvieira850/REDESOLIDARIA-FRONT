import React, { Component } from "react";
import { Card, CardTitle, CardBody, ToastContainer, toast } from "mdbreact";
//import { connect } from "react-redux";
import { fetchWelcomeAlert } from "../../actions";
//import { capitalize } from "../../common/Helpers";
import "../../common/styles.css";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //if (
        //    typeof this.props.user.id == "undefined" ||
        //    this.props.user.id == null
        //) {
        //    this.props.history.push("/");
        //} else {
        //    if (!this.props.welcomeAlert) {
        //        toast.info(
        //            "Seja-bem vindo, " // + capitalize(this.props.user.nome)
        //        );
        //        this.props.fetchWelcomeAlert(true);
        //    }
        //}
        toast.info(
            "Seja-bem vindo, " // + capitalize(this.props.user.nome)
        );
    }

    render() {
        return (
            <div>
                <Card
                    className="card-body"
                    style={{
                        margin: 20,
                        padding: "1.7rem",
                        border: "2px solid #eaeaea"
                    }}
                    border="1"
                >
                    <CardTitle className="title" style={{ margin: 0 }}>
                        Bem-vindo ao Portal Rede Solidária :
                    </CardTitle>
                    <CardBody style={{ paddingLeft: 0 }}>
                        <h5>
                            Navegue nos menus habilitados para a solicitação de
                            de produtos e outras funcionalidades.
                        </h5>
                    </CardBody>
                </Card>
                <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
            </div>
        );
    }
}

//function mapStateToProps(state, props) {
//    return {
//        user: state.user.user,
//        welcomeAlert: state.user.welcomeAlert
//    }
//}
//
//export default connect(mapStateToProps, { fetchWelcomeAlert })(Welcome);
export default Welcome;
