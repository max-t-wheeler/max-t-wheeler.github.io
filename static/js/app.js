require("style-loader!../css/index.css");

import CanvasManager from './canvasManager';

let canvasManager;

Vue.component('navpane-item', {
  delimiters: ["[[", "]]"],
  props: ["animation"],
  template: '<li v-on:click="activate(animation)">[[ animation.text ]]</li>',
  methods: {
    activate: function(animation) {

      for (let i = 0; i < app.animations.length; ++i) {
        app.animations[i].active = false;
      }

      animation.active = true;
      app.display = true;

      const canvas = document.getElementById("animation-canvas");

      if(canvasManager) {
        if (canvasManager.animationId > 0) {
          cancelAnimationFrame(canvasManager.animationId);
        }
      }

      canvasManager = new CanvasManager(canvas, animation);

    }
  }
})


let app = new Vue({
  el: '#app',
  delimiters: ["[[", "]]"],
  data: {
    display: false,
    animations: [

      {
        text: 'shapes / triangle',
        name: 'triangle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_triangle',
        active: false
      },

      {
        text: 'shapes / rectangle',
        name: 'rectangle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_rectangle',
        active: false
      },

      {
        text: 'shapes / cube',
        name: 'cube',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_cube',
        active: false
      },

      {
        text: 'shapes / circle',
        name: 'circle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_circle',
        active: false
      },

      {
        text: 'shapes / clam',
        name: 'clam',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_clam',
        active: false
      },

      {
        text: 'shapes / pearl',
        name: 'pearl',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_pearl',
        active: false
      },

      {
        text: 'shapes / polystarter',
        name: 'polystarter',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#polystarter',
        active: false
      },

      {
        text: 'shapes / sacred circles',
        name: 'sacred circles',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#sacred_circles',
        active: false
      },

      {
        text: 'shapes / star',
        name: 'star',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#star',
        active: false
      },

      {
        text: 'physics / sine wave',
        name: 'sine wave',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#physics_sine_wave',
        active: false
      },

      {
        text: 'art / collide0scope',
        name: 'collide',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#art_collide0scope',
        active: false
      },

      {
        text: 'art / gyr0scope',
        name: 'gyro',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#art_gyr0scope',
        active: false
      },

      {
        text: 'art / concentric polygons',
        name: 'concentric polygons',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons',
        active: false
      },

      {
        text: 'art / concentric polygons 2',
        name: 'concentric polygons 2',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons2',
        active: false
      },

      {
        text: 'art / pinwheel',
        name: 'pinwheel',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_pinwheel',
        active: false
      },

      {

        text: 'art / blanket',
        name: 'blanket',
        dynamic: false,
        controllable: false,
        address: '/opengl_webgl_conversion#art_blanket',
        active: false
      },

      {

        text: 'art / bounce ripple',
        name: 'bounce ripple',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_bounce_ripple',
        active: false
      },

      {

        text: 'art / slosh ripple',
        name: 'slosh ripple',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_slosh_ripple',
        active: false
      },

      {

        text: 'art / wriggling donut',
        name: 'wriggling donut',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_wriggling_donut',
        active: false
      },

      {

        text: 'art / apollo',
        name: 'apollo',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#art_apollo',
        active: false
      }

    ]
  },
  methods: {
  },
  computed: {
  }
});