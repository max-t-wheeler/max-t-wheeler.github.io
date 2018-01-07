Vue.component('navpane-item', {
  delimiters: ["[[", "]]"],
  props: ["animation"],
  template: '<li v-on:click="activate(animation)">[[ animation.text ]]</li>',
  methods: {
    activate: function(animation) {
      for (var i = 0; i < app.animations.length; ++i) {
        app.animations[i].active = false;
      }
      animation.active = true;
      app.display = true;
      init(animation.entry, animation.dynamic);
    }
  }
})


var app = new Vue({
  el: '#app',
  delimiters: ["[[", "]]"],
  data: {
    display: false,
    animations: [

      {
        text: 'shapes / triangle',
        entry: 'triangle',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_triangle',
        active: false 
      },

      {
        text: 'shapes / rectangle',
        entry: 'rectangle',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_rectangle',
        active: false
      },

      {
        text: 'shapes / cube',
        entry: 'cube',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_cube',
        active: false
      },

      {
        text: 'shapes / circle',
        entry: 'circle',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_circle',
        active: false
      },

      {
        text: 'shapes / clam',
        entry: 'clam',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_clam',
        active: false
      },

      {
        text: 'shapes / pearl',
        entry: 'pearl',
        dynamic: true,
        address: '/opengl_webgl_conversion#shapes_pearl',
        active: false
      },

      {
        text: 'art / collide0scope',
        entry: 'collide',
        dynamic: true,
        address: '/opengl_webgl_conversion#art_collide0scope',
        active: false
      },

      {
        text: 'physics / sine wave',
        entry: 'sine wave',
        dynamic: true,
        address: '/opengl_webgl_conversion#physics_sine_wave',
        active: false
      },

      {
        text: 'art / concentric polygons',
        entry: 'concentric polygons',
        dynamic: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons',
        active: false
      },

      {
        text: 'art / concentric polygons 2',
        entry: 'concentric polygons 2',
        dynamic: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons_2',
        active: false
      },

      {
        text: 'art / pinwheel',
        entry: 'pinwheel',
        dynamic: false,
        address: '/opengl_webgl_conversion#art_pinwheel',
        active: false
      },

      {

        text: 'art / blanket',
        entry: 'blanket',
        dynamic: false,
        address: '/opengl_webgl_conversion#art_blanket',
        active: false
      },

      {
        text: 'art / polystarter',
        entry: 'polystarter',
        dynamic: true,
        address: '/opengl_webgl_conversion#polystarter',
        active: false
      }

    ]
  },
  methods: {
  },
  computed: {
  }
});