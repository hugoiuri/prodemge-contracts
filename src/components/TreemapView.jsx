import React from 'react';
import { withRouter } from 'react-router';
import { Treemap } from 'd3plus-react'

import data from '../database/treemap.json'

class TreeMapView extends React.Component {
  state = {
    methods: {
      data,
      size: d => d.value,
      groupBy: d => d.id,
      tooltipConfig: {
        body: d => {
          var table = "<table class='tooltip-table'>";
          table += "<tr><td class='title'>Número do Contrato: </td><td class='data'>" + d.number + "</td></tr>";
          table += "<tr><td class='title'>Status: </td><td class='data'>" + d.status + "</td></tr>";
          table += "<tr><td class='title'>Faturamento: </td><td class='data'>" + d.statusFaturamento + "</td></tr>";
          table += "</table>";
          return table;
        },
        footer: d => {
          return "<sub class='tooltip-footer'>Dados coletados em dezembro de 2018</sub>";
        },
        title: d => d.id
      },
      on: {
        click: d => {
          document.querySelector('.d3plus-tooltip').style.display = 'none';
          this.props.history.push(`/contract/${d.code}`);
        }
      },
      shapeConfig: {
        fill: d => {
          if (d.comparacaoSaldo === 'Contrato sem saldo'
            || d.statusFaturamento === 'Contrato Vencido sem saldo'
            || d.status === 'Vencido') {
            return 'red'
          }
  
          if (d.statusFaturamento === 'Contrato com faturamento superior ao valor contratado'
            || d.statusFaturamento === 'Contrato com pagamento em aberto'
            || d.status === 'Renovar') {
            return 'orange'
          }
  
          return 'blue';
        }
      },
      legend: false
    }  
  }

  render(){
    const { state } = this;
    return (
      <Treemap config={state.methods} />
    )
  }
}

export default withRouter(TreeMapView);