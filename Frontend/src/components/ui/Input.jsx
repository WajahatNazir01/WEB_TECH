import React from 'react';

const Input = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  error,
  placeholder = '',
  required = false,
  className = ''
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg border bg-white bg-opacity-90
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}
          focus:outline-none focus:ring-2 focus:border-transparent
          transition-all duration-200
          ${className}
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;