export enum ResponseMessages {
  EMAIL_IS_VALID = "O 'email' deve ser válido.",

  HAS_MAXIMUM_64_LENGTH = "Máximo de 64 caracteres.",
  HAS_MINIMUM_8_LENGTH = "Mínimo de 8 caracteres.",

  INVALID_CEP = "CEP inválido.",
  INVALID_CPF = "CPF inválido.",
  INVALID_DATE = "Data inválida.",
  INVALID_PHONE = "Telefone inválido.",

  MAXIMUM_DATE = "Data máxima atingida.",
  MINIMUM_DATE = "Data mínima atingida.",

  PASSWORD_IS_STRONG = "A 'senha' deve ter pelo menos: uma letra minúscula, uma letra maiúscula, um número e um símbolo.",
  PASSWORDS_ARE_EQUIVALENT = "As 'senhas' devem ser equivalentes.",

  REQUIRED_FIELD = "Campo obrigatório.",

  SIGN_IN_USER_ERROR = "Erro ao entrar.",
  SIGN_OUT_USER_ERROR = "Erro ao sair.",
  SIGN_UP_USER_ERROR = "Erro ao se cadastrar.",

  UNKNOWN_ERROR = "Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.",
}

export type ResponseMessagesKey = keyof typeof ResponseMessages;
