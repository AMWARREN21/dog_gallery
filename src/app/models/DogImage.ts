export interface DogImages {
    message: [],
    status: string
}

export interface DogBreedList {
    message: breed,
    status: string
}

export interface breed {
    [key: string]: subBreed
}

export interface subBreed {
    [key: string]: any
}

export interface ModalImage {
    image: string
}


