import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever, MdEdit, MdPlace, MdDateRange } from 'react-icons/md';
import SweetAlert from 'react-bootstrap-sweetalert';

import {
  Container,
  Content,
  Description,
  Banner,
  Info,
  Footer,
} from './styles';
import Button from '~/components/Button';

import history from '~/services/history';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details({ match, location }) {
  const dispatch = useDispatch();
  const meetup = location.state;
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Container>
      {showAlert && (
        <SweetAlert
          danger
          showCancel
          cancelBtnText="Cancelar"
          confirmBtnText="Sim, deletar!"
          showCloseButton
          confirmBtnBsStyle="danger"
          cancelBtnBsStyle="default"
          title="Você tem certeza?"
          onConfirm={() => {
            dispatch(deleteMeetupRequest(meetup.id));
            setShowAlert(false);
          }}
          onCancel={() => {
            setShowAlert(false);
          }}
        >
          Não será possível recuperar os dados após essa operação
        </SweetAlert>
      )}

      <header>
        <h1>{meetup.title}</h1>
        <div>
          {!meetup.past && (
            <Button
              background="#4DBAF9"
              onClick={() => history.push(`/${meetup.id}/edit`, meetup)}
            >
              <MdEdit />
              Editar
            </Button>
          )}

          <Button
            onClick={() => {
              setShowAlert(true);
            }}
          >
            <MdDeleteForever />
            {!meetup.past ? 'Cancelar' : 'Remover'}
          </Button>
        </div>
      </header>

      <Content>
        <Banner src={meetup.File.url} />
        <Description>
          <p>{meetup.description}</p>
        </Description>
        <Footer>
          <Info>
            <MdDateRange />
            <span>{meetup.timezonedDate}</span>
          </Info>
          <Info>
            <MdPlace />
            <span>{meetup.location}</span>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}
