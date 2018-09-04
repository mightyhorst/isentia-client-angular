/**
*
* This interface is used to strongly type and validate the Flickr API items feed. 
* Furthermore it can be used as a template for initialising the FlickrPhotoModel constructor
*
**/
export interface IFlickrApiItemContract{
	title: string;
    link: string;
    media:  {
    	m: string
    };
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
    photo_id: string;
} 