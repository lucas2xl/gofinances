export const currencyFormatter = (value = 0): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const dateFormatter = (value?: Date): string => {
  if (!value) {
    return '';
  }

  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value));
};

export const dateFormatterLong = (value?: Date): string => {
  if (!value?.getMilliseconds()) {
    return '';
  }

  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(new Date(value));
};
