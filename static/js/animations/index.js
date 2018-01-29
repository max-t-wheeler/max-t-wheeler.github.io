import Triangle from './shapes/triangle';
import Rectangle from './shapes/rectangle';
import Cube from './shapes/cube';
import Circle from './shapes/circle';
import Clam from './shapes/clam';
import Pearl from './shapes/pearl';
import Polygon from './shapes/polygon';
import SacredCircles from './shapes/sacredCircles';
import OffsetStar from './shapes/offsetStar';

import Collide0scope from './art/collide0scope';
import Gyr0scope from './art/gyr0scope';
import Blanket from './art/blanket';
import ConcentricPolygons from './art/concentricPolygons';
import ConcentricPolygons2 from './art/concentricPolygons2';
import Pinwheel from './art/pinwheel';
import BounceRipple from './art/bounceRipple';
import SloshRipple from './art/sloshRipple';
import WrigglingDonut from './art/wrigglingDonut';
import Apollo from './art/apollo';

import SineWave from './physics/sineWave';

const ANIMATION_MAP	= {

	'triangle': Triangle,
	'rectangle': Rectangle,
	'cube': Cube,
	'circle': Circle,
	'clam': Clam,
	'pearl': Pearl,
	'polystarter': Polygon,
	'sacred circles': SacredCircles,
	'star': OffsetStar,
	'collide': Collide0scope,
	'gyro': Gyr0scope,
	'blanket': Blanket,
	'concentric polygons': ConcentricPolygons,
	'concentric polygons 2': ConcentricPolygons2,
	'pinwheel': Pinwheel,
	'bounce ripple': BounceRipple,
	'slosh ripple': SloshRipple,
	'wriggling donut': WrigglingDonut,
	'apollo': Apollo,
	'sine wave': SineWave

};

export function generateAnimation(scene, animation) {

	if(ANIMATION_MAP[animation.name]) {
		return new ANIMATION_MAP[animation.name](scene, animation);
	}

}