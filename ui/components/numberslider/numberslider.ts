class NumberSlider{
  constructor($element: JQuery){
    function select(elem: string){
      return $element[0].querySelector(elem);
    }
    var container = select('.ns-inner'),
      dragger = select('#dragger'),
      dragVal: string,
      maxDrag = 300

    //center the container cos it's pretty an' that
    TweenMax.set(container, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50
    })

    TweenMax.set(select('svg'), {
      visibility: 'visible'
    })

    TweenMax.set(select('.upText'), {
      alpha: 0,
      transformOrigin: '50% 50%'
    })

    TweenLite.defaultEase = Elastic.easeOut.config(0.4, 0.1);

    var tl = new TimelineMax({
      paused: true
    });
    tl.addLabel("blobUp")
      .to(select('#display'), 1, {
        attr: {
          cy: '-=27',
          r: 17
        }
      })
      .to(select('#dragger'), 1, {
        attr: {
          //cy:'-=2',
          r: 8
        }
      }, '-=1')
      .set(select('#dragger'), {
        strokeWidth: 4
      }, '-=1')
      .to(select('.downText'), 1, {
        //alpha:0,
        alpha: 0,
        transformOrigin: '50% 50%'
      }, '-=1')
      .to(select('.upText'), 1, {
        //alpha:1,
        alpha: 1,
        transformOrigin: '50% 50%'
      }, '-=1')
      .addPause()
      .addLabel("blobDown")
      .to(select('#display'), 1, {
        attr: {
          cy: 299.5,
          r: 0
        },
        ease: Expo.easeOut
      })
      .to(select('#dragger'), 1, {
        attr: {
          //cy:'-=35',
          r: 13
        }
      }, '-=1')
      .set(select('#dragger'), {
        strokeWidth: 0
      }, '-=1')
      .to(select('.downText'), 1, {
        alpha: 1,
        ease: Power4.easeOut
      }, '-=1')
      .to(select('.upText'), 0.2, {
        alpha: 0,
        ease: Power4.easeOut,
        attr: {
          y: '+=45'
        }
      }, '-=1')

    Draggable.create(dragger, {
      type: 'x',
      cursor: 'pointer',
      throwProps: true,
      bounds: {
        minX: 0,
        maxX: maxDrag
      },
      onPress: function() {
        tl.play('blobUp')
      },
      onRelease: function() {
        tl.play('blobDown')
      },
      onDrag: dragUpdate,
      onThrowUpdate: dragUpdate
    })

    function dragUpdate() {
      dragVal = Math.round((this.target._gsTransform.x / maxDrag) * 10);
      select('.downText').textContent = select('.upText').textContent = dragVal;
      TweenMax.to(select('#display'), 1.3, {
        x: this.target._gsTransform.x
      })

      TweenMax.staggerTo([select('.upText'), select('.downText')], 1, {
        // x:this.target._gsTransform.x,
        cycle: {
          attr: [{
            x: this.target._gsTransform.x + 146
          }]
        },
        ease: Elastic.easeOut.config(1, 0.4)
      }, '0.02')
    }

    TweenMax.to(dragger, 1, {
      x: 150,
      onUpdate: dragUpdate,
      ease: Power1.easeInOut
    })
  }
}

angular.module('travifyapp').component('numberSlider', {
	templateUrl: './ui/components/numberslider/numberslider.html',
  controller: NumberSlider,
  bindings: {
    title: '@'
  }
});
