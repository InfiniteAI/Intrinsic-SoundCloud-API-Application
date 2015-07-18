window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

App.Models.Track = Backbone.Model.extend();

App.Collections.Tracks = Backbone.Collection.extend({
  model: App.Models.Track,
  url: 'http://api.soundcloud.com/tracks'
});

App.Views.Tracks = Backbone.View.extend({
  tagName: 'ol',
  initialize: function() {
    //var model = new App.Models.Track({id: 'asdf'});
    //this.collection.add(model);
    //this.collection.on('add', this.render);
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.empty();
    console.log('collection: ', this.collection);
    this.collection.each(this.addOne, this);
    return this;
  },
  addOne: function(track) {
    console.log('model: ', track);
    var trackView = new App.Views.Track({ model: track });
    this.$el.append(trackView.render().el);
  }
});

App.Views.Track = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#trackTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var tracks = new App.Collections.Tracks();
tracks.fetch({
  data: {
    format: 'json',
<<<<<<< HEAD
    client_id: '6fc7b8b965bfe1e3efadc31a932d49ea',
=======
    client_id: 'ad93c604ac3543f0ddfdfaa77e9e945c',
>>>>>>> ba4b9df71b1123a5541c92ecb0dbaa00d93c8deb
    genres: 'deep house',
    order: 'hotness',
    limit: '5'
  }
});

var app = new App.Views.Tracks({
  collection: tracks
});

$('.tracks').html(app.render().el);
