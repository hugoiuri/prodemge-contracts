import React from 'react';
import dataBase from './data.json'

export default props => {
  const { params } = this.props;

  if (!params.codigocontrato) return null;

  let dadosContrato = dataBase.find(element => {
    if (element.CODIGOCONTRATO === params.codigocontrato) {
      return true
    } else {
      return false
    }
  });

  return (
    <div>
      <h2>Detalhes do contrato</h2>
      <h3>Status da vigência{dadosContrato.Status}</h3>
      <h3>Status detalhado{dadosContrato.ComparacaoSaldo}</h3>
      <h3>Status dos faturamentos{dadosContrato.StatusFaturamento}</h3>
      <label>Cliente: {dadosContrato.Cliente}</label>
      <label>Código do Contrato: {dadosContrato.CODIGOCONTRATO}</label>
      <label>Data de início do contrato: {dadosContrato.DATAINICIO}</label>
      <label>Data de término do contrato: {dadosContrato.DATAFIM}</label>
      <label>Valor contratual: {dadosContrato.SALDOTOTALCONTRATO}</label>
      <label>Valor total faturado: {dadosContrato.SALDOFATURAMENTOCONTRATO}</label>
      <label>Valor total pago: {dadosContrato.SALDOFATURAPAGACONTRATO}</label>
    </div>
  );

}