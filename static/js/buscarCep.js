function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert('CEP inválido!');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado!');
          return;
        }

        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('localidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar CEP!');
        });
}