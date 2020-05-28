import React from 'react';
import styled from 'styled-components';

const Empty = styled('div')`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

    .empty-container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    p{
      margin-top: 20px;
      font-size: var(--font-lg);
      font-weight: var(--bold);
    }
`

const EmptyPage = ({ text }) => (
  <Empty>
    <div className="empty-container">
      <img src="/static/accesible.png" alt="random" className="empty-image" />
      <p>{text}</p>
    </div>
  </Empty>
)

export default EmptyPage;
