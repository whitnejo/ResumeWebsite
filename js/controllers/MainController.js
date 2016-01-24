app.controller('MainController', ['$scope', function($scope) {
	$scope.current_read = [
		{
			title: 'Code',
			author: 'Charles Petzold',
			cover_img: 'img/bookshelf/CodeCoverSmall.png'
		}
	];

	$scope.wait_list = [
		{
			title: 'The Art of Electronics - 3rd Edition',
			author: '',
			cover_img: 'img/bookshelf/ArtOfElecCover.jpg',
			link: ''
		
		{
			title: '3D Printing with Autodesk 123D, TinkerCAD and Makerbot',
			author: '',
			cover_img: 'img/bookshelf/PrintingAutodesk123DCoverSmall.png',
			link: ''
		},
		{
			title: 'Harry Potter and the Prisoner of Azkaban',
			author: '',
			cover_img: 'img/bookshelf/HarryPotter3CoverSmall.png',
			link: ''
		},
	];
};