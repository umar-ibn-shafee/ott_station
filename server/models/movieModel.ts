import { Schema, model, Model} from 'mongoose';

interface IMovie {
    name: string,
    release_date: Date,
    release_year: string,
    otts_available: string[]
}

const movieSchema = new Schema<IMovie>({
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true,
    },
    release_year: {
        type: String,
        required: true
    },
    otts_available: [{
        type: String,
        required: true
    }]
}, { timestamps: true});

const MovieModel: Model<IMovie> = model<IMovie>('Movie', movieSchema);

export default MovieModel;