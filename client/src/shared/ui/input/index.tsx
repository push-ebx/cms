import React, { CSSProperties } from 'react';
import style from './style.module.scss'

type Props = {
  placeholder?: string,
  className?: string,
  styles?: CSSProperties,
  onChange?: (value: string) => void,
  value?: string,
  type?: React.HTMLInputTypeAttribute | undefined
}

export const Input = ({placeholder, className, styles, onChange, value, type}: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={`${style.input} ${className}`}
      style={styles}
      type={type}
      onChange={(e) => onChange ? onChange(e.target.value) : () => {}}
      value={value}
    />
  );
};