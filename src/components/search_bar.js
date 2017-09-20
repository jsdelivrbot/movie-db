import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Digite o nome do filme, seriado..."
          className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Buscar</button>
        </span>
      </form>
    );
  }
}
