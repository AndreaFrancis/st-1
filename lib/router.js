/**
 * Created by Andrea on 30/05/2015.
 */
Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {name: 'layout'});
/**Router.route('/labs', {
   name: 'labs',
   data: {
      labs: function() {
         return Labs.find();
      }
   }
});**/
Router.route('/labs');
/**Router.route('/labs',{
   data: {
      labs: function() {
         var cant = Labs.find().count();
         alert(cant);
         return Labs.find();
      }
   }
});**/
Router.route('/users');
//routas http://www.manuel-schoebel.com/blog/iron-router-tutorial

