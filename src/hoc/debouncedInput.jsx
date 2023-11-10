import { useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';

export const debouncedInputHOC = (WrappedComponent, delay) => {
  const DebouncedInput = ({ setDebounceValue, ...props }) => {
    const [inputValue, setInputValue] = useState('');
    const debounceValue = useDebounce(inputValue, delay);

    const inputChangeHandler = (event) => {
      setInputValue(event.target.value);
    };

    useEffect(() => {
      setDebounceValue(debounceValue);
    }, [debounceValue, setDebounceValue]);

    return <WrappedComponent onChangeHandler={inputChangeHandler} {...props} />;
  };

  DebouncedInput.displayName = `DebouncedInput(${WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent'})`;

  return DebouncedInput;
};
