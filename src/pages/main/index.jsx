import Button from "../../components/button";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import Title from "../../components/title";
import Input from "../../components/input";
import Text from "../../components/text";

import React from "react";

import { useForm } from "@formspree/react";

import { Container, Send } from "./styles";

const Main = () => {
    const [state, handleSubmit] = useForm("mzbnnqky");

    if (state.succeeded) {
        alert("Obrigado por entrar em contato!");
    }

    return (
        <Layout>
            <Container onSubmit={handleSubmit}>
                <section>
                    <Title title="Exclusão de conta" />
                    <Text
                        text="Se você deseja encerrar sua conta conosco e não deseja mais acessá-la, oferecemos a opção de exclusão da conta para atender às suas necessidades. A exclusão da conta é um processo permanente e irreversível, e você não poderá mais acessar suas informações ou utilizar os serviços associados à sua conta após a exclusão."
                    />
                </section>

                <section>
                    <Input
                        label="Nome"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Digite aqui a sua resposta"
                        state={state}
                    />
                </section>
                <section>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite aqui a sua resposta"
                        state={state}
                    />
                </section>



                <section>
                    <Input
                        label="Porque deseja excluir a conta?"
                        id="justify"
                        type="text"
                        name="justify"
                        placeholder="Digite aqui a sua resposta"
                        state={state}
                    />
                </section>

                <section>
                    <Footer />
                </section>
                <Send>
                    <Button
                        type="submit"
                        name="enviar"
                        disabled={state.submitting}
                    >
                        {state.succeeded ? "Enviado!" : "Enviar"}
                    </Button>
                </Send>
            </Container>
        </Layout>
    );
};

export default Main;
