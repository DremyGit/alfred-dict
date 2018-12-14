export interface DictConstructor {
  new (): DictInterface
  icon: string
}

export interface DictInterface {
  search(text: string): Promise<SearchResultItem[]>
}

export interface SearchResultItem {
  type: string
  value: string
}
