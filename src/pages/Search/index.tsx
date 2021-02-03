import React from 'react';
import BaseForm from './BaseForm';
import './styles.scss';

const Search = () => {
  return (
    <form action="">
      <BaseForm title="Encontre um perfil Github">
        <div className="text-search">
          <input
            type="text"
            className="form-control"
            placeholder="Usuário GitHub"
          />
        </div>
      </BaseForm>
    </form>
  );
};

export default Search;
