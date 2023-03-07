export function formatarTelefone(telefone: string) {
  telefone = telefone.replace(/\D/g, '') // remove tudo que não é dígito
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2') // adiciona o código de área
  telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2') // adiciona o hífen
  return telefone
}

export const formatarCPF = (cpf: string) => {
  cpf = cpf.replace(/\D/g, '') // remove tudo que não é dígito
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // insere o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // insere o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2') // insere o traço e os dois últimos dígitos
  return cpf
}

export function formatarCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, '') // remove tudo que não é dígito
  cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2') // insere o primeiro ponto
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // insere o segundo ponto
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2') // insere a barra e os próximos quatro dígitos
  cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2') // insere o traço e os dois últimos dígitos
  return cnpj
}

export function formatCreditCard(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{4})(\d)/g, '$1 $2')
  value = value.replace(/^(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3')
  value = value.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3 $4')
  return value
}

export function formatDate(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}
