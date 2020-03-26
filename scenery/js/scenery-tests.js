// Copyright 2017-2020, University of Colorado Boulder

/**
 * Unit tests for scenery. Please run once in phet brand and once in brand=phet-io to cover all functionality.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import './accessibility/AccessibilityInputTests.js';
import './accessibility/AccessibilityTests.js';
import './accessibility/AccessibilityUtilsTests.js';
import './accessibility/AccessibleSiblingTests.js';
import './accessibility/FocusTests.js';
import './accessibility/KeyStateTrackerTests.js';
import './display/DisplayTests.js';
import './display/FuzzTests.js';
import './listeners/DragListenerTests.js';
import './listeners/FireListenerTests.js';
import './listeners/PressListenerTests.js';
import './nodes/AlignBoxTests.js';
import './nodes/NodeTests.js';
import './nodes/ShapeTests.js';
import scenery from './scenery.js';
import './tests/MiscellaneousTests.js';
import './tests/PixelComparisonTests.js';
import './util/ColorTests.js';
import './util/FontTests.js';
import './util/TrailTests.js';

// add elements to the QUnit fixture for our Scenery-specific tests
// TODO: is this necessary?
const $fixture = $( '#qunit-fixture' );
$fixture.append( $( '<div>' ).attr( 'id', 'main' ).attr( 'style', 'position: absolute; left: 0; top: 0; background-color: white; z-index: 1; width: 640px; height: 480px;' ) );
$fixture.append( $( '<div>' ).attr( 'id', 'secondary' ).attr( 'style', 'position: absolute; left: 0; top: 0; background-color: white; z-index: 0; width: 640px; height: 480px;' ) );

// schema should be the same as in initializeGlobals
const sceneryLogQueryParameter = QueryStringMachine.get( 'sceneryLog', {
  type: 'array',
  elementSchema: {
    type: 'string'
  },
  defaultValue: null
} );
sceneryLogQueryParameter && scenery.enableLogging( sceneryLogQueryParameter );

// Since our tests are loaded asynchronously, we must direct QUnit to begin the tests
QUnit.start();