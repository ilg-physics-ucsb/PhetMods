// Copyright 2017-2020, University of Colorado Boulder

/**
 * An octagonal, red stop sign node with a white internal border
 *
 * @author Denzell Barnett (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Shape from '../../kite/js/Shape.js';
import inherit from '../../phet-core/js/inherit.js';
import merge from '../../phet-core/js/merge.js';
import Node from '../../scenery/js/nodes/Node.js';
import Path from '../../scenery/js/nodes/Path.js';
import Tandem from '../../tandem/js/Tandem.js';
import sceneryPhet from './sceneryPhet.js';

// constants
const NUMBER_OF_SIDES = 8;

/**
 * @param {Object} [options]
 * @constructor
 */
function StopSignNode( options ) {
  options = merge( {
    fillRadius: 23,
    innerStrokeWidth: 2,
    outerStrokeWidth: 1,

    fill: 'red',
    innerStroke: 'white',
    outerStroke: 'black',

    tandem: Tandem.REQUIRED
  }, options );

  options.children = [
    createStopSignPath( options.outerStroke, options.fillRadius + options.innerStrokeWidth + options.outerStrokeWidth ),
    createStopSignPath( options.innerStroke, options.fillRadius + options.innerStrokeWidth ),
    createStopSignPath( options.fill, options.fillRadius )
  ];

  Node.call( this, options );
}

sceneryPhet.register( 'StopSignNode', StopSignNode );

var createStopSignPath = function( fill, radius ) {
  return new Path( Shape.regularPolygon( NUMBER_OF_SIDES, radius ), {
    fill: fill,
    rotation: Math.PI / NUMBER_OF_SIDES,

    // To support centering when stacked in z-order
    centerX: 0,
    centerY: 0
  } );
};

inherit( Node, StopSignNode );
export default StopSignNode;