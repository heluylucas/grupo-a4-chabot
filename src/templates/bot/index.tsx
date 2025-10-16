import React from 'react';
import { Standard } from '@typebot.io/react';

const Bot: React.FC = () => {
  return (
    <Standard
      typebot='my-typebot-6z7pqm9'
      apiHost='https://typebot.io'
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default Bot;
