import * as React from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({ selectedLanguage, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <select
      onChange={(event) => onUpdateLanguage(event.target.value)}
      selected={selectedLanguage}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage: selectedLanguage,
    });
  }

  render() {
    const { selectedLanguage } = this.state;

    return (
      <main>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
