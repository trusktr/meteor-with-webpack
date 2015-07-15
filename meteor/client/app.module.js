//import                               'famous/core/famous.css'

//import Molecule                 from 'infamous/Molecule'
//import Plane                    from 'infamous/Plane'
//import DoubleSidedPlane         from 'infamous/DoubleSidedPlane'
//import Grid                     from 'infamous/Grid'

//import Calendar                 from 'infamous/Calendar'
//import Cube                     from 'infamous/Cube'
//import PushMenuLayout           from 'infamous/PushMenuLayout'

//import {contextWithPerspective} from 'infamous/utils'

console.log(' --- trusktr:scratchpaper', Package['trusktr:scratchpaper'].Lib.hello())
console.log(' --- trusktr:lib2', Package['trusktr:lib2'].Lib.hello())

Logger.setLevel("famous-views", "info")

//FView.registerView('Molecule', Molecule)
//FView.registerView('Plane', Plane)
//FView.registerView('DoubleSidedPlane', DoubleSidedPlane)
//FView.registerView('Grid', Grid)

//FView.registerView('Calendar', Calendar)
//FView.registerView('Cube', Cube)
//FView.registerView('PushMenuLayout', PushMenuLayout)

//FView.registerView('contextWithPerspective',
  //contextWithPerspective,
  //{
    //create: function(options) {
      //return new this._view.constructor(options.perspective || 0)
  //}
//})

Template.body.helpers({
    items: function() {
        return Items.find({})
    }
})

Template.title.rendered = function() {
    console.log(' --- Same modifiers:', FView.from(this).parent.modifier == FView.from(this).parent._modifier)

    // wrap a DOM element in a Famo.us Surface.
    var surface = new famous.core.Surface
    surface.attach(document.getElementById('whatever'))

    // listen to pinch zoom events on said DOM element.
    var sync = new famous.inputs.MouseSync // MouseSync, RotateSync, etc
    surface.pipe(sync)
    sync.on('update', function(data) {
      console.log('Incredibly useful event data: ', data)
    })
    console.log('Event handlers attached.')
}

Meteor.startup(function() {
    //let ctx = contextWithPerspective(1000)
    //let square = new Plane({
        //size: [200,200],
        //content: 'Hello.',
        //properties: {
            //backfaceVisibility: 'visible',
            //background: 'pink',
            //padding: '5px'
        //}
    //})

    //ctx.add(square)
    //square.transform.setRotate([0,2*Math.PI,0], {duration: 5000, curve: 'easeInOut'})
})
