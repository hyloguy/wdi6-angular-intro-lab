var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = $scope.cart || [];

  //Code to manage cart goes here
  $scope.addBookToCart = function(book) {
  	$scope.cart.push(book);
  };

  $scope.getTotalInCart = function() {
  	total = 0;
  	for (i=0; i<$scope.cart.length; i++) {
  		total += $scope.cart[i].price;
  	}
  	return total;
  };

  $scope.emptyCart = function() {
  	$scope.cart = [];
  }

};
