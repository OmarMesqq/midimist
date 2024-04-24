package main

import (
    "fmt"
    "net/http"
)

const API_PATH = "/api"
func main() {
    http.HandleFunc(API_PATH, func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Conexão bem sucedida com a API!")
    })

    fmt.Println("Servidor HTTP escutando na porta 8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println("Erro iniciando servidor:", err)
    }
}

