'use strict';

/**
 * @ngdoc directive
 * @name verpApp.directive:sp
 * @description
 * # sp creates a scatter plot
 */
angular.module('verpApp')
  .directive('sp',function(DataService) {


var postLink = function(scope, element, attrs) {
    var w = attrs.width,
        h = attrs.height,
        sp = null;



   function show(e,d){
      var indx = d.currentTime,
          cond = function(indx, i){return i>indx;};
        if(sp!==null) sp.show(indx, cond);

   }

   function cond(e,d,x,y){
       return !(e[0][0] > d[x] || d[x] > e[1][0]
           || e[0][1] > d[y] || d[y] > e[1][1]);
   }

   function condHighlight(d){
       return (sp===null) ? null : sp.highlight(d, cond);
   }


   function highlight(e,d){

       if(sp) sp.highlight(d);
   }

   function coordXform(d){

       var  cw = 1680, ch = 1050,  w = d.domainWidth, h = d.domainHeight,
           tx = -(cw -w)*0.5, ty = -(ch-h)*0.5, i;

       for (i = 0; i < d.length; i++){
           d[i][0] += tx;
           d[i][1] += ty;
       }

   }

   function update(e, d){

       if(sp === null) {

           //transform when scene ready
           coordXform(d.data.pos);

           sp = new Scatter(d.data.pos,
               element[0],
               {width: w,  height: h,
                scale: {x: 0.5, y: 0.5},
                    k: {x:0, y:1}
               });

           DataService.service('spSelection', condHighlight);

       }else {

           sp.update(d.data.pos);

       }
   }

   scope.$on('scene.ready', update);
   scope.$on('rp.selection', highlight);
   scope.$on('player.time', show);
};

    return {
      template: '<div id="tracking-sp" ng-show="showTracking"></div>',
      restrict: 'E',
      replace: true,
      link: postLink
      }
    });

