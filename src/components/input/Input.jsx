import React from 'react';
import './Input.scss';

export default ({ placeholder, onChagne }) => <input placeholder={placeholder} onChange={onChagne} className="input" />;
