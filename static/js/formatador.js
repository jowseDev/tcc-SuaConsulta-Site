function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove tudo que não for número
  
    if (valor.length > 3 && valor.length <= 6) {
      valor = valor.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (valor.length > 6 && valor.length <= 9) {
      valor = valor.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (valor.length > 9) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
    }
  
    input.value = valor;
  }
  
function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove tudo que não for número
  
    if (valor.length > 11) valor = valor.slice(0, 11); // Limita ao tamanho máximo (11 dígitos)
  
    if (valor.length >= 10) {
      // Se tiver 11 dígitos ou 10 (fixo ou celular)
      if (valor.length === 11) {
        // Celular com 9 dígitos
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else {
        // Telefone fixo com 8 dígitos
        valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      }
    } else if (valor.length > 6) {
      valor = valor.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      valor = valor.replace(/(\d*)/, '($1');
    }
  
    input.value = valor;
  }
  