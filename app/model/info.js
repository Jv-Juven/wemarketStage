module.exports = app => {
    const mongoose = app.mongoose;
    const InfoSchema = new mongoose.Schema({
        name: {
            type: String
        },
        age: {
            type: Number,
            min: 0,
            max: 120
        }
    });
    return mongoose.model('Info', InfoSchema);
}
