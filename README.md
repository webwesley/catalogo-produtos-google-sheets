# 🛍️ Catálogo de Produtos com Google Sheets e HTML

Este projeto é um catálogo dinâmico de produtos desenvolvido em HTML, CSS e JavaScript, com integração ao Google Sheets para atualização automática dos dados dos produtos. Ideal para quem busca uma solução rápida e eficiente para manter um catálogo de produtos atualizado e sincronizado, sem a necessidade de um backend tradicional.

## 🎨 Demonstração

![Demo Image](https://github.com/seu-usuario/nome-do-repositorio/raw/main/assets/demo.png)

## 📋 Funcionalidades

- Carregamento de produtos diretamente de uma planilha no Google Sheets.
- Atualização automática de valores, descrição, estoque e imagens.
- Filtro de produtos por categorias (ex.: iPhone, iPad, Drone, Diversos).
- Interface de catálogo moderna e estilizada com layout responsivo.
- Integração de botão flutuante do WhatsApp para contato direto.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout.
- **JavaScript**: Interatividade e carregamento dinâmico dos produtos.
- **Google Sheets API**: Fonte de dados para os produtos.

## 🚀 Como Funciona

Este catálogo carrega os dados diretamente do Google Sheets, onde as informações dos produtos (nome, descrição, cor, valor, estoque e imagem) são armazenadas. O JavaScript busca e exibe esses dados na página HTML, permitindo que alterações feitas na planilha se reflitam automaticamente no catálogo.

## 📄 Estrutura do Projeto

```plaintext
├── index.html         # Página principal com estrutura HTML do catálogo
├── catalogo.js        # Código JavaScript para integração com Google Sheets e carregamento dinâmico
├── styles.css         # Estilos CSS do catálogo
└── README.md          # Documentação do projeto
```

## 🧰 Pré-requisitos

Para rodar o projeto, você precisará de um navegador moderno com suporte a JavaScript.

## ⚙️ Configuração do Google Sheets

1. Crie uma nova planilha no Google Sheets.
2. Adicione as colunas necessárias para os produtos (por exemplo: **Produto**, **Descrição**, **Cor**, **Valor**, **Estoque**, **Imagem**).
3. Configure a planilha como pública:
   - Clique em **Compartilhar** e, em **Configurações de link**, escolha **Qualquer pessoa com o link pode visualizar**.
4. Copie o ID da planilha (encontrado na URL entre `/d/` e `/edit`).
5. Modifique o link da planilha para o formato de API JSON:
   ```
   https://docs.google.com/spreadsheets/d/SEU_ID_DA_PLANILHA/gviz/tq?tqx=out:json
   ```
6. Insira os links das imagens:
   - Para cada produto, carregue a imagem no Google Drive e defina como visível para qualquer pessoa com o link.
   - Copie o ID da imagem e transforme-o no formato:
     ```
     https://drive.google.com/uc?id=SEU_ID_DA_IMAGEM
     ```

## 📥 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/webwesley/catalogo-produtos-google-sheets.git
   ```
2. Abra o arquivo `index.html` no navegador.

## 📑 Código Explicado

### `catalogo.js`
O arquivo `catalogo.js` é responsável por buscar os dados da planilha e renderizar cada produto no catálogo.

- **fetchDataFromGoogleSheets**: Função que obtém os dados da planilha do Google Sheets no formato JSON.
- **formatarValor**: Função que formata o valor para o padrão brasileiro (R$ X.XXX,XX).
- **renderizarProdutos**: Função que cria os elementos HTML para cada produto e insere na página.

### `index.html`
Este arquivo contém a estrutura HTML básica do catálogo, incluindo a importação do JavaScript e CSS. Ele também possui um menu de navegação para filtragem de produtos por categorias.

### `styles.css`
Estilos CSS para uma apresentação moderna, incluindo um design responsivo e um botão flutuante do WhatsApp para contato direto.

## 🔄 Atualização dos Dados

Qualquer alteração feita na planilha (como o estoque, descrição ou preço de um produto) é refletida automaticamente na página HTML ao atualizar o navegador.

## 💡 Próximos Passos e Melhorias

- Adicionar paginação para exibir um grande número de produtos.
- Implementar animações para um carregamento de dados mais fluido.
- Adicionar busca por nome do produto.
- Integrar mais redes sociais para contato.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um *pull request* com sugestões ou melhorias.

## 📄 Licença

Este projeto é de uso livre sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/wesleyiepsen/) ou envie um e-mail para wesleyiepsen@gmail.com.
