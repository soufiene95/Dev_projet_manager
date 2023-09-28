const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        NomDuProjet: String,
        Description: String,
        Technologies: String,
        DateDebut: Date,
        DateFin: Date
    });

    module.exports = mongoose.model('Projet', UserSchema);