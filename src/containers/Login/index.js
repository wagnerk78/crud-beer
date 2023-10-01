import React from "react"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Button, Container, Container1, Text, Text1, Label, Input, Link } from './styles'
import api from '../../services/api'


function Login() {
    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um email válido!").required("Preencha o campo..."),
        password: Yup.string().required("Preecha o campo ...").min(8, "Esse campo deve ter no mínimo 8 caracteres!"),
    })


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })

    const onSubmit = async (data) => {
        const response = await api.post('session', {
            email: data.email,
            password: data.password
        })

        console.log(response)
    }

    return (
        <Container>
            <Container1>
                <Text>Login</Text>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>E-mail</Label>
                    <Input type="email" {...register("email")}></Input>
                    <h6>{errors.email?.message}</h6>
                    <Label>Senha</Label>
                    <Input type="password"  {...register("password")}></Input>
                    <h6>{errors.password?.message}</h6>
                    <Button type="submit"> Entrar</Button>
                </form>
                <Text1>Não tem uma conta?</Text1>
                <Link>CLIQUE AQUI!</Link>
            </Container1>
        </Container>

    )
}


export default Login