import React from 'react';
export default function Counter({ round }) {
  return round >= 1 ? <p>Vous en êtes à votre {round} tentative</p> : '';
}
