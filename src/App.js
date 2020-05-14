import React, { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(p => p.id === id);
  }

  render() {
    return (
      <Switch>
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
          path="/palette/:paletteId/:colorId" render={() => <h1>SINGLE COLOR PAGE</h1>}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedPalettes[4])} />
      // </div>
    );
  }
}

export default App;
