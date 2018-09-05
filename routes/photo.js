var express = require('express');
var router = express.Router();

/**
*
* Alternative strategy to API Gateway 
* Left here as an example 
*  
*
**/
router.get('/', function(req, res, next) {

	var mockResponse = {
        title: "Uploads from everyone",
        link: "https://www.flickr.com/photos/",
        description: "",
        modified: "2018-08-31T06:17:50Z",
        generator: "https://www.flickr.com",
        items: [
            {
                title: "Summer in Glacier NP",
                link: "https://www.flickr.com/photos/nikonshooterdude/29442635817/",
                media: {
                    m: "https://farm2.staticflickr.com/1883/29442635817_e9e076d292_m.jpg"
                },
                date_taken: "2018-07-15T16:08:03-08:00",
                description: '<p><a href="https://www.flickr.com/people/nikonshooterdude/">Loren R. Miller Photography</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/nikonshooterdude/29442635817/" title="Summer in Glacier NP"><img src="https://farm2.staticflickr.com/1883/29442635817_e9e076d292_m.jpg" width="240" height="160" alt="Summer in Glacier NP" /></a></p> ',
                published: "2018-08-31T06:17:50Z",
                author: "nobody@flickr.com ('Loren R. Miller Photography')",
                author_id: "76009658@N05",
                tags: "blue glacier glaciernationalpark grinnelllake hdr hdrphoto highdynamicrange lrmphotography light montana nikkor1024mm nikond7100 photostream summer usa waterfall wildflowers wildlife contrast landscape lightroom skyscape travel water"
            },
            {
                title: "MERDEKA. Malaysia’s 61st Independence Day at Putrajaya. #310818 #malaysia #new #celebrate #patriot #photo",
                link: "https://www.flickr.com/photos/142535953@N03/29442640097/",
                media: {
                    m: "https://farm2.staticflickr.com/1877/29442640097_4a2b18151a_m.jpg"
                },
                date_taken: "2018-08-31T10:29:41-08:00",
                description: ' <p><a href="https://www.flickr.com/people/142535953@N03/">zeckrombryan</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/142535953@N03/29442640097/" title="MERDEKA. Malaysia’s 61st Independence Day at Putrajaya. #310818 #malaysia #new #celebrate #patriot #photo"><img src="https://farm2.staticflickr.com/1877/29442640097_4a2b18151a_m.jpg" width="180" height="240" alt="MERDEKA. Malaysia’s 61st Independence Day at Putrajaya. #310818 #malaysia #new #celebrate #patriot #photo" /></a></p> ',
                published: "2018-08-31T06:18:02Z",
                author: "nobody@flickr.com ('zeckrombryan')",
                author_id: "142535953@N03",
                tags: "310818 malaysia new celebrate patriot photo"
            }
        ]
    }
	res.json({
		status: 'success',
		flickrFeed: mockResponse
	});

});

module.exports = router;
