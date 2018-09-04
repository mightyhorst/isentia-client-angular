import {IFlickrApiItemContract} from './IFlickrApiItemContract';

/**
*
* This interface is used to strongly type and validate the Flickr API  feed. 
*
**/
export interface IFlickrFeedContract{
    title: string,
    link: string;
    description: string;
    modified: string;
    generator: string;
    items: IFlickrApiItemContract[];
}
export interface IFlickrApiContract{
	statusCode: string;
    flickrFeed: IFlickrFeedContract;
} 