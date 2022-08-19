// these are route handler functions for particular route
// export each function individually
// each function at the end sends a response either 400 or 200 depending on the scenario.
// routes involving id's check id validity to avoide mongoose invalid ID errors ie "Internal Server Error" by "mongoose.Types.ObjectId.isValid(id)"
