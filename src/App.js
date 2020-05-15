import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

import seedPalettes from './seedPalettes';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(p => p.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedPalettes[4])} />
      // </div>
    );
  }
}

export default App;
