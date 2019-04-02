import React, { Component, Link } from "react";

import {
    Card,
    CardBody,
    CardTitle,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBContainer,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Progress
} from "mdbreact";
import Select from "react-select";
import "../../common/styles.css";
import { connect } from "react-redux";
import Imagem from "../../img/1.png";

const listInitial = [
    {
        Indice: 121123,
        Img: Imagem,
        Nome: "Abacate",
        PrecoString: "R$: 7,00 cada bdg 500g",
        PrecoSolidarioString: "R$: 5,00 cada bdg 500g",
        isSolidary: false,
        isComun: false,
        Preco: 5,
        PrecoSolidario: 7
    },
    {
        Indice: 121124,
        Img: Imagem,
        Nome: "Banana",
        PrecoString: "R$: 9,00 cada 500g",
        PrecoSolidarioString: "R$: 7,00 cada 500g",
        isSolidary: false,
        isComun: false,
        Preco: 7,
        PrecoSolidario: 9
    },
    {
        Indice: 121125,
        Img: Imagem,
        Nome: "Abacaxi",
        PrecoString: "R$: 14,00 cada 1 unidade",
        PrecoSolidarioString: "R$: 12,00 cada 1 unidade",
        isSolidary: false,
        isComun: false,
        Preco: 12,
        PrecoSolidario: 14
    },
    {
        Indice: 121126,
        Img: Imagem,
        Nome: "Uva Preta",
        PrecoString: "R$: 7,00 cada bdg 500g",
        PrecoSolidarioString: "R$: 5,00 cada bdg 500g",
        isSolidary: false,
        isComun: false,
        Preco: 5,
        PrecoSolidario: 7
    },
    {
        Indice: 121127,
        Img: Imagem,
        Nome: "Laranja Lima",
        PrecoString: "R$: 9,00 cada 500g",
        PrecoSolidarioString: "R$: 7,00 cada 500g",
        isSolidary: false,
        isComun: false,
        Preco: 7,
        PrecoSolidario: 9
    },
    {
        Indice: 121128,
        Img: Imagem,
        Nome: "Limão CravoSP",
        PrecoString: "R$: 14,00 cada 1 unidade",
        PrecoSolidarioString: "R$: 12,00 cada 1 unidade",
        isSolidary: false,
        isComun: false,
        Preco: 12,
        PrecoSolidario: 14
    },
    {
        Indice: 121129,
        Img: Imagem,
        Nome: "Maçã",
        PrecoString: "R$: 7,00 cada bdg 500g",
        PrecoSolidarioString: "R$: 5,00 cada bdg 500g",
        isSolidary: false,
        isComun: false,
        Preco: 5,
        PrecoSolidario: 7
    },
    {
        Indice: 121130,
        Img: Imagem,
        Nome: "Arroz",
        PrecoString: "R$: 9,00 cada 500g",
        PrecoSolidarioString: "R$: 7,00 cada 500g",
        isSolidary: false,
        isComun: false,
        Preco: 7,
        PrecoSolidario: 9
    },
    {
        Indice: 121131,
        Img: Imagem,
        Nome: "Pêssego",
        PrecoString: "R$: 14,00 cada 1 unidade",
        PrecoSolidarioString: "R$: 12,00 cada 1 unidade",
        isSolidary: false,
        isComun: false,
        Preco: 12,
        PrecoSolidario: 14
    }
];
const listQuantity = [
    { value: "0", label: "Nenhum" },
    { value: "1", label: "1 Unidadade" },
    { value: "2", label: "2 Unidades" },
    { value: "3", label: "3 Unidades" },
    { value: "4", label: "4 Unidades" },
    { value: "5", label: "5 Unidades" },
    { value: "6", label: "6 Unidades" },
    { value: "7", label: "7 Unidades" },
    { value: "8", label: "8 Unidades" },
    { value: "9", label: "9 Unidades" },
    { value: "10", label: "10 Unidades" },
    { value: "11", label: "11 Unidades" },
    { value: "12", label: "12 Unidades" },
    { value: "13", label: "13 Unidades" },
    { value: "14", label: "14 Unidades" },
    { value: "15", label: "15 Unidades" },
    { value: "16", label: "16 Unidades" },
    { value: "17", label: "17 Unidades" },
    { value: "18", label: "18 Unidades" },
    { value: "19", label: "19 Unidades" },
    { value: "20", label: "20 Unidades" }
];
const initialState = {
    list: listInitial,
    quantidade: {},
    modal: false,
    modalPedido: false,
    modalMarketSuccess: false,
    checkAgree: false,
    pedido: [],
    totalPedido: 0
};
class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: listInitial,
            quantidade: {},
            modal: false,
            modalPedido: false,
            modalMarketSuccess: false,
            checkAgree: false,
            pedido: [],
            totalPedido: 0,
            cpf: this.props.user.cpf,
            telefone: this.props.user.telefone,
            id: this.props.user.id,
            login: this.props.user.login,
            is_admin: this.props.user.is_admin,
            nome: this.props.user.nome
        };
    }
    changeButtonSolidario = (event, index) => {
        const { list } = this.state;
        let listChange = list;
        console.log(list[index]);

        listChange[index].isSolidary = true;
        listChange[index].isComun = false;

        this.setState({ list: listChange });
    };
    changeSolidary = (event, index) => {
        const { list } = this.state;
        let listChange = list;
        if (event.target.value === "Sim") {
            listChange[index].isSolidary = true;
            listChange[index].isComun = false;
            this.setState({ list: listChange });
        } else if (event.target.value === "Não") {
            listChange[index].isSolidary = false;
            listChange[index].isComun = true;
            this.setState({ list: listChange });
        } else {
            listChange[index].isSolidary = false;
            listChange[index].isComun = false;
            this.setState({ list: listChange });
        }
    };
    changeButtonComun = (event, index) => {
        const { list } = this.state;
        let listChange = list;
        console.log(list[index]);

        listChange[index].isSolidary = false;
        listChange[index].isComun = true;

        this.setState({ list: listChange });
    };
    setCheck = event => this.setState({ checkAgree: event.target.checked });
    submitHandler = event => {
        console.log(this.state);
        event.preventDefault();
        event.target.className += " was-validated";
        const { list } = this.state;
        let pedidoCreate = [];
        let pedidoCreateObj = {};
        let totalPedido2 = 0;
        for (var a of list) {
            if (a.isSolidary || a.isComun) {
                if (a.quantidade && a.quantidade !== "0") {
                    pedidoCreateObj = {
                        indice: a.Indice,
                        name: a.Nome,
                        preco: a.isSolidary ? a.PrecoSolidario : a.Preco,
                        is_solidary: a.isSolidary,
                        is_comun: a.isComun,
                        quantidade: a.quantidade,
                        valor_final_produto:
                            (a.isSolidary ? a.PrecoSolidario : a.Preco) *
                            a.quantidade
                    };
                    pedidoCreate = [...pedidoCreate, pedidoCreateObj];
                    totalPedido2 =
                        totalPedido2 +
                        (a.isSolidary ? a.PrecoSolidario : a.Preco) *
                            a.quantidade;
                }
            }
        }

        this.setState({
            modal: true,
            pedido: pedidoCreate,
            totalPedido: totalPedido2
        });
        this.callSendMarket();
        //this.getProtocol();
    };
    callSendMarket = result => {
        this.setState({
            modal: false,
            modalPedido: true,
            modalMarketSuccess: false
        });
    };
    endProcess = () => {
        this.setState({ modal: true });

        //Remote.post(
        //    "api/retiradas/create-excel-return-email",
        //    {
        //        array: array
        //    },
        //    response => {
        this.setState({
            modal: false,
            modalPedido: false,
            modalMarketSuccess: true
        });
        //}
        //);
    };
    resetFields = () => {
        this.setState({
            list: listInitial,
            quantidade: {},
            modal: false,
            modalPedido: false,
            modalMarketSuccess: false,
            checkAgree: false,
            pedido: []
        });
    };
    defaultPage = () => {
        this.resetFields();
    };

    changeQuantity = (v, index) => {
        const { list, totalPedido, quantidade } = this.state;
        //const { value } = event.target;
        let listChange = list;
        console.log(list[index]);
        listChange[index].quantidade = v.value;
        this.setState({ list: listChange });
    };
    toggle = () => {
        this.setState({ modalPedido: false });
    };
    toggleMarketFinish = () => {
        console.log("esse eh o this.props", this.props);

        //const { list, totalPedido } = this.state;
        //let pedidoCreate = [];
        //let pedidoCreateObj = {};
        //let totalPedido2 = 0;
        //for (var a of list) {
        //    if (a.isSolidary || a.isComun) {
        //        if (a.quantidade && a.quantidade !== "0") {
        //            pedidoCreateObj = {
        //                indice: a.Indice,
        //                name: a.Nome,
        //                preco: a.isSolidary ? a.PrecoSolidario : a.Preco,
        //                is_solidary: a.isSolidary,
        //                is_comun: a.isComun,
        //                quantidade: a.quantidade,
        //                valor_final_produto:
        //                    (a.isSolidary ? a.PrecoSolidario : a.Preco) *
        //                    a.quantidade,
        //                valor_final_pedido:
        //                    totalPedido +
        //                    (a.isSolidary ? a.PrecoSolidario : a.Preco) *
        //                        a.quantidade
        //            };
        //
        //            totalPedido2 =
        //                totalPedido2 +
        //                (a.isSolidary ? a.PrecoSolidario : a.Preco) *
        //                    a.quantidade;
        //
        //            pedidoCreate = [...pedidoCreate, pedidoCreateObj];
        //        }
        //    }
        //}

        // setTimeout(() => {
        this.setState({
            modalMarketSuccess: !this.state.modalMarketSuccess
        });
        //}, 1200);
    };
    render() {
        const {
            list,
            quantidade,
            modal,
            modalPedido,
            checkAgree,
            modalMarketSuccess
        } = this.state;
        return (
            <Card
                className="card-body"
                style={{ margin: 20, border: "2px solid #eaeaea" }}
                border="1"
            >
                <CardTitle className="title">Feira Orgânica</CardTitle>
                <CardBody>
                    <form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <MDBRow style={{ marginTop: 40 }}>
                            {console.log(this.state)}
                            {list.map((l, i) => (
                                <MDBCol sm="12" md="6" lg="3" key={l.Indice}>
                                    <MDBCard
                                        style={{
                                            height: "26rem",
                                            maxHeight: "100%",
                                            width: "90%",
                                            margin: "0px 6% 30px"
                                        }}
                                        className="text-center"
                                    >
                                        <MDBCardHeader
                                            style={{
                                                backgroundColor: "#7DB343"
                                            }}
                                        >
                                            <CardTitle
                                                style={{
                                                    color: "#ffffff",
                                                    fontWeight: "bold",
                                                    margin: 0
                                                }}
                                            >
                                                {l.Nome}
                                            </CardTitle>
                                        </MDBCardHeader>
                                        <MDBCardBody md="12">
                                            <img
                                                src={l.Img}
                                                alt={"teste"}
                                                style={{ width: "40%" }}
                                            />
                                            <MDBCol
                                                style={{ textAlign: "left" }}
                                            >
                                                <p>
                                                    <b>Comun: </b>{" "}
                                                    {l.PrecoString}
                                                </p>
                                            </MDBCol>

                                            <MDBCol
                                                style={{ textAlign: "left" }}
                                            >
                                                <p>
                                                    <b>Solidário: </b>{" "}
                                                    {l.PrecoSolidarioString}
                                                </p>
                                            </MDBCol>

                                            <select
                                                className="form__select browser-default custom-select select"
                                                onChange={event =>
                                                    this.changeSolidary(
                                                        event,
                                                        i
                                                    )
                                                }
                                                required
                                                placeholder="Solidário?"
                                            >
                                                <option value={false}>
                                                    Produto Solidário?
                                                </option>
                                                <option value={"Sim"}>
                                                    Sim
                                                </option>
                                                <option value={"Não"}>
                                                    Não
                                                </option>
                                            </select>
                                        </MDBCardBody>

                                        <MDBCardFooter>
                                            <MDBCol md="12">
                                                <label
                                                    className="form__label"
                                                    style={{
                                                        float: "left",
                                                        marginRight: "3%"
                                                    }}
                                                >
                                                    Qtd:{" "}
                                                </label>

                                                <Select
                                                    options={listQuantity}
                                                    onChange={v => {
                                                        this.changeQuantity(
                                                            v,
                                                            i
                                                        );
                                                    }}
                                                    styles={{
                                                        control: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,
                                                            "&:hover": {
                                                                borderColor:
                                                                    "#93b653"
                                                            }, // border style on hover
                                                            border:
                                                                "1px solid lightgray", // default border color
                                                            boxShadow: "none" // no box-shadow
                                                        })
                                                    }}
                                                    md="2"
                                                />
                                            </MDBCol>

                                            {/*<MDBCol
                                            md="6"
                                            style={{
                                                float: "left",
                                                marginTop: "-10%"
                                            }}
                                        >
                                            <label className="form__label required">
                                                <b>Comun </b>
                                            </label>
                                            <Button
                                                type="button"
                                                className="form__submit btn btn-block"
                                                onClick={event =>
                                                    this.changeButtonComun(
                                                        event,
                                                        i
                                                    )
                                                }
                                                color={"#544 !important"}
                                            >
                                                <span> {l.Preco}</span>
                                            </Button>
                                        </MDBCol>
                                        <MDBCol
                                            md="6"
                                            style={{
                                                float: "left",
                                                marginTop: "-10%",
                                                backgroundColor: l.isSolidary
                                                    ? "#7DB343"
                                                    : "#E53935"
                                            }}
                                        >
                                            <label className="form__label required">
                                                <b>Solidário</b>
                                            </label>
                                            <Button
                                                type="button"
                                                className="checkSolidario"
                                                aria-label="Close"
                                                onClick={event =>
                                                    this.changeButtonSolidario(
                                                        event,
                                                        i
                                                    )
                                                }
                                            >
                                                <span aria-hidden="true">
                                                    {l.PrecoSolidario}
                                                </span>
                                            </Button>
                                            <p>{l.PrecoSolidario}</p>
                                            </MDBCol>*/}
                                        </MDBCardFooter>
                                    </MDBCard>
                                </MDBCol>
                            ))}
                        </MDBRow>
                        <Button
                            className="form__submit btn btn-block"
                            color={"#B6681F "}
                            type="submit"
                            style={{
                                //marginLeft: 383,
                                //marginTop: 20,
                                width: 124,
                                height: 40,

                                position: "relative",
                                float: "right"
                            }}
                        >
                            Solicitar
                        </Button>
                    </form>
                </CardBody>
                <Container>
                    <Modal isOpen={modal}>
                        <ModalHeader>
                            Aguarde enquanto as informações são enviadas!
                        </ModalHeader>
                        <ModalBody>
                            <Progress value={100} color="warning" animated />
                        </ModalBody>
                    </Modal>
                </Container>
                <Container>
                    <Modal isOpen={modalPedido} fullHeight position="bottom">
                        <ModalHeader>
                            <MDBCol md="12">Atenção:</MDBCol>
                        </ModalHeader>
                        <ModalBody>
                            <MDBCol md="12">
                                <div className="d-inline-block">
                                    <h5 className="title">
                                        Ao prosseguir será gerado um pedido dos
                                        produtos que foram selecionados.O valor
                                        deve ser pago na hora com o dinheiro
                                        trocado e no local onde estão os
                                        orgânicos que você vem buscar na quarta
                                        até as 12h. Marque a opção abaixo se
                                        estiver de acordo!
                                    </h5>
                                </div>
                                <div
                                    style={{
                                        padding: "0px",
                                        marginTop: "20px",
                                        maxHeight: "34vh",
                                        overflowY: "scroll",
                                        border: "1px solid rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <h5 className="title2">Lista de Pedidos</h5>
                                    {this.state.pedido.map((l, i) => (
                                        <p style={{ marginLeft: "10px" }}>
                                            <b>{l.name}: </b> {l.quantidade}{" "}
                                            unidade(s)
                                        </p>
                                    ))}
                                    {/*
                                        <p style={{ marginLeft: "10px" }}>
                                            <b>Valor total do Pedido: </b>R$:
                                            {this.state.totalPedido}
                                        </p>
                                    */}
                                </div>
                            </MDBCol>
                            <MDBCol md="12" style={{ padding: 5 }}>
                                <input
                                    type="checkbox"
                                    id="checkbox1"
                                    onChange={this.setCheck}
                                    style={{ paddingTop: 5 }}
                                />
                                &nbsp;Estou de acordo.
                            </MDBCol>
                        </ModalBody>
                        <ModalFooter>
                            <h5
                                className="title2"
                                style={{ display: "flex", flex: "auto" }}
                            >
                                Valor total do Pedido: R$
                                {this.state.totalPedido}
                            </h5>
                            {/*<p style={{ marginLeft: "10px", float: "left" }}>
                                <b>Valor total do Pedido: </b>R$:
                                {this.state.totalPedido}
                            </p>*/}
                            <Button
                                color="red lighten-1"
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            "Pedido de retirada será cancelado. Confirma a ação escolhida?"
                                        )
                                    )
                                        this.toggle();
                                }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                color="success"
                                onClick={this.endProcess}
                                disabled={!checkAgree}
                            >
                                Continuar
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Container>
                <Container>
                    <Modal isOpen={modalMarketSuccess} size="lg">
                        <ModalHeader>
                            Confirmamos o recebimento de sua solicitação e
                            informamos que a mesma será executada e entregue na
                            próxima quarta.
                        </ModalHeader>
                        <ModalBody>
                            <div className="border border-warning lighten-1">
                                <h4 className="text-center title">
                                    Pedido confirmado com sucesso!
                                </h4>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="light-green lighten-1"
                                onClick={this.toggleMarketFinish}
                            >
                                OK
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </Card>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user.user,
        email: state.user.email,
        id: state.user.id
    };
};

export default connect(mapStateToProps)(Market);
