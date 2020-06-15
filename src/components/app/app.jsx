import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const welcomeScreenButtonHandler = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeScreenButtonClick={welcomeScreenButtonHandler}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
