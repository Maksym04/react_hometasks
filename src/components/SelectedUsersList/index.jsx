import React from 'react';

function SelectedUsersList(props) {
  const { users } = props;
  const selectedUsers = users.filter(user => user.isSelected);

  const mapUsers = ({ id, firstName, lastName }) => (
    <li key={id}>
      {firstName} {lastName} was liked by you.
    </li>
  );

  return <ol>{selectedUsers.map(mapUsers)}</ol>;
}

export default SelectedUsersList;
