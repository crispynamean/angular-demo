'use strict';

angular.module('angularDemo.controllers', [])
  .controller('chatCtrl',
    ['$scope', '$interval', 'chatService', function($scope, $interval, chatService) {
      $scope.model = {
        username: "evan",
        messages: [],
        draft: ""
      }

      $scope.fetchMessages = function() {
        chatService.list().success( function(data) {
          $scope.model.messages = data
        })}

      $scope.submitDraft = function() {
        chatService.push($scope.model.username, $scope.model.draft)
        $scope.fetchMessages()
        $scope.model.draft = ""
      }

      $interval($scope.fetchMessages, 1000)

      $scope.fetchMessages()
    }])
