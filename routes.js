const routes = require('next-routes')();

routes
	.add('/moneypools/new', '/moneypools/new')
	.add('/moneypools/:address', '/moneypools/show')
	.add('/moneypools/:address/requests', '/moneypools/requests/index')
	.add('/moneypools/:address/requests/new', '/moneypools/requests/new');


module.exports = routes;