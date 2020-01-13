import { AnimalPerrito} from './animal-perrito.interface';

export interface Duenio { // interface -> (Struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaNacimiento: number;
    mascotasPerros?: AnimalPerrito[];
} 