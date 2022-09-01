//dog images gets message as an array and status as string
export interface DogImages {
    message: [],
    status: string
}
//breed list gets message as breed interface and status as string
export interface DogBreedList {
    message: breed,
    status: string
}
//breed takes in a variety of different key names with the subBreed interface
export interface breed {
    [key: string]: subBreed
}
//sub-breed takes in a variety of different key names and either an empty array or filled with strings so I put any
export interface subBreed {
    [key: string]: any
}

//Modal image takes in an image as a string
export interface ModalImage {
    image: string
}


