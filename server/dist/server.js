"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const movieModel_1 = __importDefault(require("./models/movieModel"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Ecpress + TS Server");
    // res.json({Msg: "This is a GET /"})
});
// mongoose.connect
run().catch((err) => console.log('ERROR:', err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`[server]: TS & Express Server is running at https://localhost:${port}`);
        });
        const dummy_movie = new movieModel_1.default({
            name: 'RRR',
            release_date: new Date('2022-04-22'),
            release_year: '2022',
            otts_available: ['Prime', 'Hotstar']
        });
        yield dummy_movie.save();
    });
}
