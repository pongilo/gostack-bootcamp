import React from 'react';

// Verifica se as propriedades são uma função ou um texto, etc
import PropTypes from 'prop-types'; //yarn add prop-types

// Como não sera armazzenado nenhum estado, não ha necessidade de usar classes
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={ onDelete } type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto'
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;