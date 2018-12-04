const db = require('../models');
const express = require('express');

module.exports = function (app) {

  // app.get('/api/index', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
  //     if (err) {
  //       res.status(500).send(err)
  //     }
  //   })
  // })

// Routes for github authentication


    app.get('/api/bugs', function (req, res) {
      db.Bugs.find({})
        .then(function (data) {
          console.log(req.user, "user")
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  
    app.post('/api/bugs', function (req, res) {
      console.log(req.body)
      db.Bugs.create(req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.put('/api/bugs/:id', function (req, res) {
      db.Bugs.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.delete('/api/bugs/:id', function (req, res) {
      db.Bugs.findOneAndDelete({_id: req.params.id})
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  }