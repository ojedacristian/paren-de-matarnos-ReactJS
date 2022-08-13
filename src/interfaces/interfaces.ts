export interface GSearchRes {
    kind:             Kind;
    title:            string;
    htmlTitle:        string;
    link:             string;
    displayLink:      string;
    snippet:          string;
    htmlSnippet:      string;
    formattedUrl:     string;
    htmlFormattedUrl: string;
    pagemap:          Pagemap;
    cacheId?:         string;
}

export enum Kind {
    CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
    cse_thumbnail:           CSEThumbnail[];
    imageobject?:            Imageobject[];
    speakablespecification?: Speakablespecification[];
    organization?:           Organization[];
    metatags:                { [key: string]: string }[];
    cse_image:               CSEImage[];
    article?:                Article[];
    sitenavigationelement?:  Sitenavigationelement[];
    newsarticle?:            Newsarticle[];
    imagegallery?:           Imagegallery[];
    listitem?:               Listitem[];
}

export interface Article {
    articlebody:         string;
    datemodified:        Date;
    isaccessibleforfree: string;
    description:         string;
    datecreated:         Date;
    headline:            string;
    datepublished:       Date;
    mainentityofpage:    string;
}

export interface CSEImage {
    src: string;
}

export interface CSEThumbnail {
    src:    string;
    width:  string;
    height: string;
}

export interface Imagegallery {
    url: string;
}

export interface Imageobject {
    width:    string;
    url:      string;
    height:   string;
    caption?: string;
}

export interface Listitem {
    item:     string;
    name:     string;
    position: string;
}

export interface Newsarticle {
    datemodified:        Date;
    dateupdated:         Date;
    articlesection:      string;
    author:              string;
    alternativeheadline: string;
    name:                string;
    description:         string;
    headline:            string;
    url:                 string;
    datepublished:       Date;
}

export interface Organization {
    name:    string;
    url?:    string;
    sameas?: string;
}

export interface Sitenavigationelement {
    name: string;
    url:  string;
}

export interface Speakablespecification {
    cssselector: string;
}
