import express from 'express';

const app = express();

app.use('/api/dashboard', (req, res, next) => {
	res.send('<h1>Hello from node</h1>');
});

app.use('/api/users', (req, res, next) => {
	res.send('<h1>All users</h1>');
});

app.listen(8000, () => {
	console.log('Server is listening on port 8000');
});
