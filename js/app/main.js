angular.module('app', [])
    .controller('FirstCtrl', function(){
        var first = this;
        first.data = "First"
    })
    .controller("SecondCtrl", function(){
        var second = this;
        second.data = "Second"
    });
