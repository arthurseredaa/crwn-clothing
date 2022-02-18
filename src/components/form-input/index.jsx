import { Input } from '@chakra-ui/react';

export const FormInput = ({
  name,
  value,
  handleChange,
  placeholder,
  variant,
  type = 'text',
  styles = {},
  required = false,
}) => (
  <Input
    value={value}
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
    variant={variant}
    type={type}
    style={styles}
    isRequired={required}
  />
);
