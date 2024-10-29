// IDs das páginas da planilha
const categorias = {
  iphone: '0', 
  ipad: '2059170456',      
  drone: '1637050644',    
  diversos: '765234264' 
};

// Função para carregar a categoria
function carregarCategoria(categoria) {
  const gid = categorias[categoria];
  const sheetUrl = `https://docs.google.com/spreadsheets/d/spreadsheets/d/SEU_ID_DA_PLANILHA/gviz/tq?tqx=out:json&gid=${gid}`;

  // Carrega os dados da planilha com base na URL da categoria
  fetch(sheetUrl)
    .then(response => response.text()) // Pega a resposta como texto
    .then(data => {
      const jsonData = JSON.parse(data.substring(47).slice(0, -2));
      const rows = jsonData.table.rows;

      let htmlContent = '';
      rows.forEach(row => {
        const produto = row.c[0]?.v || '';
        const descricao = row.c[1]?.v || '';
        const cor = row.c[2]?.v || '';
        const valor = row.c[3]?.v || '0';
        const estoque = row.c[4]?.v || '0';
        const imagem = row.c[5]?.v || 'https://via.placeholder.com/250';

        const valorFormatado = formatarValor(valor);

        htmlContent += `
          <div class="produto">
            <img src="${imagem}" alt="Imagem do produto">
            <h2>${produto}</h2>
            <p>${descricao}</p>
            <p>Cor: ${cor}</p>
            <p class="valor">${valorFormatado}</p>
            <p class="estoque">Estoque: ${estoque} unidades</p>
            <button class="compra"><a href="https://wa.me/55539999999999?text=Olá, tenho interesse no produto: *${produto} - ${descricao} - ${cor}*" target="_blank">Solicitar produto</a></button>
          </div>
        `;
      });

      // Exibe os produtos no catálogo
      document.getElementById('catalogo').innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Erro ao carregar os dados:', error);
    });
}

// Formatação de valor
function formatarValor(valor) {
  if (typeof valor === 'string') {
    valor = valor.replace(',', '.');
  } else if (typeof valor === 'number') {
    valor = valor.toString();
  } else {
    valor = '0';
  }

  const numero = parseFloat(valor);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(isNaN(numero) ? 0 : numero);
}

// Carregar a categoria 'Iphone' por padrão ao iniciar
carregarCategoria('iphone');
