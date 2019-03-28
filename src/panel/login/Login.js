import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    ModalBody,
    ModalFooter,
    ToastContainer,
    toast,
    CardTitle
} from "mdbreact";

import { connect } from "react-redux";
import { fetchUser } from "../../actions";
import Request from "../../config/Request";
import "../../common/styles.css";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: ""
        };
    }
    login = () => {
        const { login, password } = this.state;

        if (login.length === 0 || password.length === 0) {
            toast.error(`Preencha todos campos corretamente!`);
            return null;
        }

        if (login === "admin@admin.com" && password === "4dm1n") {
            this.logIn({
                nome: "Admin",
                id: 0,
                cnpj: 0,
                login: "admin",
                isAdmin: true
            });
            return null;
        }

        try {
            Request({
                url: "/usuario/login",
                method: "POST",
                data: {
                    login: login,
                    senha: password
                }
            })
                .then(response => {
                    console.log(response);
                    if (response.status === true) {
                        this.logIn({
                            nome: response.user.nome,
                            sobrenome: response.user.sobrenome,
                            id: response.user.id,
                            cpf: response.user.cpf,
                            login: response.user.login,
                            is_admin: response.user.is_admin,
                            telefone: response.user.telefone
                        });
                    } else {
                        toast.error("Dados incorretos. Tente novamente");
                    }
                })
                .catch(response => {
                    console.log(response);
                    toast.error(
                        "Não foi possível efetuar o seu login, tente novamente"
                    );
                });
        } catch (e) {
            console.log(e);
        }
    };
    logIn = user => {
        this.props.fetchUser(user);
        this.props.history.push("/welcome");
    };
    onChangePassword = event => this.setState({ password: event.target.value });

    onChangeEmail = event => this.setState({ login: event.target.value });
    render() {
        const { login, password } = this.state;

        return (
            <Container>
                <Row style={{ marginTop: 100 }}>
                    <Col md="6" className="offset-md-3">
                        <div className="text-center login_reader">
                            <h4 className="title">Login</h4>
                        </div>
                        <ModalBody
                            style={{
                                backgroundColor: "#D5D5D5",
                                borderTopRightRadius: ".3rem",
                                borderTopLeftRadius: ".3rem"
                            }}
                        >
                            <label className="form__label">Login</label>
                            <input
                                type="text"
                                name="login"
                                className="form-control form__input"
                                value={login}
                                onChange={this.onChangeEmail}
                            />
                            <label className="form__label">Senha</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control form__input"
                                value={password}
                                onChange={this.onChangePassword}
                            />
                        </ModalBody>
                        <ModalFooter
                            style={{
                                backgroundColor: "#D5D5D5",
                                borderTopRightRadius: ".3rem",
                                borderTopLeftRadius: ".3rem",
                                //position: "relative",
                                marginTop: -5
                            }}
                        >
                            <Button
                                className="form__submit btn-block"
                                //BackGroundcolor="#660099"
                                color="secundary"
                                style={{
                                    //marginLeft: 383,
                                    //marginTop: 20,
                                    width: 120,
                                    height: 40,
                                    position: "relative",
                                    float: "right"
                                }}
                                onClick={this.login}
                            >
                                Entrar
                            </Button>
                        </ModalFooter>
                        <CardTitle
                            className="title"
                            style={{ textAlign: "center" }}
                        >
                            <span
                                style={{ fontWeight: "bold" }}
                                className="form__label_login "
                            >
                                Exclusivo para Produtos não regulados.
                            </span>
                        </CardTitle>
                    </Col>
                </Row>
                <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
            </Container>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user.user
    };
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(Login);

// login = () => {
//     const { login, password } = this.state;
//
//     if (login.length === 0 || password.length === 0) {
//         toast.error("Preencha todos campos corretamente!");
//         return null;
//     }
//
//     if (login === "admin@admin.com" && password === "4dm1n") {
//         this.logIn({
//             nome: "Admin",
//             id: 0,
//             cnpj: 0,
//             login: "admin",
//             isAdmin: true
//         });
//         return null;
//     }
// };
// componentDidMount() {
//     if (
//         typeof this.props.user.id !== "undefined" &&
//         this.props.user.id !== null
//     )
//         this.props.history.push("/welcome");
// }
//
// logIn = () => {
//     const { history } = this.props;
//
//     history.push("/welcome");
// };
//
// onChangePassword = event => this.setState({ password: event.target.value });
//
// onChangeEmail = event => this.setState({ login: event.target.value });
//
// render() {
//     const { login, password } = this.state;
//
//     return (
//         <Container>
//             <Row style={{ marginTop: 100 }}>
//                 <Col md="6" className="offset-md-3">
//                     <div className="text-center login_reader">
//                         <h4 className="title">Login</h4>
//                     </div>
//                     <ModalBody
//                         style={{
//                             backgroundColor: "#D5D5D5",
//                             borderTopRightRadius: ".3rem",
//                             borderTopLeftRadius: ".3rem"
//                         }}
//                     >
//                         <label className="form__label">Login</label>
//                         <input
//                             type="text"
//                             name="login"
//                             className="form-control form__input"
//                             value={login}
//                             onChange={this.onChangeEmail}
//                         />
//                         <label className="form__label">Senha</label>
//                         <input
//                             type="password"
//                             name="password"
//                             className="form-control form__input"
//                             value={password}
//                             onChange={this.onChangePassword}
//                         />
//                     </ModalBody>
//                     <ModalFooter
//                         style={{
//                             backgroundColor: "#D5D5D5",
//                             borderTopRightRadius: ".3rem",
//                             borderTopLeftRadius: ".3rem",
//                             //position: "relative",
//                             marginTop: -5
//                         }}
//                     >
//                         <Button
//                             className="form__submit btn btn-block"
//                             //BackGroundcolor="#B6681F !important"
//                             color={"#B6681F"}
//                             style={{
//                                 //marginLeft: 383,
//                                 //marginTop: 20,
//                                 width: 120,
//                                 height: 40,
//
//                                 position: "relative",
//                                 float: "right"
//                             }}
//                             onClick={this.login}
//                         >
//                             Entrar
//                         </Button>
//                     </ModalFooter>
//                     <CardTitle
//                         className="title"
//                         style={{ textAlign: "center" }}
//                     >
//                         <span
//                             style={{ fontWeight: "bold" }}
//                             className="form__label_login "
//                         >
//                             Exclusivo para Produtos solidários.
//                         </span>
//                     </CardTitle>
//                 </Col>
//             </Row>
//             <ToastContainer
//                 hideProgressBar={true}
//                 newestOnTop={true}
//                 autoClose={5000}
//             />
//         </Container>
//     );
// }
//} //
////
// //function mapStateToProps(state, props) {
// //   return {
// //       user: state.user.user
// //   };
// //}
////
// //export default connect(
// //   mapStateToProps,
// //   { fetchUser }
// //)(Login);
//exp//ort default Login;
//
