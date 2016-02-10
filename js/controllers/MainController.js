app.controller('MainController', ['$scope', function($scope) {
	$scope.thing = "THING";
	$scope.current_read = [
		{
			title: 'Code',
			author: 'Charles Petzold',
			action: 'Reading',
			cover_img: 'img/bookshelf/CodeCoverSmall.png',
			link: 'http://www.amazon.com/gp/product/0735611319/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0735611319&linkCode=as2&tag=delinestatio-20&linkId=EFXPZPKP33SYSPKS',
			amazon_link: 'http://ir-na.amazon-adsystem.com/e/ir?t=delinestatio-20&l=as2&o=1&a=0735611319'
		}
	]

	$scope.wait_list = [
		{
			title: 'The Art of Electronics - 3rd Edition',
			author: 'Paul Horowitz & Winfield Hill',
			action: 'Wait List',
			cover_img: 'img/bookshelf/ArtOfElecCover.jpg',
			link: 'http://www.amazon.com/gp/product/0521809266/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0521809266&linkCode=as2&tag=delinestatio-20&linkId=SM6CT73OWJ2TP3AM',
			amazon_link: 'http://ir-na.amazon-adsystem.com/e/ir?t=delinestatio-20&l=as2&o=1&a=0521809266'
		},
		{
			title: '3D Printing with Autodesk 123D, TinkerCAD and Makerbot',
			author: 'Lydia Cline',
			action: 'Wait List',
			cover_img: 'img/bookshelf/PrintingAutodesk123DCoverSmall.png',
			link: 'http://www.amazon.com/gp/product/0071833471/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0071833471&linkCode=as2&tag=delinestatio-20&linkId=Z2G3KLFVG5YHY3H3',
			amazon_link: 'http://ir-na.amazon-adsystem.com/e/ir?t=delinestatio-20&l=as2&o=1&a=0071833471'
		},
		{
			title: 'Harry Potter and the Prisoner of Azkaban',
			author: 'J.K. Rowling',
			action: 'Wait List - Re-read',
			cover_img: 'img/bookshelf/HarryPotter3CoverSmall.png',
			link: 'http://www.amazon.com/gp/product/0439136369/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0439136369&linkCode=as2&tag=delinestatio-20&linkId=JQFFFDCXT7QLUUGR',
			amazon_link: 'http://ir-na.amazon-adsystem.com/e/ir?t=delinestatio-20&l=as2&o=1&a=0439136369'
		}
	]

	$scope.blog_list = [
		{
			title: "Thing One",
			img: "img/bookshelf/ArtOfElecCover.jpg",
			link: "",
			summary: ""
		}
	]
}]);