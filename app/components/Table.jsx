import * as React from 'react';
import PropTypes, { func } from 'prop-types';
import { hashtag } from './icons';

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: '5%' }}>{hashtag}</th>
        <th style={{ width: '50%' }}>Repository</th>
        <th style={{ width: '15%' }}>Star</th>
        <th style={{ width: '15%' }}>Forks</th>
        <th style={{ width: '15%' }}>Open Issue</th>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
}) {
  const { login, avatar_url } = owner;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="row gap-md">
          <img
            width={32}
            height={32}
            className="avatar"
            src={avatar_url}
            alt={`Avatar for ${login}`}
          />
          <a href={`https://github.com/${login}/${name}`}>{name}</a>
        </div>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  open_issues: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default function Table({ repos }) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repos, index) => {
          return <TableRow key={index} index={index} {...repos} />;
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  repos: PropTypes.array.isRequired,
};
