const {Song} = require('../models');

module.exports = {
	async index (req, res) {
		try {
			const songs = await Song.findAll({
				limit: 10
			});
			// console.log('sent songs: ', songs)
			res.send(songs);
		} catch (err) {
			//Throw Generic error if login endpoint fails
		console.log('**generic error in songs**', err);
			res.status(500).send({
				error: 'An error has occurred trying to fetch the songs'
			});
		}
	},
	async post (req, res) {
		try {
			const song = await Song.create(req.body);
			console.log('song created was: ', song.title);
			console.log('By: ', song.artist);
			res.send(song);
		} catch (err) {
			//Throw Generic error if login endpoint fails
		console.log('**generic error** in songs', err);
			res.status(500).send({
				error: 'An error has occurred trying to create the songs'
			});
		}
	}
}
	// End of Songs logic