import React from "react"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Button, Container, Container1, Text, Text1, Label, Input, Link } from './styles'
import api from '../../services/api'


function Register() {
    const schema = Yup.object().shape({
        name: Yup.string().required("Preencha o campo..."),
        email: Yup.string().email("Digite um email válido!").required("Preencha o campo..."),
        password: Yup.string().required("Preecha o campo ...").min(8, "Esse campo deve ter no mínimo 8 caracteres!"),
        confirmPassword: Yup.string().required("Preecha o campo ...").oneOf([Yup.ref("password")], "As senhas não são iguais")
    })


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const response = await api.post('users', {
            name: data.name,
            email: data.email,
            password: data.password
        })

        console.log(response)
    }

    return (
        <Container>
            <Container1>
                <Text>Cadastro</Text>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")}></Input>
                    <h6>{errors.name?.message}</h6>
                    <Label>E-mail</Label>
                    <Input type="email" {...register("email")}></Input>
                    <h6>{errors.email?.message}</h6>
                    <Label>Senha</Label>
                    <Input type="password"  {...register("password")}></Input>
                    <h6>{errors.password?.message}</h6>
                    <Label>Confirme sua senha</Label>
                    <Input type="password"  {...register("confirmPassword")}></Input>
                    <h6>{errors.confirmPassword?.message}</h6>
                    <Button type="submit"> Cadastrar</Button>
                </form>
                <Text1>Já tem uma conta?</Text1>
                <Link>CLIQUE AQUI!</Link>
            </Container1>
        </Container>

    )
}


export default Register