import React from 'react';
import dataBase from '../database/data.json'

export default props => {
  const { codigoContrato } = props;

  console.log(codigoContrato);

  if (!codigoContrato) return null;

  let dadosContrato = dataBase.find(element => {
    if (element._IDCNT.toString() === codigoContrato) {
      return true
    } else {
      return false
    }
  });

  console.log(dadosContrato);

  return (
    <div>
      <p><h2>Detalhes do contrato</h2></p>
      <br/>
      <p><h3 >Status da vigência: {dadosContrato.Status}</h3></p>
      <p><h3>Status detalhado: {dadosContrato.ComparacaoSaldo}</h3></p>
      <p><h3>Status dos faturamentos: {dadosContrato.StatusFaturamento}</h3></p>

      <p>Cliente: {dadosContrato.Cliente}</p>
      <p>Código do Contrato: {dadosContrato.CODIGOCONTRATO}</p>
      <p>Data de início do contrato: {dadosContrato.DATAINICIO}</p>
      <p>Data de término do contrato: {dadosContrato.DATAFIM}</p>
      <p>Valor contratual: {dadosContrato.SALDOTOTALCONTRATO},00</p>
      <p>Valor total faturado: {dadosContrato.SALDOFATURAMENTOCONTRATO},00</p>
      <p>Valor total pago: {dadosContrato.SALDOFATURAPAGACONTRATO},00</p>
      
    </div>
    
  );

}