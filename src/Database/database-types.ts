
export interface Folder {
    id?: number
    name: string
    order: number
    isFavorite: boolean
}

export interface Snippet {
    id?: number
    folderID: number
    name: string
    tags: string[]
    isFavorite: boolean
    lastViewed: number
    created: number
}

export interface Fragment {
    id?: number
    snippetID: number
    name: string
    code: string
    language: string
    order: number
}

