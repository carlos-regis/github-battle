import * as React from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <main>
        <select
          onChange={(event) => this.updateLanguage(event.target.value)}
          selected={this.state.selectedLanguage}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        {JSON.stringify(this.state.selectedLanguage, null, 2)}
      </main>
    );
  }
}
