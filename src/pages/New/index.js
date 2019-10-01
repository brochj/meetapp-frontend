import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import Banner from './Banner';

import Button from '~/components/Button';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function New() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Banner name="banner" />
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do Meetup" />
        <textarea
          name="description"
          cols="40"
          rows="5"
          placeholder="Descrição completa"
        />

        <Input name="date" placeholder="Data do meetup" />
        <Input name="local" placeholder="Localização" />

        <Button type="submit">
          <MdAddCircleOutline />
          Criar meetup
        </Button>
      </Form>
    </Container>
  );
}
