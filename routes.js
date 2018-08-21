const routes = require('next-routes')();

routes
	.add('/moneypools/new', '/moneypools/new')
	.add('/moneypools/:address', '/moneypools/show');


module.exports = routes;