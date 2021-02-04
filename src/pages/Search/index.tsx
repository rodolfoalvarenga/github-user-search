import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from './components/BaseForm';
import GitCard from './components/GitCard';
import './styles.scss';

type FormState = {
  login: string;
};

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [formData, setFormData] = useState<FormState>({
    login: '',
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
    };

    makeRequest({
      url: `/${formData.login}`,
      method: 'GET',
      data: payload,
    }).then(() => {
      setFormData({ login: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="Encontre um perfil Github">
        <div className="text-search">
          <input
            value={formData.login}
            name="login"
            type="text"
            className="form-control"
            onChange={handleOnChange}
            placeholder="Usuário GitHub"
          />
        </div>
      </BaseForm>
      <GitCard />
    </form>
  );
};

export default Search;
