import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import banner from '~/assets/banner.png';
import Button from '~/components/Button';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details({ match, location }) {
  const dispatch = useDispatch();
  const meetup = location.state.state;
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Container>
      {showAlert && (
        <SweetAlert
          danger
          showCancel
          cancelBtnText="Cancelar!"
          confirmBtnText="Sim, deletar"
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
          <Button background="#4DBAF9">
            <MdEdit />
            Editar
          </Button>
          <Button
            onClick={() => {
              setShowAlert(true);
            }}
          >
            <MdDeleteForever />
            Cancelar
          </Button>
        </div>
      </header>

      <Content>
        <Banner src={banner} />
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
