import * as React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import Table from './Table';

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

class Popular extends React.Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
        error: null,
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = (selectedLanguage) => {
        this.setState({
            selectedLanguage: selectedLanguage,
        });

        fetchPopularRepos(selectedLanguage)
            .then((repos) =>
                this.setState({
                    repos,
                    error: null,
                }),
            )
            .catch((error) => {
                console.warn('Error fetching repos: ', error);

                this.setState({
                    error: `There was an error fetching the repositories`,
                });
            });
    };

    render() {
        const { selectedLanguage, repos, error } = this.state;

        return (
            <main className="stack main-stack animate-in">
                <div className="split">
                    <h1>Popular</h1>
                    <LanguagesNav
                        selectedLanguage={selectedLanguage}
                        onUpdateLanguage={this.updateLanguage}
                    />
                </div>
                {error && <p className="text-center error">{error}</p>}

                {repos && <Table repos={repos} />}
            </main>
        );
    }
}

export default Popular;
