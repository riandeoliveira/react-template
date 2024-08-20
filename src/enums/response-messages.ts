export enum ResponseMessages {
  EMAIL_IS_VALID = "O 'email' deve ser válido.",

  HAS_MAXIMUM_64_LENGTH = "Máximo de 64 caracteres.",
  HAS_MINIMUM_8_LENGTH = "Mínimo de 8 caracteres.",

  PASSWORD_IS_STRONG = "A 'senha' deve ter pelo menos: uma letra minúscula, uma letra maiúscula, um número e um símbolo.",

  REQUIRED_FIELD = "Campo obrigatório.",

  SIGN_IN_USER_ERROR = "Erro ao entrar.",
  SIGN_OUT_USER_ERROR = "Erro ao sair.",
  SIGN_UP_USER_ERROR = "Erro ao se cadastrar.",

  UNKNOWN_ERROR = "Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.",
}

export type ResponseMessagesKey = keyof typeof ResponseMessages;
