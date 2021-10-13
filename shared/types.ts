export type UriString = string
export type UniqueString = string
export type EntityId = number | UniqueString

export type Category = "Technology" | "Science" | "Arts"
export type DateIsoString = string

export type Post = {
  id: EntityId
  date: DateIsoString
  category: Category
  title: string
  lead: string
  content: string
  image: UriString
  source: UriString
}

export type WhatWeDoCardProps = {
  id?: EntityId,
  title: string,
  lead: string,
  image: UriString,
}

export type PriceListItem = {
  description?: string,
  price?: string,
  volume?: string,
  call?: string,
  priceOne?: string,
  priceTwo?: string,
  volumeOne?: string,
  volumeTwo?: string,
}

export type PriceList = {
  id?: EntityId,
  title?: string,
  priceList: PriceListItem[],
  logistic?: boolean,
}

export type WorkGallery = {
  id?: EntityId,
  lead: string,
  image: UriString,
}
