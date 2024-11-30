/* Estilo geral da página */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

/* Estilo da grid de números */
#num-grid .row {
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10 colunas padrão em telas maiores */
    gap: 8px; /* Espaçamento entre os botões */
    padding: 0 5px;
    max-width: 100%;
    box-sizing: border-box;
}

/* Estilo de cada botão de número (quadrado) */
#num-grid button {
    font-size: 14px;
    width: 100%;
    height: 38px; /* Tamanho mais compacto */
    display: flex;
    justify-content: center; /* Centraliza o número horizontalmente */
    align-items: center;     /* Centraliza o número verticalmente */
    border: none;
    border-radius: 8px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    margin: 3px;
}

/* Quando o número é selecionado */
#num-grid button.selected {
    background-color: #007bff;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(0, 123, 255, 0.5);
}

/* Quando o número está pago */
#num-grid button.paid {
    background-color: #e90a0a;
    color: white;
    cursor: not-allowed;
    box-shadow: 0 8px 15px rgba(233, 10, 10, 0.5);
}

#num-grid button:hover {
    background-color: #17a2b8;
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(0, 123, 255, 0.3);
}

#num-grid button:not(.paid):not(.selected) {
    background-color: #28a745;
    color: white;
}

/* Responsividade para dispositivos móveis */
@media (max-width: 1024px) {
    #num-grid .row {
        grid-template-columns: repeat(6, 1fr); /* 6 colunas em tablets */
    }
}

@media (max-width: 768px) {
    #num-grid .row {
        grid-template-columns: repeat(5, 1fr); /* 5 colunas em telas menores */
    }
}

@media (max-width: 576px) {
    #num-grid .row {
        grid-template-columns: repeat(4, 1fr); /* 4 colunas em telas muito pequenas */
    }

    #num-grid button {
        width: 100%; /* Os botões ainda ocupam 100% da largura da coluna */
        font-size: 12px; /* Fonte menor para se ajustar bem */
    }
}

/* Estilo do campo de busca */
#search-input {
    border-radius: 30px;
    padding: 12px;
    width: 300px;
    max-width: 100%;
    margin-bottom: 20px;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    transition: box-shadow 0.3s ease;
}

#search-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
}

/* Estilo dos botões de confirmação e cancelamento */
button {
    border-radius: 50px;
    padding: 12px 35px;
    font-weight: bold;
    transition: transform 0.3s ease;
}

#confirm-button {
    background-color: #28a745;
    color: white;
}

#cancel-button {
    background-color: #dc3545;
    color: white;
}

#cancel-button:disabled,
#confirm-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

button:hover {
    transform: scale(1.1);
}

#cancel-button:hover {
    background-color: #c82333;
}

#confirm-button:hover {
    background-color: #218838;
}

/* Estilo da lista de clientes pagos */
#client-list {
    max-height: 250px;
    overflow-y: auto;
    margin-top: 20px;
}

/* Estilização dos cards de clientes pagos */
.client-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin-bottom: 15px;
    border-left: 5px solid #007bff;
    transition: transform 0.3s ease;
}

.client-card:hover {
    transform: translateY(-5px);
}

.client-card .client-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}

.client-card .client-number {
    font-size: 1rem;
    color: #007bff;
}

/* Rodapé */
.footer {
    background-color: #343a40;
    color: white;
    padding: 20px 0;
    text-align: center;
    margin-top: 50px;
}
