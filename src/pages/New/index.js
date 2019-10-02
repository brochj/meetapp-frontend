import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import Banner from './Banner';

import Button from '~/components/Button';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

export default function New() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />

        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          <MdAddCircleOutline />
          Criar meetup
        </Button>
      </Form>
    </Container>
  );
}
