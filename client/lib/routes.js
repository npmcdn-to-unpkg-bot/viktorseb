FlowRouter.route('/', {
  action: function() {
    BlazeLayout.reset();
    BlazeLayout.render('mainLayout', {
      main: 'test',
      sub_header : 'sub_header_explore'
    });
  },
});

FlowRouter.route('/signup',{
  name: 'signup',
  action(){
    BlazeLayout.render('signup');
  },
});

FlowRouter.route('/explore_event',{
  name: 'explore_event',
  action: function(){
    BlazeLayout.render('explore_event');
  },
});

FlowRouter.route('/chat',{
  name: 'landing_chat',
  action: function(){
  BlazeLayout.render('mainLayout', {
    main : 'banner_landing_chat',
    sub_header : 'sub_header_landing' 
  });
  },
});

FlowRouter.route('/second',{
  name: 'landing_second',
  action: function(){  
  BlazeLayout.render('mainLayout', {
    main : 'landing_second',
    sub_header : 'sub_header_landing' 
  });  
 },
});

FlowRouter.route('/explore',{
  name: 'landing_without_trip',
  action: function(){
  BlazeLayout.render('mainLayout', {
    main : 'without_trip',
    sub_header : 'sub_header_explore'
  });
  },
});

FlowRouter.route('/mytrip_test',{
  name: 'mytrip',
  action: function(){
    BlazeLayout.render('mainLayout', {
      main : 'my_trip',
      sub_header : 'sub_header_landing'
    })
  },
});


FlowRouter.route('/travelguide', {
  name: 'travel_guide',
  action: function() {
    BlazeLayout.render('mainLayout');
  },
});

FlowRouter.route('/travelogue', {
  name: 'mytravelogue',
  action: function() {

    BlazeLayout.render('mainLayout', { 
      main: 'mytravelogue',
      sub_header: 'sub_header_mytravelogue'
    });
  },
});

FlowRouter.route('/login',{
  name: 'login',
  action: function() {
    BlazeLayout.render('login');
  },
});

FlowRouter.route('/travel-guide-search',{
  name: 'travel_guide_search',
  action: function() {
    BlazeLayout.render('travel_guide_search');
  },
});
  
FlowRouter.route('/landing',{
  name: 'landing',
  action: function() {
    BlazeLayout.render('landing');
  },
});

FlowRouter.route('/planner_trip',{
  name: 'planner_trip',
  action: function() {
    BlazeLayout.render('mainLayout',{
      main:'planner_trip',
    });
  },
});

FlowRouter.route('/planner_trip_bookmark',{
  name: 'planner_trip_bookmark',
  action: function() {
    BlazeLayout.render('mainLayout',{
      main:'planner_trip_bookmark',
    });
  },
});

