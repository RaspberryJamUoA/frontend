import React from 'react';


class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='https://www.google.com'>Hello</a>
          </li>

          <li>
            <a href='https://www.google.com'>List Item 2</a>
          </li>

          <li>
            <a href='https://www.google.com'>List Item 3</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
