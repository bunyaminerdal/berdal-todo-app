import React, { PropsWithChildren } from 'react'
interface props{
    className?: string;
    htmlFor?: string;
}
const StyledLabel = ({ children, className='',htmlFor}:PropsWithChildren & props) => {
  return (
      <label htmlFor={htmlFor} className={`flex w-full items-center ${className}`}>
        {children}
      </label>
  );
}

export default StyledLabel