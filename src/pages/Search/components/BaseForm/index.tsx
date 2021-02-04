import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const BaseForm = ({ title, children }: Props) => {
  return (
    <div className="search-base-form card-base">
      <h1 className="base-form-title">{title}</h1>
      {children}
      <div className="base-form-action">
        <Button text="Encontrar" />
      </div>
    </div>
  );
};

export default BaseForm;
