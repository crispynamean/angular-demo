'use strict';

angular.module('angularDemo.services', [])
  .factory('chatService', ['$http', function ($http) {
    var chatService = {}

    chatService.push = function(username, message) {
      $http({
        method: "POST",
        url: "http://localhost:8000/message",
        data: {username: username, message: message}
      })
    }

    chatService.list = function() {
      return $http({
        method: "GET",
        url: "http://localhost:8000/messages"
      })
    }

    return chatService
  }])
