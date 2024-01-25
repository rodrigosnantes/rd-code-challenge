export function validateUserName(name: string) {
  return name.length >= 2 && !/\d/.test(name);
}

export function validateUserEmail(email: string) {
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mailRegex.test(email);
}

export function validateUserPhone(phone: string) {
  const regexPhone = /^\(\d{2}\)\s?(?:\d{1}\s?\d{4}-\d{4}|\d{4}-\d{4})$/;
  return regexPhone.test(phone);
}

export function phoneMask(value: string): string {
  let phone = value.replace(/\D+/g, '');
  let phoneSize = phone.length;

  if (phoneSize > 10) {
    phone = phone.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (phoneSize > 5) {
    phone = phone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (phoneSize > 2) {
    phone = phone.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else {
    phone = phone.replace(/^(\d*)/, '($1');
  }

  return phone;
}

export function validateFormData(data: {
  name: string;
  phone: string;
  mail: string;
}) {
  if (!validateUserName(data.name)) {
    return { isValid: false, invalidField: 'name' };
  }
  if (!validateUserEmail(data.mail)) {
    return { isValid: false, invalidField: 'email' };
  }
  if (!validateUserPhone(data.phone)) {
    return { isValid: false, invalidField: 'phone' };
  }
  return { isValid: true };
}
