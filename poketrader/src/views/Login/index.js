import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLogado, setIsLogado] = useState(false);

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((user) => {
                console.log(user);
                setIsLogado(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    useEffect(() => {
        setSenha("");
        setEmail("");
    }, [])

    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="form-group text-center">
                        <Typography className="mt-3" variant="h6" component="h1">
                            Plataforma para troca de pokemons
                        </Typography>
                        <TextField
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            value={email}
                            onChange={text => setEmail(text.target.value)}
                        />
                        <TextField
                            label="Senha"
                            type="password"
                            autoComplete="normal"
                            margin="normal"
                            value={senha}
                            onChange={text => setSenha(text.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="mt-4 mb-4"
                            onClick={login}
                        >
                            Entrar
                        </Button>
                        {/*  {
                            (success) && <Redirect to="/vehicles" />
                        } */}


                        {
                            isLogado ? (<h1>LOGADO</h1>) : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
